const city = document.querySelector(".city");
const mainTemp = document.querySelector("#main-temp");
const skyDescriptiton = document.querySelector(".sky");
const feelsLike = document.querySelector(".feel");
const humidity = document.querySelector("#humidity");
const windSpeed = document.getElementById("wind-speed");
const currentDay = document.querySelector(".current-day");
const daysName = document.querySelectorAll(".days-name");
const month = document.getElementById("month");
const monthDay = document.getElementById("date");
const pop = document.getElementById("rain-chance");
const daysTemp = document.querySelectorAll(".daily-temp");
const dayBlock = document.querySelectorAll(".day-block");
const daysIcon = document.querySelectorAll(".daily-img");
const inputError = document.querySelector(".error");
const currentImg = document.querySelector(".condition-img");

export const updateDisplay = (weatherData, forecast) => {
  clearError();
  displayDate();
  updateToday(weatherData);
  displayForecast(forecast);
};

const updateToday = (weatherData) => {
  city.textContent = weatherData.name;
  mainTemp.textContent = Math.round(weatherData.main.temp);

  // TODO: dynamic unit measurement choice
  skyDescriptiton.textContent = weatherData.weather[0].description;
  currentImg.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  feelsLike.textContent = Math.round(weatherData.main.feels_like);
  humidity.textContent = Math.round(weatherData.main.humidity);
  windSpeed.textContent = weatherData.wind.speed.toFixed(1);
};

const displayDate = () => {
  const weekday = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();
  let dayNum = date.getDay();

  // update todays day
  currentDay.textContent = weekday[dayNum];
  // update current month
  month.textContent = months[date.getMonth()];
  // update day of month
  monthDay.textContent = date.getDate();

  // update upcoming days names
  daysName.forEach((day) => {
    if (dayNum == 6) {
      dayNum = 0;
    } else {
      dayNum++;
    }
    day.textContent = days[dayNum];
  });
};

export const displayForecast = (forecast) => {
  let list = forecast.list;
  pop.textContent = list[0].pop * 100;

  let i = 6;
  for (let day = 0; day < dayBlock.length; day++) {
    daysTemp[day].textContent = Math.round(list[i].main.temp);
    daysIcon[
      day
    ].src = `https://openweathermap.org/img/wn/${list[i].weather[0].icon}@4x.png`;
    i += 8;
  }
};

export const showError = () => {
  inputError.textContent =
    'Location not found.\n\nPlease enter: "City", "City, State" or "City, Country".';
  inputError.className = "error active";
};

export const clearError = () => {
  inputError.textContent = "";
  inputError.className = "error active";
};
