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
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const amPm = document.getElementById("am-pm");

export const updateDisplay = (weatherData) => {
  displayDate(weatherData);
  updateToday(weatherData);
};

const updateToday = (weatherData) => {
  console.log(weatherData);
  city.textContent = weatherData.name;
  mainTemp.textContent = Math.round(weatherData.main.temp);
  // TODO: dynamic unit measurement choice
  skyDescriptiton.textContent = weatherData.weather[0].description;
  // TODO: weather.icon ID
  feelsLike.textContent = Math.round(weatherData.main.feels_like);
  humidity.textContent = Math.round(weatherData.main.humidity);
  windSpeed.textContent = weatherData.wind.speed.toFixed(1);
};

const displayDate = (weatherData) => {
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

  console.log(date);
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
