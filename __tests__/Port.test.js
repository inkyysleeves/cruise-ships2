const Port = require('../src/Port.js');

describe('port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    const port = new Port('Dover');
    expect(port.name).toBe('Dover');
  });
});
