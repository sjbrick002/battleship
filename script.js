const factory = (() => {
    const Ship = (hitpoints) => {
        let hull = [];
        for (let i = 0; i < hitpoints; i++) {
            hull.push(0);
        };
        function hit(hullIndex) {
            hull[hullIndex] = 1;
        };
        function isSunk() {
            let damage = hull.reduce((prev, current) => prev + current, 0);
            if (hitpoints === damage) {return true};
            return false;
        };
        return {hull, hit, isSunk}
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
        function reportCoordinateAsset(yCoordinate, xCoordinate) {
            let coordinateValue = board[yCoordinate][xCoordinate].asset;
            return coordinateValue;
        };
        function placeBoat(yCoordinate, xCoordinate, ship, isVertical) {
            if (isVertical) {
                let remainingVerticalSpace = board.length - (yCoordinate);
                if (remainingVerticalSpace < ship.hull.length) {return "Insufficient space"};
                for (let i = 0; i < ship.hull.length; i++) {
                    if (board[yCoordinate + i][xCoordinate].asset !== null) {return "There is already a ship there!"};
                };
                for (let i = 0; i < ship.hull.length; i++) {
                    board[yCoordinate + i][xCoordinate].asset = [ship, i];
                };
                return "success";
            };
            if (!isVertical) {
                let remainingHorizontalSpace = board[yCoordinate].length - (xCoordinate);
                if (remainingHorizontalSpace < ship.hull.length) {return "Insufficient space"};
                for (let i = 0; i < ship.hull.length; i++) {
                    if (board[yCoordinate][xCoordinate + i].asset !== null) {return "There is already a ship there!"};
                };
                for (let i = 0; i < ship.hull.length; i++) {
                    board[yCoordinate][xCoordinate + i].asset = [ship, i];
                };
                return "success";
            };
        };
        function targetCoordinate(yCoordinate, xCoordinate) {
            if (!board[yCoordinate][xCoordinate].beenAttacked) {
                board[yCoordinate][xCoordinate].beenAttacked = true;
                let asset = reportCoordinateAsset(yCoordinate, xCoordinate);
                if (asset) {
                    asset[0].hit(asset[1]);
                    return asset[0].isSunk();
                };
                return asset;
            }; 
        };
        return { reportCoordinateAsset, placeBoat, targetCoordinate };
    };

    const Player = () => {
        const board = Board();
        const carrier = Ship(5);
        const battleship = Ship(4);
        const cruiser = Ship(3);
        const submarine = Ship(3);
        const destroyer = Ship(2);
        const fleet = [carrier, battleship, cruiser, submarine, destroyer];
        let i = 0
        function setShip(yCoordinate, xCoordinate, isVertical) {
            if (i < fleet.length) {
                let result = board.placeBoat(yCoordinate, xCoordinate, fleet[i], isVertical);
                if (result === "success") {i++};
                return result;
            };
        };
        function receiveAttack(yCoordinate, xCoordinate) {
            const attackResult = board.targetCoordinate(yCoordinate, xCoordinate);
            return attackResult;
        };
        function isFleetDead() {
            let fleetGraveyard = fleet.filter(ship => ship.isSunk());
            if (fleetGraveyard.length === fleet.length) {return true};
            return false;

        };
        return {setShip, receiveAttack, isFleetDead};
    };
    return { Board, Ship, Player };
})();

const gamePlay = (() => {

    function attack(yCoordinate, xCoordinate, target) {
        const attackResult = target.receiveAttack(yCoordinate, xCoordinate);
        //targetIndex = (targetIndex) ? 0 : 1;
        if (attackResult === null) {
            return "miss";
        };
        if (attackResult === false) {
            return "hit";
        };
        if (attackResult === true) {
            return "sunk";
        };
    };
    function checkWinner(playersArray) {
        const playerLost = playersArray[1].isFleetDead();
        const computerLost = playersArray[0].isFleetDead();
        if (computerLost) {return "Player wins!"};
        if (playerLost) {return "Computer wins!"};
    };
    return {attack, checkWinner};
})();

export { factory, gamePlay };