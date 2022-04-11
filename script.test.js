import { factory, gamePlay } from "./script.js"

describe("Ship constructor tests", () => {
    test("Ship object returns an array with a length based off ship hitpoints", () => {
        expect(factory.Ship(0)["hull"]).toEqual([]);
        expect(factory.Ship(2)["hull"]).toEqual([0,0]);
        expect(factory.Ship(3)["hull"]).toEqual([0,0,0]);
        expect(factory.Ship(4)["hull"]).toEqual([0,0,0,0]);
        expect(factory.Ship(5)["hull"]).toEqual([0,0,0,0,0]);
    });
    
    test("Ship(x).hit() function changes given array item value to 1", () => {
        const ship = factory.Ship(5);
        ship.hit(3);
        expect(ship["hull"][3]).toEqual(1);
    });
    
    test("Ship(x).isSunk() returns false if ship's hull array items are not all 1", () => {
        const ship = factory.Ship(2);
        expect(ship.isSunk()).toBeFalsy();
    });

    test("Ship(x).isSunk() returns true if ship's hull array items are all 1", () => {
        const ship = factory.Ship(2);
        ship.hit(0);
        ship.hit(1);
        expect(ship.isSunk()).toBeTruthy();
    });
});

describe("Board constructor tests", () => {
    test("Board().reportCoordinateAsset() will return null if a ship has not been placed at coordinate", () => {
        const board = factory.Board();
        expect(board.reportCoordinateAsset(0, 0)).toBeNull();
    });

    test("Board().reportCoordinateAsset() will return an array of a ship and its hull section index number if a ship has been placed at coordinates", () => {
        const board = factory.Board();
        const destroyer = factory.Ship(2);
        board.placeBoat(0, 0, destroyer, true);
        expect(board.reportCoordinateAsset(0, 0)).toEqual([destroyer, 0]);
    });
    
    test("Board().placeBoat() can change values of the board's target coordinate key in the horizontal direction", () => {
        let boat = factory.Ship(4);
        let board = factory.Board();
        board.placeBoat(0, 0, boat, false);
        expect(board.reportCoordinateAsset(0, 0)).toEqual([boat, 0]);
        expect(board.reportCoordinateAsset(0, 1)).toEqual([boat, 1]);
        expect(board.reportCoordinateAsset(0, 2)).toEqual([boat, 2]);
        expect(board.reportCoordinateAsset(0, 3)).toEqual([boat, 3]);
    });
    
    test("Board().placeBoat() can change values of the board's target coordinate key in the vertical direction", () => {
        let boat = factory.Ship(4);
        let board = factory.Board();
        board.placeBoat(0, 0, boat, true);
        expect(board.reportCoordinateAsset(0, 0)).toEqual([boat, 0]);
        expect(board.reportCoordinateAsset(1, 0)).toEqual([boat, 1]);
        expect(board.reportCoordinateAsset(2, 0)).toEqual([boat, 2]);
        expect(board.reportCoordinateAsset(3, 0)).toEqual([boat, 3]);
    });
    
    test("Board().placeBoat() will check if a boat will fit in specified coordinates before changing board values", () => {
        let boat = factory.Ship(5);
        let board = factory.Board();
        expect(board.placeBoat(0, 7, boat, false)).toEqual("Insufficient space");
        expect(board.placeBoat(6, 7, boat, true)).toEqual("Insufficient space");
    });
    
    test("Board().placeBoat() will check if boat assets already exist at coordinates before a new boat is placed", () => {
        let battleship = factory.Ship(4);
        let board = factory.Board();
        board.placeBoat(0, 0, battleship, true);
        expect(board.placeBoat(2, 0, factory.Ship(5), true)).toEqual("There is already a ship there!");
    });

    test("Board().targetCoordinate() will record when a coordinate is attacked and not run if the coordinate has been attacked before", () => {
        let board = factory.Board();
        expect(board.targetCoordinate(0, 0)).toEqual(null);
        expect(board.targetCoordinate(0, 0)).toEqual(undefined);
    });
    
    test("Board().targetCoordinate() upon a hit will call appropriate ship's Hit() function and check if the damaged ship is sunk", () => {
        let board = factory.Board();
        let destroyer = factory.Ship(2);
        board.placeBoat(3, 2, destroyer, false);
        expect(board.targetCoordinate(3, 3)).toEqual(false);
        expect(destroyer.hull[1]).toEqual(1);
        expect(board.targetCoordinate(3, 2)).toEqual(true);
    });
});

describe("Player interaction tests", () => {
    test("attack() returns 'miss' when given coordinates a ship does not exist in", () => {
        expect(gamePlay.attack(0, 0)).toEqual("miss");
    });
});