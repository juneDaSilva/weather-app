export function getWeather(location, key) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}&units=imperial`,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((weatherData) => {
      if (weatherData.message == "city not found") {
        throw Error("city not found");
      } else {
        console.log(weatherData);
      }
    })
    .catch((err) => {
      if (err == "Error: city not found") {
        console.log("met");
      }
      console.log(err);
    });
}
