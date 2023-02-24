import { city, runSearch } from "./fetch";
import { myKey } from "./myKey";
export let measurement = "imperial";
const degree = document.querySelectorAll(".degree");

export const toggleSwitch = () => {
  changeUnit();
  if (city != "") {
    runSearch(city, myKey, measurement);
  }
  displayUnit();
};

const changeUnit = () => {
  if (measurement == "imperial") {
    measurement = "metric";
  } else {
    measurement = "imperial";
  }
};

const displayUnit = () => {
  degree.forEach((each) => {
    if (measurement == "imperial") {
      each.textContent = "℉";
    } else {
      each.textContent = "℃";
    }
  });
};
