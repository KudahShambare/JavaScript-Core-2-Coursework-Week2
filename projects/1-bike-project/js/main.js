//Setting   Variables
let jumbotron = document.querySelector(".jumbotron");
let blueButton = document.getElementById("blueBtn");
let orangeButton = document.getElementById("orangeBtn");
let greenButton = document.getElementById("greenBtn");

//Blue Button
blueButton.addEventListener("click", function () {
  document.querySelector(".buttons a:first-child").style.backgroundColor =
    "#ffa500";
  document.querySelector(".buttons a:last-child").style.backgroundColor =
    "white";
  jumbotron.style.backgroundColor = "#588fbd";
});

//Orange Button

orangeButton.addEventListener("click", function () {
  document.querySelector(".buttons a:first-child").style.backgroundColor =
    "#5751fd";
  document.querySelector(".buttons a:last-child").style.backgroundColor =
    "white";
  jumbotron.style.backgroundColor = "#f0ad4e";
});
//Green Button

greenButton.addEventListener("click", function () {
  document.querySelector(".buttons a:first-child").style.backgroundColor =
    "black";
  document.querySelector(".buttons a:last-child").style.backgroundColor =
    "#8c9c08";
  jumbotron.style.backgroundColor = "#87ca8a";
});

/*Part 2*/

let submit = document.querySelector("form button");
let inputs = document.querySelectorAll("input");
let textArea = document.getElementById("exampleTextarea");
console.log(document.getElementsByClassName("form-group"));
submit.addEventListener("click", function (event) {
  event.preventDefault();

  let invalids = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length < 1) {
      inputs[i].style.backgroundColor = "red";
      invalids = true;
    }
  }
  if (inputs[0].value.includes("@") === false) {
    inputs[0].style.backgroundColor = "red";
    invalids = true;
  }
  if (textArea.value.length < 1) {
    textArea.style.backgroundColor = "red";
    invalids = true;
  }
  if (invalids) {
    alert("Error");
  } else {
    alert("Thanks for filling the form properly");
    document.querySelector("form").reset();
  }
});
