document.addEventListener("DOMContentLoaded", () => {
  thermostat = new Thermostat();
  document.querySelector("#current-temp").innerText = thermostat.temperature
});