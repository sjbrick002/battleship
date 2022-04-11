import { factory } from "./script.js"

describe.skip("battleship version 1 tests", () => {
    test("reportCoordinateValue() will return coordinate object's asset value", () => {
        const board = factory.Board();
        expect(board.reportCoordinateValue(0, 0)).toBeNull();
        const destroyer = factory.Ship(2);
        board.placeBoat(0, 0, destroyer, true);
        expect(board.reportCoordinateValue(0, 0)).not.toBeNull();
        expect(board.reportCoordinateValue(0, 0)).toEqual([destroyer, 0]);
    });
    
    test("placeBoat() can change values of the board's target coordinate key in the horizontal direction", () => {
        let boat = factory.Ship(4);
        let board = factory.Board();
        board.placeBoat(0, 0, boat, false);
        expect(board.reportCoordinateValue(0, 0)).toEqual([boat, 0]);
        expect(board.reportCoordinateValue(0, 1)).toEqual([boat, 1]);
        expect(board.reportCoordinateValue(0, 2)).toEqual([boat, 2]);
        expect(board.reportCoordinateValue(0, 3)).toEqual([boat, 3]);
    });
    
    test("placeBoat() will check if a boat will fit in specified coordinates before changing board values", () => {
        let boat = factory.Ship(5);
        let board = factory.Board();
        expect(board.placeBoat(0, 7, boat, false)).toEqual("Insufficient space");
        expect(board.placeBoat(6, 7, boat, true)).toEqual("Insufficient space");
    });
    
    test("placeBoat() can change values of the board's target coordinate key in the vertical direction", () => {
        let boat = factory.Ship(4);
        let board = factory.Board();
        board.placeBoat(0, 0, boat, true);
        expect(board.reportCoordinateValue(0, 0)).toEqual([boat, 0]);
        expect(board.reportCoordinateValue(1, 0)).toEqual([boat, 1]);
        expect(board.reportCoordinateValue(2, 0)).toEqual([boat, 2]);
        expect(board.reportCoordinateValue(3, 0)).toEqual([boat, 3]);
    });
    
    test("placeBoat() will check if boat assets already exist at coordinates before a new boat is placed", () => {
        let battleship = factory.Ship(4);
        let board = factory.Board();
        board.placeBoat(0, 0, battleship, true);
        expect(board.placeBoat(2, 0, factory.Ship(5), true)).toEqual("There is already a ship there!");
    });
    
    test("checkAttacked() will check if coordinates have previously been attacked", () => {
        expect(factory.Board().checkAttacked(0,0)).toBeFalsy();
    });
    
    test("targetCoordinate() upon a hit will call appropriate ship's Hit() function and check if the damaged ship is sunk", () => {
        let board = factory.Board();
        let destroyer = factory.Ship(2);
        board.placeBoat(3, 2, destroyer, false);
        expect(board.targetCoordinate(3, 3)).toEqual(false);
        expect(destroyer.hull[1]).toEqual(1);
        expect(board.targetCoordinate(3, 2)).toEqual(true);
    });
    
    test("targetCoordinate() will record when a coordinate is attacked and not run if the coordinate has been attacked before", () => {
        let board = factory.Board();
        expect(board.targetCoordinate(0, 0)).toEqual(null);
        expect(board.targetCoordinate(0, 0)).toEqual(undefined);
    });
    
    test("Ship object returns an array with a length based off ship hitpoints", () => {
        let ship = factory.Ship(5);
        expect(ship["hull"]).toEqual([0,0,0,0,0]);
    });
    
    test("Ship object changes array item value to 1 when hit", () => {
        expect(factory.Ship(5).hit(3)).toEqual(1)
    });
    
    test("Ship object checks if ship has sunk", () => {
        const ship = factory.Ship(2);
        expect(ship.isSunk()).toBeFalsy();
        ship.hit(0);
        ship.hit(1);
        expect(ship.isSunk()).toBeTruthy();
    });
    
    test("Player fleet starts out with 5 ships", () => {
        const player = factory.Player();
        expect(player.fleet.length).toEqual(6);
    });
    
    test("Player fleet loses ship when isSunk reports true", () => {
        let player = factory.Player();
        expect(player.loseShip().length).toEqual(5);
    });
});