const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your full name: (Like: "Spilios Dimakopoulos"): ', (input) => {
    let trimedInput = input.trim();
    let firstName = trimedInput.slice(0, trimedInput.indexOf(" "));
    let lastName = trimedInput.slice(trimedInput.indexOf(" ") + 1);
    console.log(`This is what the orinal input: ${input}`);
    console.log(`This is what the first name: ${firstName}`);
    console.log(`This is what the last name: ${lastName}`);
    rl.close();
});

