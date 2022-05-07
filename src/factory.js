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
    return {hull, hit, isSunk};
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
                return asset[0].isSunk();
            };
            return asset;
        }; 
    };
    return { reportCoordinateAsset, placeBoat, targetCoordinate };
};

const Player = (isComputer = false) => {
    const board = Board();
    const carrier = Ship(5);
    const battleship = Ship(4);
    const cruiser = Ship(3);
    const submarine = Ship(3);
    const destroyer = Ship(2);
    const fleet = [carrier, battleship, cruiser, submarine, destroyer];
    let placedShipCount = 0;
    function getRandomCoordinate() {
        return Math.floor(Math.random() * 100);
    };
    function getRandomOrientation() {
        const number = Math.floor(Math.random() * 2);
        if (number === 1) {return true};
        return false;
    };
    function setShip(gridCoordinate, isVertical = false) {
        if (isComputer) {
            if (placedShipCount < fleet.length) {
                let result = board.placeBoat(getRandomCoordinate(), fleet[placedShipCount], getRandomOrientation());
                if (result === "success") {placedShipCount++};
                return result;
            };
        };
        if (placedShipCount < fleet.length) {
            let result = board.placeBoat(gridCoordinate, fleet[placedShipCount], isVertical);
            if (result === "success") {placedShipCount++};
            return result;
        };
    };
    function receiveAttack(gridCoordinate) {
        const attackResult = board.targetCoordinate(gridCoordinate);
        return attackResult;
    };
    function attack(gridCoordinate, target) {
        if (isComputer) {
            let attackResult;
            while (attackResult === undefined) {
                attackResult = target.receiveAttack(getRandomCoordinate());
            };
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
        const attackResult = target.receiveAttack(gridCoordinate);
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
    function isFleetDead() {
        let fleetGraveyard = fleet.filter(ship => ship.isSunk());
        if (fleetGraveyard.length === fleet.length) {return true};
        return false;
    };
    return {setShip, receiveAttack, attack, isFleetDead};
};

export { Ship, Board, Player };