/* eslint-disable babel/quotes */
function Ship() {
  this.startingPort = "Dover";
  this.currentPort = [];
}
Ship.prototype = {
  setSail() {
    this.startingPort = null;
  },
  dock(port) {
    this.currentPort = port;
  },
};
module.exports = Ship;
