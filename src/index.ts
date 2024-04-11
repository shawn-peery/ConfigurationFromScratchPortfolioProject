import "./makeGlobalHtmxFile";
import "./style.scss";
import * as _ from "lodash";

import calendar from "../res/calendar.png";
import printMe from "./print";

const button = () => {
  const button = document.createElement("button");
  button.setAttribute("hx-post", "/clicked");
  button.setAttribute("hx-swap", "outerHTML");
  button.innerHTML = "Submit";
  return button;
};

document.body.appendChild(button());

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");

    printMe();
  });
}
