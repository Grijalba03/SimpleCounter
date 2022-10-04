//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter.jsx";
let time1 = 0;
let time2 = 0;
let time3 = 0;
let time4 = 0;
let time5 = 0;
let time6 = 0;

const timer = setInterval(() => {
  if (time1 >= 10) {
    time1 = 0;
    time2++;
  }
  if (time2 >= 10) {
    time2 = 0;
    time3++;
  }
  if (time3 >= 10) {
    time3 = 0;
    time4++;
  }
  if (time4 >= 10) {
    time4 = 0;
    time5++;
  }
  if (time5 >= 10) {
    time5 = 0;
    time6++;
  }

  //render your react application
  ReactDOM.render(
    <Counter
      time1={time1}
      time2={time2}
      time3={time3}
      time4={time4}
      time5={time5}
      time6={time6}
    />,
    document.querySelector("#app")
  );
  time1++;
}, 1000);
