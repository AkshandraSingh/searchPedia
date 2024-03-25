const readline = require('readline');
const chalk = require('chalk')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log(chalk.blue("Welcome Bro!"))
rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});
