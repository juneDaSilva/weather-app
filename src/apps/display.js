const city = document.querySelector(".city");
const mainTemp = document.querySelector("#main-temp");

export const updateDisplay = (weatherData) => {
  updateToday(weatherData);
};

const updateToday = (weatherData) => {
  console.log(weatherData);
  city.textContent = weatherData.name;
  mainTemp.textContent = weatherData.main.temp;
};
