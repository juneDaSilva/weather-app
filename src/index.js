import "./main.css";
import { runSearch } from "./apps/fetch";
import { myKey } from "./apps/myKey";
import { toggleSwitch } from "./apps/switch";
import { measurement } from "./apps/switch";
const form = document.querySelector(".search-form");
const input = document.getElementById("input");
const unitSwitch = document.getElementById("unit-switch");

form.onsubmit = (e) => {
  runSearch(input.value, myKey, measurement);

  e.preventDefault();
};

unitSwitch.onclick = () => {
  toggleSwitch();
};

// TODO: find out how to get weather for whole week  -- DONE
// TODO: find out the codes for icons -- DONE
// TODO: look into semantic html
// TODO: find out how to get chance of rain -- DONE
// TODO: dynamic unit measurement choice
