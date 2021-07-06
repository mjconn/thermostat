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

  it('power saver mode is on by default', () => {
    expect(thermostat.isPowerSaverOn()).toBe(true);
  });

  it('power saver can be turned off', () => {
    thermostat.turnPowerSaverOff();
    expect(thermostat.isPowerSaverOn()).toBe(false);
  });

  it('power saver can be turned on', () => {
    thermostat.turnPowerSaverOff();
    expect(thermostat.isPowerSaverOn()).toBe(false);
    thermostat.turnPowerSaverOn();
    expect(thermostat.isPowerSaverOn()).toBe(true);
  });

  describe('power saver on', () => {
    it('maximum temperature set to 25 degrees', () => {
      for(let i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });
  });

  describe('power saver off', () => {
    it('maximum temperature set to 32 degrees', () => {
      thermostat.turnPowerSaverOff();
      for(let i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });
  });

  it('allows reset to default temp', () => {
    for(let i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });
});