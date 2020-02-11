/* eslint-disable func-names */
/* eslint-disable babel/quotes */
function Port(name) {
  this.name = name;
  this.ships = [];

  Port.prototype = {
    addShip(ship) {
      this.ships.push(ship);
    },
    removeShip(ship) {
      const indexOfShip = this.ships.indexOf(ship);
      this.ships.splice(indexOfShip, 1);
    },
  };
}

module.exports = Port;
