import { key } from "./key";

export async function getWeather(location, key) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}`,
      { mode: "cors" }
    );
    return processJson(response);
  } catch (err) {
    console.log(err);
  }
}

async function processJson(response) {
  return await response.json();
}

getWeather("worcester", key).then((result) => {
  console.log(result);
});
