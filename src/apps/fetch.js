import { updateDisplay, showError } from "./display";

export let city = "paris";

export function getWeather(location, key, unit) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}&units=${unit}`,
      { mode: "cors" }
    ).then((response) => {
      if (response.statusText == "Not Found") {
        reject(Error("city not found"));
      }

      resolve(response.json());
    });
  });
}

const getForecast = (location, key, unit) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${key}&units=${unit}`,
      { mode: "cors" }
    ).then((response) => {
      if (response.statusText == "Not Found") {
        reject(Error("city not found"));
      }

      resolve(response.json());
    });
  });
};

export async function runSearch(location, key, unit) {
  Promise.all([
    getWeather(location, key, unit),
    getForecast(location, key, unit),
  ])
    .then((data) => {
      updateDisplay(data[0], data[1]);
      city = location;
    })
    .catch((err) => {
      console.log(err);
      showError();
    });
}
