const Ship = (name, hitpoints) => {
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
    return { name, hull, hit, isSunk};
};

const Board = () => {
    let board = function() {
        let array = [];
        for (let i = 0; i < 100; i++) {
            array.push({beenAttacked: false, asset: null});
        };
        return array;
    }();
    function reportCoordinateAsset(gridCoordinate) {
        let coordinateValue = board[gridCoordinate].asset;
        return coordinateValue;
    };
    function placeBoat(gridCoordinate, ship, isVertical = false) {
        if (isVertical) {
            let remainingVerticalSpace = 10 - ship.hull.length - Math.floor(gridCoordinate / 10);
            if (remainingVerticalSpace < 0) {return "Insufficient space"};
            for (let i = 0; i < ship.hull.length; i++) {
                if (board[gridCoordinate + i * 10].asset !== null) {return "There is already a ship there!"};
            };
            for (let i = 0; i < ship.hull.length; i++) {
                board[gridCoordinate + i * 10].asset = [ship, i];
            };
            return "success";
        };
        if (!isVertical) {
            let remainingHorizontalSpace = 10 - ship.hull.length - gridCoordinate % 10;
            if (remainingHorizontalSpace < 0) {return "Insufficient space"};
            for (let i = 0; i < ship.hull.length; i++) {
                if (board[gridCoordinate + i].asset !== null) {return "There is already a ship there!"};
            };
            for (let i = 0; i < ship.hull.length; i++) {
                board[gridCoordinate + i].asset = [ship, i];
            };
            return "success";
        };
    };
    function targetCoordinate(gridCoordinate) {
        if (!board[gridCoordinate].beenAttacked) {
            board[gridCoordinate].beenAttacked = true;
            let asset = reportCoordinateAsset(gridCoordinate);
            if (asset) {
                asset[0].hit(asset[1]);
                return [asset[0].name, asset[0].isSunk()];
            };
            return asset;
        }; 
    };
    return { reportCoordinateAsset, placeBoat, targetCoordinate };
};

const Player = () => {
    const board = Board();
    const carrier = Ship("carrier",5);
    const battleship = Ship("battleship",4);
    const cruiser = Ship("cruiser",3);
    const submarine = Ship("submarine",3);
    const destroyer = Ship("destroyer",2);
    const fleet = [carrier, battleship, cruiser, submarine, destroyer];
    let placedShipCount = 0;
    function setShip(gridCoordinate, isVertical = false) {
        if (placedShipCount < fleet.length) {
            let result = board.placeBoat(gridCoordinate, fleet[placedShipCount], isVertical);
            if (result === "success") {placedShipCount++};
            return result;
        };
    };
    function receiveAttack(gridCoordinate) {
        const targetAsset = board.targetCoordinate(gridCoordinate);
        return targetAsset;
    };
    function attack(gridCoordinate, target) {
        const attackResult = target.receiveAttack(gridCoordinate);
        if (attackResult === null) {
            return [null,"miss"];
        };
        if (attackResult[1] === false) {
            return [attackResult[0],"hit"];
        };
        if (attackResult[1] === true) {
            return [attackResult[0],"sunk"];
        };
        return attackResult;
    };
    function isFleetDead() {
        let fleetGraveyard = fleet.filter(ship => ship.isSunk());
        if (fleetGraveyard.length === fleet.length) {return true};
        return false;
    };
    return {setShip, receiveAttack, attack, isFleetDead};
};

export { Ship, Board, Player };