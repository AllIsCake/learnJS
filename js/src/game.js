
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let guess = document.querySelector('.guess');
let lastResult = document.querySelector('.lastResult');

let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let resetButton = document.querySelector('.reset');
//console.log(randomNumber);

let startGame = () => {
    let number = Number(guessField.value);
    lastResult.textContent += " " + number;
    if (number === randomNumber) {
        guess.textContent = "правильно";
        guess.style.color = "#7FD749"
        endGame();
    } else if (guessCount > 10)  {
       guess.textContent = "игра закончена";
       guess.style.color = "#F2F1E8"
        endGame();
    } else {
        guess.textContent = "неправильно";
        guess.style.color = "#E34234"
        if (number > randomNumber) {
            lowOrHi.textContent = "загаданное число меньше"
        } else {
            lowOrHi.textContent = "загаданное число больше"
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}
let endGame = () => {
    console.log('игра закончилась');
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 1;
    lastResult.textContent = "";
    lowOrHi.textContent = "";
    //console.log(randomNumber);
    guessSubmit.style.display = "none";
    resetButton.style.display = "block"
    resetButton.addEventListener('click', () => {
        guess.textContent = "";
        guessSubmit.style.display = "block";
        resetButton.style.display = "none"
    })
}
guessSubmit.addEventListener('click', startGame);
