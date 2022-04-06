const Ship = (hitpoints) => {
    let hull = [];
    for (let i = 0; i < hitpoints; i++) {
        hull.push(0);
    };
    function Hit(index) {
        hull[index] = 1;
        return hull[index];
    };
    function isSunk() {
        let damage = hull.reduce((prev, current) => prev + current, 0);
        if (hitpoints === damage) {return true};
        return false;
    };
    return {hull, Hit, isSunk}
};

const Board = () => {
    let board = [
    //col: 1     2     3     4     5     6     7    8      9     10
        [null, null, null, null, null, null, null, null, null, null], // row A
        [null, null, null, null, null, null, null, null, null, null], // row B
        [null, null, null, null, null, null, null, null, null, null], // row C
        [null, null, null, null, null, null, null, null, null, null], // row D
        [null, null, null, null, null, null, null, null, null, null], // row E
        [null, null, null, null, null, null, null, null, null, null], // row F
        [null, null, null, null, null, null, null, null, null, null], // row G
        [null, null, null, null, null, null, null, null, null, null], // row H
        [null, null, null, null, null, null, null, null, null, null], // row I
        [null, null, null, null, null, null, null, null, null, null]  // row AJ
    ];
    function reportCoordinateValue(yCoordinate, xCoordinate) {
        let coordinateValue = board[yCoordinate][xCoordinate];
        return coordinateValue;
    };
    function placeBoat(yCoordinate, xCoordinate, boat, isVertical) {
        if (isVertical) {
            for (let i = 0; i < boat.hull.length; i++) {
                board[yCoordinate + i][xCoordinate ] = boat.hull[i];
            };
        };
        if (!isVertical) {
            for (let i = 0; i < boat.hull.length; i++) {
                board[yCoordinate][xCoordinate + i] = boat.hull[i];
            };
        };
    };
    return { reportCoordinateValue, placeBoat };
};

export { Ship, Board };