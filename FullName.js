const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your full name: (Like: "Spilios Dimakopoulos"): ', (input) => {
    let trimmedInput = input.trim();
    let firstName = trimmedInput.slice(0, trimmedInput.indexOf(" "));
    let lastName = trimmedInput.slice(trimmedInput.indexOf(" ") + 1);

    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    console.log(`This is what the original input: ${input}`);
    console.log(`This is what the first name: ${firstName}`);
    console.log(`This is what the last name: ${lastName}`);
    
    rl.close();
});
