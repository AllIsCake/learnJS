'use strict';

var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 1;
var guess = document.querySelector('.guess');
var lastResult = document.querySelector('.lastResult');

var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var resetButton = document.querySelector('.reset');
//console.log(randomNumber);

var startGame = function startGame() {
    var number = Number(guessField.value);
    lastResult.textContent += " " + number;
    if (number === randomNumber) {
        guess.textContent = "правильно";
        guess.style.color = "#7FD749";
        endGame();
    } else if (guessCount > 10) {
        guess.textContent = "игра закончена";
        guess.style.color = "#F2F1E8";
        endGame();
    } else {
        guess.textContent = "неправильно";
        guess.style.color = "#E34234";
        if (number > randomNumber) {
            lowOrHi.textContent = "загаданное число меньше";
        } else {
            lowOrHi.textContent = "загаданное число больше";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
};
var endGame = function endGame() {
    console.log('игра закончилась');
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 1;
    lastResult.textContent = "";
    lowOrHi.textContent = "";
    //console.log(randomNumber);
    guessSubmit.style.display = "none";
    resetButton.style.display = "block";
    resetButton.addEventListener('click', function () {
        guess.textContent = "";
        guessSubmit.style.display = "block";
        resetButton.style.display = "none";
    });
};
guessSubmit.addEventListener('click', startGame);