'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('increases temp with up()', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(25)
  });

  it('increases temp with down()', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(15)
  });
});