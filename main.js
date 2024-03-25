const readline = require('readline');
const chalk = require('chalk')

const searchOnPedia = require('./wikipediaFunction')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log(chalk.bgRedBright.bold("Welcome To Search Pedia\n"))
rl.question("Enter a Topic to Search on Wikipedia : ", async (prompt) => {
    console.log(chalk.bgCyanBright.bold("Searching on Wikipedia \n"))
    console.log(chalk.bgGreenBright.bold("Almost Done! \n"))
    const searchData = await searchOnPedia(prompt)
    console.log(searchData)
    rl.close();
});
