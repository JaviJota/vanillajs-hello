/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { arrow } from "@popperjs/core";

window.onload = function() {
  //write your code here
  document.querySelector("#excusa").innerHTML = generateExcuse();
  console.log("Generador de excusas");
};

function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoIdx = Math.floor(Math.random() * who.length);
  let actIdx = Math.floor(Math.random() * action.length);
  let whatIdx = Math.floor(Math.random() * what.length);
  let whenIdx = Math.floor(Math.random() * when.length);

  return (
    who[whoIdx] +
    " " +
    action[actIdx] +
    " " +
    what[whatIdx] +
    " " +
    when[whenIdx] +
    "."
  );
}
