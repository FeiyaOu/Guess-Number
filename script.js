'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

const check = document.querySelector('.check');

const numberDisplay = document.querySelector('.number');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const scoreDisplay = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const again = document.querySelector('.again');
const highscoreDisplay = document.querySelector('.highscore');

let score = 20;
let highscore = 0;

function displayMessage(mes) {
  message.textContent = mes;
}

check.addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      displayMessage('No guess!');
      // message.textContent = 'No guess!';
    } else if (guess === secretNumber) {
      displayMessage('Correct answer!');
      // message.textContent = 'Correct answer!';
      numberDisplay.textContent = secretNumber;
      body.style.backgroundColor = '#60b347';
      numberDisplay.style.width = '30rem';
      scoreDisplay.textContent = score;
      if (score > highscore) {
        highscore = score;
        highscoreDisplay.textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
        // message.textContent = guess > secretNumber ? 'Too high' : 'Too low';

        score--;
      } else {
        displayMessage('You lose');
        // message.textContent = 'You lose';
        score = 0;
      }
      scoreDisplay.textContent = score;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     message.textContent = 'Too high';
  //     score--;
  //   } else {
  //     message.textContent = 'You lose';
  //     score = 0;
  //   }
  //   scoreDisplay.textContent = score;
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     message.textContent = 'Too low';
  //     score--;
  //   } else {
  //     message.textContent = 'You lose';
  //     score = 0;
  //   }
  //   scoreDisplay.textContent = score;
  // }
);

again.addEventListener('click', function () {
  body.style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
  numberDisplay.textContent = '?';
  score = 20;
  scoreDisplay.textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing');
  // message.textContent = 'Start guessing';
  displayMessage('Start guessing...');
});
