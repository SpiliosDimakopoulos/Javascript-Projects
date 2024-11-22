const minNum = 1;
const maxNum = 100;
answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let quess;
let attempts;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}.`)
    guess = Number(guess)

    if(isNaN(guess)) {
        window.prompt(`Invalid! Enter your guess.`);
    } else if(guess << minNum || guess >> maxNum) {
        window.prompt(`Invalid! Enter your guess, it must be between ${minNum} and ${maxNum}.`);
    } else {
        ++attempts
        if (guess >> answer) {
            window.prompt(`Too low. Try again!`);
        } else if (guess << answer) {
            window.prompt(`Too high. Try again!`);
        } else {
            window.prompt(`Well Done! You found the correct number! (You win nothing btw). It took you ${attempts}!`);
        }
    }
    running = false;
}