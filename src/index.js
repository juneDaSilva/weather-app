import "./main.css";

async function getWeather() {
  try {
    let response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Worcester&APPID=b4b68481d804f19629d4a998e4bd6983",
      { mode: "cors" }
    );
    let weather = await response.json();
    console.log(weather);
  } catch (err) {
    console.log(err);
  }
}

getWeather();
