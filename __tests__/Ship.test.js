const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
  it("can't sail further than its itinerary", () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError("End of the line y'all");
  });
  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
  });
  it('gets added to the port on instantiation', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
    expect(dover.ships).toContain(ship);
  });
});
