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
    expect(thermostat.getCurrentTemp()).toEqual(21)
  });

  it('increases temp with down()', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19)
  });

  it('has a minimum temperature of 10 degrees', () => {
    for(let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10)
  });
});