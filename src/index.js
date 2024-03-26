// import moment from "moment";
// console.log("Hello from JavaScript with Webpack!");
// console.log(moment().startOf("day").fromNow());

// const name = "Bob";
// const time = "today";

// console.log(`Hello ${name}, how are you ${time}`);
// console.log("Testing Webpack Watch Mode");
// console.log("Testing Webpack live server");

import _ from "lodash";

const component = () => {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
};

document.body.appendChild(component());
