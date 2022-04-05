const Ship = (type, health) => {
    const name = `${type}`;
    const hitpoints = health;
    let damage = 0;
    function checkHit(param) {
        if (param) {
            damage++;
            return true
        };
        return false;
    };
    function isShipSunk() {
        if (hitpoints === damage) {return `${name} is sunk`};
    };
    return {checkHit, isShipSunk}
};


// wip
const board = () => {
    function wasPrevTarget() {
        return targeted ? true : false;
    };
};

export { Ship, wasPrevTarget };