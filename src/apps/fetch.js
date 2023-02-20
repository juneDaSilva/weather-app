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

export async function runSearch(location, key) {
  let weatherData = await getWeather(location, key);

  updateDisplay(weatherData);
}
