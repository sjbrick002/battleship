import { Board, Ship } from "./script.js"

test("Boards can return value of specified coordinate", () => {
    const playerboard = Board();
    expect(playerboard.reportCoordinateValue(0, 0)).toBeNull();
});

test("placeBoat() can change values of the board's target coordinate key in the horizontal direction", () => {
    let boat = Ship(4);
    let board = Board();
    board.placeBoat(0, 0, boat, false);
    expect(board.reportCoordinateValue(0, 0)).toEqual(boat.hull[0]);
    expect(board.reportCoordinateValue(0, 1)).toEqual(boat.hull[1]);
    expect(board.reportCoordinateValue(0, 2)).toEqual(boat.hull[2]);
    expect(board.reportCoordinateValue(0, 3)).toEqual(boat.hull[3]);
});

test("placeBoat() will check if a boat will fit in specified coordinates before changing board values", () => {
    let boat = Ship(5);
    let board = Board();
    expect(board.placeBoat(0, 7, boat, false)).toEqual("Insufficient space");
    expect(board.placeBoat(6, 7, boat, true)).toEqual("Insufficient space");
});

test("placeBoat() can change values of the board's target coordinate key in the vertical direction", () => {
    let boat = Ship(4);
    let board = Board();
    board.placeBoat(0, 0, boat, true);
    expect(board.reportCoordinateValue(0, 0)).toEqual(boat.hull[0]);
    expect(board.reportCoordinateValue(1, 0)).toEqual(boat.hull[1]);
    expect(board.reportCoordinateValue(2, 0)).toEqual(boat.hull[2]);
    expect(board.reportCoordinateValue(3, 0)).toEqual(boat.hull[3]);
});

test("Ship object returns an array with a length based off ship hitpoints", () => {
    let ship = Ship(5);
    expect(ship["hull"]).toEqual([0,0,0,0,0]);
});

test("Ship object changes array item value to 1", () => {
    expect(Ship(5).Hit(3)).toEqual(1)
});

test("Ship object checks if ship has sunk", () => {
    expect(Ship(5).isSunk()).toBeFalsy();
});