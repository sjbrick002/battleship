import { Ship, Board, Player} from "./src/factory.js"
import { checkWinner } from "./src/gamePlay.js"

describe("Ship factory function tests", () => {
    test("Ship object returns an array with a length based off ship hitpoints", () => {
        expect(Ship("ship",0)["hull"]).toEqual([]);
        expect(Ship("ship",2)["hull"]).toEqual([0,0]);
        expect(Ship("ship",3)["hull"]).toEqual([0,0,0]);
        expect(Ship("ship",4)["hull"]).toEqual([0,0,0,0]);
        expect(Ship("ship",5)["hull"]).toEqual([0,0,0,0,0]);
    });
    
    test("Ship(x).hit() function changes given array item value to 1", () => {
        const ship = Ship("ship",5);
        ship.hit(3);
        expect(ship["hull"][3]).toEqual(1);
    });
    
    test("Ship(x).isSunk() returns false if ship's hull array items are not all 1", () => {
        const ship = Ship("ship",2);
        expect(ship.isSunk()).toBeFalsy();
    });

    test("Ship(x).isSunk() returns true if ship's hull array items are all 1", () => {
        const ship = Ship("ship",2);
        ship.hit(0);
        ship.hit(1);
        expect(ship.isSunk()).toBeTruthy();
    });
});

describe("Board factory function tests", () => {
    test("Board().reportCoordinateAsset() will return null if a ship has not been placed at coordinate", () => {
        const board = Board();
        expect(board.reportCoordinateAsset(0)).toBeNull();
    });

    test("Board().reportCoordinateAsset() will return an array of a ship object and its hull section index number if a ship has been placed at coordinates", () => {
        const board = Board();
        const destroyer = Ship("destroyer",2);
        board.placeBoat(0, destroyer, true);
        expect(board.reportCoordinateAsset(0)).toEqual([destroyer, 0]);
    });
    
    test("Board().placeBoat() can change values of the board's target coordinate key in the horizontal direction", () => {
        let boat = Ship("boat",4);
        let board = Board();
        board.placeBoat(0, boat, false);
        expect(board.reportCoordinateAsset(0)).toEqual([boat, 0]);
        expect(board.reportCoordinateAsset(1)).toEqual([boat, 1]);
        expect(board.reportCoordinateAsset(2)).toEqual([boat, 2]);
        expect(board.reportCoordinateAsset(3)).toEqual([boat, 3]);
    });
    
    test("Board().placeBoat() can change values of the board's target coordinate key in the vertical direction", () => {
        let boat = Ship("boat",4);
        let board = Board();
        board.placeBoat(0, boat, true);
        expect(board.reportCoordinateAsset(0)).toEqual([boat, 0]);
        expect(board.reportCoordinateAsset(10)).toEqual([boat, 1]);
        expect(board.reportCoordinateAsset(20)).toEqual([boat, 2]);
        expect(board.reportCoordinateAsset(30)).toEqual([boat, 3]);
    });
    
    test("Board().placeBoat() will check if a boat will fit in specified coordinates before changing board values", () => {
        let boat = Ship("boat",5);
        let board = Board();
        expect(board.placeBoat(6, boat, false)).toEqual("Insufficient space");
        expect(board.placeBoat(60, boat, true)).toEqual("Insufficient space");
    });
    
    test("Board().placeBoat() will check if boat assets already exist at coordinates before a new boat is placed", () => {
        let battleship = Ship("battleship",4);
        let board = Board();
        board.placeBoat(0, battleship, true);
        expect(board.placeBoat(30, Ship("ship",5), true)).toEqual("There is already a ship there!");
    });

    test("Board().targetCoordinate() will record when a coordinate is attacked and not run if the coordinate has been attacked before", () => {
        let board = Board();
        expect(board.targetCoordinate(0)).toEqual(null);
        expect(board.targetCoordinate(0)).toEqual(undefined);
    });
    
    test("Board().targetCoordinate() upon a hit will call appropriate ship's Hit() function and check if the damaged ship is sunk returning an array of the ship hit and boolean value of true or false based on the ship's sunk status", () => {
        let board = Board();
        let destroyer = Ship("destroyer",2);
        board.placeBoat(21, destroyer, false);
        expect(board.targetCoordinate(22)).toEqual(["destroyer",false]);
        expect(destroyer.hull[1]).toEqual(1);
        expect(board.targetCoordinate(21)).toEqual(["destroyer",true]);
    });
});

describe("Player factory function tests", () => {
    test("Player().receiveAttack() will return null when the attack misses the boats", () => {
        expect(Player().receiveAttack(0,0)).toBeNull();
    });

    test("Player().receiveAttack() will return undefined when the attack targets a coordinate that has already been attacked", () => {
        let player = Player();
        player.receiveAttack(0);
        expect(player.receiveAttack(0)).toEqual(undefined);
    });

    test("Player().receiveAttack() will return [ship.name,false] when the attack hits a ship but does not sink it", () => {
        let player = Player();
        player.setShip(0, true);
        expect(player.receiveAttack(20)).toEqual(["carrier",false]);
    });

    test("Player().receiveAttack() will return [ship.name,true] when the attack hits a ship and sinks it", () => {
        let player = Player();
        player.setShip(0,true);
        player.receiveAttack(0);
        player.receiveAttack(10);
        player.receiveAttack(20);
        player.receiveAttack(30);
        expect(player.receiveAttack(40)).toEqual(["carrier",true]);
    });

    test("Player().setShip() will return 'success' when a ship is successfully placed on the board", () => {
        let player = Player();
        expect(player.setShip(13,false)).toEqual("success");
        expect(player.setShip(33,true)).toEqual("success");
    });

    test("Player().setShip() will return 'Insufficient space' when a ship cannot placed on the board due to the ship running beyond the board's 'boundaries", () => {
        let player = Player();
        expect(player.setShip(83,true)).toEqual("Insufficient space");
        expect(player.setShip(9,false)).toEqual("Insufficient space");
    });

    test("Player().setShip() will return 'There is already a ship there!' when a ship cannot placed on the board due to another ship already taking up the specified space", () => {
        let player = Player();
        player.setShip(0,true)
        expect(player.setShip(20,false)).toEqual("There is already a ship there!");
    });

    test("Player().isFleetDead() will return false when at least one ship is not sunk", () => {
        let player = Player();
        expect(player.isFleetDead()).toEqual(false);
    });

    test("Player().isFleetDead() will return true when all ships are sunk", () => {
        let player = Player();
        player.setShip(4,false);
        player.setShip(22,true);
        player.setShip(45,false);
        player.setShip(90,false);
        player.setShip(76,true);
        player.receiveAttack(4);
        player.receiveAttack(5);
        player.receiveAttack(6);
        player.receiveAttack(7);
        player.receiveAttack(8);
        player.receiveAttack(22);
        player.receiveAttack(32);
        player.receiveAttack(42);
        player.receiveAttack(52);
        player.receiveAttack(45);
        player.receiveAttack(46);
        player.receiveAttack(47);
        player.receiveAttack(90);
        player.receiveAttack(91);
        player.receiveAttack(92);
        player.receiveAttack(76);
        player.receiveAttack(86);
        expect(player.isFleetDead()).toEqual(true);
    });
});

describe("Player interaction tests", () => {
    test("attack() returns an array of [null,'miss'] when given coordinates a ship does not exist in", () => {
        const player = Player();
        expect(player.attack(0,player)).toEqual([null,"miss"]);
    });

    test("attack() returns 'hit' when given coordinates a ship exists in", () => {
        const player = Player();
        player.setShip(4,false);
        expect(player.attack(4,player)).toEqual(["carrier","hit"]);
    });

    test("attack() returns [ship.name,'sunk'] when given coordinates a ship exists in where isSunk() returns true", () => {
        const computer = Player();
        const player = Player();
        //DUMMY CONTENT
        computer.setShip(4,false);
        computer.setShip(22,true);
        computer.setShip(45,false);
        computer.setShip(90,false);
        computer.setShip(76,true);
        player.setShip(4,false);
        player.setShip(22,true);
        player.setShip(45,false);
        player.setShip(90,false);
        player.setShip(76,true);
        //
        player.attack(76,computer);
        computer.attack(0,player);
        expect(player.attack(86,computer)).toEqual(["destroyer","sunk"]);
    });

    test("checkWinner() will return 'Player wins!' if computer.isFleetDead() returns true but player.isFleetDead() returns false", () => {
        const computer = Player();
        const player = Player();
        const players = [player,computer];
        //DUMMY CONTENT
        computer.setShip(4,false);
        computer.setShip(22,true);
        computer.setShip(45,false);
        computer.setShip(90,false);
        computer.setShip(76,true);
        player.setShip(4,false);
        player.setShip(22,true);
        player.setShip(45,false);
        player.setShip(90,false);
        player.setShip(76,true);
        //
        player.attack(4,computer);
        computer.attack(4,player);
        player.attack(5,computer);
        computer.attack(5,player);
        player.attack(6,computer);
        computer.attack(6,player);
        player.attack(7,computer);
        computer.attack(7,player);
        player.attack(8,computer);
        computer.attack(8,player);
        player.attack(22,computer);
        computer.attack(22,player);
        player.attack(32,computer);
        computer.attack(32,player);
        player.attack(42,computer);
        computer.attack(42,player);
        player.attack(52,computer);
        computer.attack(52,player);
        player.attack(45,computer);
        computer.attack(45,player);
        player.attack(46,computer);
        computer.attack(46,player);
        player.attack(47,computer);
        computer.attack(47,player);
        player.attack(90,computer);
        computer.attack(90,player);
        player.attack(91,computer);
        computer.attack(91,player);
        player.attack(92,computer);
        computer.attack(92,player);
        player.attack(76,computer);
        computer.attack(76,player);
        player.attack(86,computer);
        expect(checkWinner(players)).toEqual("Player wins!");
    });

    test("checkWinner() will return 'computer wins!' if computer.isFleetDead() returns false but player.isFleetDead() returns true", () => {
        const computer = Player();
        const player = Player();
        const players = [player,computer];
        //DUMMY CONTENT
        computer.setShip(4,false);
        computer.setShip(22,true);
        computer.setShip(45,false);
        computer.setShip(90,false);
        computer.setShip(76,true);
        player.setShip(4,false);
        player.setShip(22,true);
        player.setShip(45,false);
        player.setShip(90,false);
        player.setShip(76,true);
        //
        player.attack(4,computer);
        computer.attack(4,player);
        player.attack(5,computer);
        computer.attack(5,player);
        player.attack(6,computer);
        computer.attack(6,player);
        player.attack(7,computer);
        computer.attack(7,player);
        player.attack(8,computer);
        computer.attack(8,player);
        player.attack(22,computer);
        computer.attack(22,player);
        player.attack(32,computer);
        computer.attack(32,player);
        player.attack(42,computer);
        computer.attack(42,player);
        player.attack(52,computer);
        computer.attack(52,player);
        player.attack(45,computer);
        computer.attack(45,player);
        player.attack(46,computer);
        computer.attack(46,player);
        player.attack(47,computer);
        computer.attack(47,player);
        player.attack(90,computer);
        computer.attack(90,player);
        player.attack(91,computer);
        computer.attack(91,player);
        player.attack(92,computer);
        computer.attack(92,player);
        player.attack(76,computer);
        computer.attack(76,player);
        player.attack(77,computer);
        computer.attack(86,player);
        expect(checkWinner(players)).toEqual("Opponent wins!");
    });
});