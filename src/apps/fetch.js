import { updateDisplay } from "./display";

export function getWeather(location, key) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}&units=imperial`,
      { mode: "cors" }
    ).then((response) => {
      if (response.statusText == "Not Found") {
        reject(Error("city not found"));
      }

      resolve(response.json());
    });
  });
}

const getForecast = (location, key) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${key}&units=imperial`,
      { mode: "cors" }
    ).then((response) => {
      if (response.statusText == "Not Found") {
        reject(Error("city not found"));
      }

      resolve(response.json());
    });
  });
};

export async function runSearch(location, key) {
  Promise.all([getWeather(location, key), getForecast(location, key)])
    .then((data) => {
      updateDisplay(data[0], data[1]);
    })
    .catch((err) => {
      console.log(err);
    });
}
