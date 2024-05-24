"use strict";

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".start").textContent = message;
};
const scoreFunc = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number!");
    document.querySelector(".start").style.color = "#e74c3c";
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".start").style.color = "#2ecc71";
    document.querySelector("body").style.backgroundColor = "#e6f7ff";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage("Too high");
      score--;
      scoreFunc(score);
      document.querySelector(".start").style.color = "#e74c3c";
    } else {
      displayMessage("Game Over");
      scoreFunc(0);
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage("Too low");
      score--;
      scoreFunc(score);
      document.querySelector(".start").style.color = "#e74c3c";
    } else {
      displayMessage("Game Over");
      scoreFunc(0);
      document.querySelector(".start").style.color = "#e74c3c";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  score = 20;

  displayMessage("Let's Start!");
  scoreFunc(0);
  document.querySelector(".guess").value = "";
  document.querySelector(".start").style.color = "#1e7d4a";
  document.querySelector("body").style.backgroundColor = "#7b8a9a";
});
