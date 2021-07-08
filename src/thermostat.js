class Thermostat {
  constructor() {
    this.powerSaver = true;
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMP_PS_ON = 25;
    this.MAXIMUM_TEMP_PS_OFF = 32;
    this.HIGH_ENERGY_USAGE = 26;
    this.MEDIUM_ENERGY_USAGE = 18;
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

  energyUsage() {
    if(this.temperature < this.MEDIUM_ENERGY_USAGE) {
      return 'low-usage';
    } else if (this.temperature < this.HIGH_ENERGY_USAGE) {
      return 'medium-usage';
    } 
      return 'high-usage';
  }
}

function search(city) {
  let apiKey = "b61c3c1367ef76f46df98ab48f24e246";
  let unit = ["metric", "imperial"];
  let apiWeather = "https://api.openweathermap.org/data/2.5/weather";
  let apiCity = `${apiWeather}?q=${city}&units=${unit[0]}&appid=${apiKey}`;
  fetch(apiCity).then((response) => {return response.json()}).then((data) => { document.querySelector("#city-temp").innerHTML = Math.round(data.main.temp);});
  fetch(apiCity).then((response) => {return response.json()}).then((data) => { document.querySelector("#city-name").innerHTML = data.name;});
}

function getCity(event){
  event.preventDefault();
  let selectedCity = document.querySelector("#selected-city").value;
  search(selectedCity);
};

let city = document.querySelector("#city");
city.addEventListener("submit", getCity);
search("london");