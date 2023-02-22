import "./main.css";
import { runSearch } from "./apps/fetch";
import { key } from "./apps/key";
const form = document.querySelector(".search-form");
const input = document.getElementById("input");

form.onsubmit = (e) => {
  runSearch(input.value, key);

  e.preventDefault();
};

// TODO: find out how to get weather for whole week  -- DONE
// TODO: find out the codes for icons
// TODO: look into semantic html
// TODO: find out how to get chance of rain -- DONE
