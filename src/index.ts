import "./style.scss";
import * as _ from "lodash";

import calendar from "../res/calendar.png";
import printMe from "./print";

const component = () => {
  const element = document.createElement("div");
  element.classList.add("hello");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack", "HMR"], " ");

  // Add the image to our existing div.

  const myIcon = new Image();

  myIcon.src = calendar;

  element.appendChild(myIcon);

  return element;
};

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");

    printMe();
  });
}
