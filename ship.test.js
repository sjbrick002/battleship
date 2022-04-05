import { Ship } from "./script.js"

test("Admits hit only when parameter is truthy", () => {
    const ship = Ship("destroyer", 1);
    expect(ship.checkHit(1)).toBe(true);
    expect(ship.checkHit(null)).toBe(false);
});

test("Admits that a ship sinks when it is completely damaged", () => {
    const carrier = Ship("Carrier", 5);
    for (let i = 0; i < 5; i++) {
        carrier.checkHit(1);
    };
    expect(carrier.isShipSunk()).toBe("Carrier is sunk");
});