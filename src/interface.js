document.addEventListener("DOMContentLoaded", () => {
  thermostat = new Thermostat();
  document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  _energyUsage();

  document.querySelector("#temp-up").addEventListener ('click', () => {
    thermostat.up();
    _energyUsage();
    document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  })

  document.querySelector("#temp-down").addEventListener ('click', () => {
    thermostat.down();
    _energyUsage();
    document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  })

  document.querySelector("#temp-reset").addEventListener ('click', () => {
    thermostat.reset();
    _energyUsage();
    document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  })

  document.querySelector("#power-saver-on").addEventListener ('click', () => {
    thermostat.turnPowerSaverOn();
    if(thermostat.getCurrentTemp() > 25) {
      thermostat.temperature = 25;
      _energyUsage();
    }
    document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  })

  document.querySelector("#power-saver-off").addEventListener ('click', () => {
    thermostat.turnPowerSaverOff();
  })

  function _energyUsage() {
    if(thermostat.energyUsage() === 'low-usage') {
      document.querySelector("#energy-usage").innerHTML = "Low Usage";
      document.querySelector("#energy-usage").classList.add("badge-success");
    } else if (thermostat.energyUsage() === 'medium-usage') {
      document.querySelector("#energy-usage").innerHTML = "Medium Usage";
      document.querySelector("#energy-usage").classList.add("badge-dark");
    } else {
      document.querySelector("#energy-usage").innerHTML = "High Usage";
      document.querySelector("#energy-usage").classList.add("badge-danger");
    }
  }
});