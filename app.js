let random = Math.floor(Math.random() * 100) + 1;

const btn = document.querySelector("Button");
const input = document.querySelector("#input");
const form = document.querySelector("form");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const resultparas = document.querySelector(".p");
const lowHigh = document.querySelector(".lowHigh");

const p = document.createElement("p");
let prevGuess = [];
let numGuesses = 1;

let playGame = true;
if (playGame) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a no more than 1");
  } else if (guess > 100) {
    alert("please enter a no which is less than 100");
  } else {
    prevGuess.push(guess);

    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(
      `Congratulations!! you win this game  & random no is ${random}`
    );
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is too low`);
  } else if (guess > random) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  input.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame">Start new Game</button>`;
  resultparas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    random = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = ``;
    remaining.innerHTML = `${11 - numGuesses}`;
    input.removeAttribute("disabled");
    resultparas.removeChild(p);
    playGame = true;
  });
}
