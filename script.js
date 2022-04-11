const factory = (() => {
    const Ship = (hitpoints) => {
        let hull = [];
        for (let i = 0; i < hitpoints; i++) {
            hull.push(0);
        };
        function Hit(hullIndex) {
            hull[hullIndex] = 1;
            return hull[hullIndex];
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
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}], // row A
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}], // row B
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}], // row C
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}], // row D
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}], // row E
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}], // row F
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}], // row G
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}], // row H
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}], // row I
            [{beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}, {beenAttacked: false, asset: null}]  // row J
        ];
        function reportCoordinateValue(yCoordinate, xCoordinate) {
            let coordinateValue = board[yCoordinate][xCoordinate].asset;
            return coordinateValue;
        };
        function placeBoat(yCoordinate, xCoordinate, boat, isVertical) {
            if (isVertical) {
                let remainingVerticalSpace = board.length - (yCoordinate);
                if (remainingVerticalSpace < boat.hull.length) {return "Insufficient space"};
                for (let i = 0; i < boat.hull.length; i++) {
                    if (board[yCoordinate + i][xCoordinate].asset !== null) {return "There is already a ship there!"};
                };
                for (let i = 0; i < boat.hull.length; i++) {
                    board[yCoordinate + i][xCoordinate].asset = [boat, i];
                };
            };
            if (!isVertical) {
                let remainingHorizontalSpace = board[yCoordinate].length - (xCoordinate);
                if (remainingHorizontalSpace < boat.hull.length) {return "Insufficient space"};
                for (let i = 0; i < boat.hull.length; i++) {
                    if (board[yCoordinate][xCoordinate + i].asset !== null) {return "There is already a ship there!"};
                };
                for (let i = 0; i < boat.hull.length; i++) {
                    board[yCoordinate][xCoordinate + i].asset = [boat, i];
                };
            };
        };
        function checkAttacked(yCoordinate, xCoordinate) {
            return board[yCoordinate][xCoordinate].beenAttacked;
        };
        function targetCoordinate(yCoordinate, xCoordinate) {
            if (!checkAttacked(yCoordinate, xCoordinate)) {
                board[yCoordinate][xCoordinate].beenAttacked = true;
                let asset = reportCoordinateValue(yCoordinate, xCoordinate);
                if (asset !== null) {
                    asset[0].Hit(asset[1]);
                    return asset[0].isSunk();
                };
                return asset;
            }; 
        };
        return { reportCoordinateValue, placeBoat, checkAttacked, targetCoordinate };
    };

    return { Board, Ship };
})();

export { factory };