document.addEventListener("DOMContentLoaded", () => {
  thermostat = new Thermostat();
  document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  _energyUsage();
  _energyUsageColor();

  document.querySelector("#temp-up").addEventListener ('click', () => {
    thermostat.up();
    _energyUsage();
    _energyUsageColor();
    document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  })

  document.querySelector("#temp-down").addEventListener ('click', () => {
    thermostat.down();
    _energyUsage();
    _energyUsageColor();
    document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  })

  document.querySelector("#temp-reset").addEventListener ('click', () => {
    thermostat.reset();
    _energyUsage();
    _energyUsageColor();
    document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  })

  document.querySelector("#power-saver-on").addEventListener ('click', () => {
    thermostat.turnPowerSaverOn();
    if(thermostat.getCurrentTemp() > 25) {
      thermostat.temperature = 25;
      _energyUsage();
      _energyUsageColor();
    }
    document.querySelector("#current-temp").innerText = thermostat.temperature + "°C"
  })

  document.querySelector("#power-saver-off").addEventListener ('click', () => {
    thermostat.turnPowerSaverOff();
  })

  function _energyUsage() {
    if(thermostat.energyUsage() === 'low-usage') {
      document.querySelector("#energy-usage").innerHTML = "Low Usage";
    } else if (thermostat.energyUsage() === 'medium-usage') {
      document.querySelector("#energy-usage").innerHTML = "Medium Usage";
    } else {
      document.querySelector("#energy-usage").innerHTML = "High Usage";
    }
  }

  function _energyUsageColor() {
    if(thermostat.energyUsage() === 'low-usage') {
      document.querySelector("#energy-usage").className = "badge bg-success";
    } else if (thermostat.energyUsage() === 'medium-usage') {
      document.querySelector("#energy-usage").className = "badge bg-dark";
    } else {
      document.querySelector("#energy-usage").className = "badge bg-danger";
    }
  }
});