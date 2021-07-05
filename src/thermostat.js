class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  getCurrentTemp() {
    return this.temperature
  }

  up() {
    this.temperature += 5;
  }

  down() {
    this.temperature -= 5;
  }
}