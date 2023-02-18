import "./main.css";
import { getWeather, runSearch } from "./apps/fetch";
import { key } from "./apps/key";
const form = document.querySelector(".search-form");
const input = document.getElementById("input");

form.onsubmit = (e) => {
  runSearch(input.value, key);

  e.preventDefault();
};
