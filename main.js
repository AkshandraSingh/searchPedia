const readline = require('readline');
const chalk = require('chalk')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log(chalk.bgRedBright.bold("Welcome To Search Pedia\n"))
rl.question("Enter a Topic to Search on Wikipedia : ", (prompt) => {
    console.log(chalk.bgBlueBright.bold(`Your Prompt is ${prompt}`))
    rl.close();
});
