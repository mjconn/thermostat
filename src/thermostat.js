class Thermostat {
  constructor() {
    this.powerSaver = true;
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMP_PS_ON = 25;
    this.MAXIMUM_TEMP_PS_OFF = 32;
  }

  getCurrentTemp() {
    return this.temperature
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature() {
    if(this.isPowerSaverOn() === false) {
      return this.temperature === this.MAXIMUM_TEMP_PS_OFF;
    }
    return this.temperature === this.MAXIMUM_TEMP_PS_ON;
  }

  isPowerSaverOn() {
    return this.powerSaver === true;
  }

  turnPowerSaverOff() {
    this.powerSaver = false;
  }

  turnPowerSaverOn() {
    this.powerSaver = true;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMP;
  }
}