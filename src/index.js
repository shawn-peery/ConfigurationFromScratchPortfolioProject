import "./style.scss";
import _ from "lodash";

import calendar from "../res/calendar.png";

const component = () => {
  const element = document.createElement("div");
  element.classList.add("hello");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // Add the image to our existing div.

  const myIcon = new Image();

  myIcon.src = calendar;

  element.appendChild(myIcon);

  return element;
};

document.body.appendChild(component());
