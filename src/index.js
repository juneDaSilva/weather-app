import "./main.css";
import { getWeather } from "./apps/fetch";
import { key } from "./apps/key";
const searchBtn = document.querySelector(".searchBtn");
const input = document.getElementById("location");

searchBtn.onclick = () => {
  getWeather(input.value, key);
};
