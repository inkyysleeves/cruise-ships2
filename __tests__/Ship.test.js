/* eslint-disable babel/quotes */
const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const ship = new Ship(Port);
    expect(ship.startingPort).toBe("Dover");
  });
  it("can set sail", () => {
    const ship = new Ship(Port);
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
  it("can dock at a different port", () => {
    const dover = new Port("Dover");
    const ship = new Ship(dover);
    const calais = new Port("Calais");
    ship.dock("calais");
    expect(ship.currentPort).toBe("calais");
  });
});
