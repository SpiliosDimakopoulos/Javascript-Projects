const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let guess;
let attempts = 0;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}.`);
    guess = Number(guess);

    if (isNaN(guess)) {
        alert(`Invalid! Enter your guess as a number.`);
    } else if (guess < minNum || guess > maxNum) {
        alert(`Invalid! Your guess must be between ${minNum} and ${maxNum}.`);
    } else {
        attempts++;
        if (guess < answer) {
            alert(`Too low. Try again!`);
        } else if (guess > answer) {
            alert(`Too high. Try again!`);
        } else {
            alert(`Well Done! You found the correct number! (You win nothing btw). It took you ${attempts} attempts!`);
            running = false;
        }
    }
}
