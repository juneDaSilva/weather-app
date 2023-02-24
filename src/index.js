import "./main.css";
import { runSearch } from "./apps/fetch";
import { myKey } from "./apps/myKey";
import { toggleSwitch, measurement } from "./apps/switch";
import { showError } from "./apps/display";
const form = document.querySelector(".search-form");
const input = document.getElementById("input");
const unitSwitch = document.getElementById("unit-switch");

form.onsubmit = (e) => {
  if (input.value != "") {
    runSearch(input.value, myKey, measurement);
    input.value = "";
  } else {
    showError();
  }

  e.preventDefault();
};

unitSwitch.onclick = () => {
  toggleSwitch();
};

// TODO: find out how to get weather for whole week  -- DONE
// TODO: find out the codes for icons -- DONE
// TODO: find out how to get chance of rain -- DONE
// TODO: dynamic unit measurement choice -- DONE
