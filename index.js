let readLineSync = require('readline-sync');
let chalk = require('chalk');


let username = readLineSync.question(chalk.blue('What is your name? '));
console.log('\n');
console.log(chalk.yellow(`Welcome ${username}! This project contain four mini games. Choose one to continue.`));

let gameOptions = ['Print Star in ascending order', 'Print star in decending order', 'Check leap year', 'Check prime number'];

let userPick = readLineSync.keyInSelect(gameOptions,chalk.bgYellow.black('Pick one to continue'));

console.log('\n');


function printAscendingStarPattern() {
  let num = readLineSync.questionInt(chalk.yellow('Please enter no of character to Print? '));
  let char = '#';
  for(let i = 0; i < num; i++) {
    console.log(char);
    char += '#';
  }
}


function printDescendingStarPattern() {
  let num2 = readLineSync.questionInt(chalk.yellow('Please enter no of character to Print? '));
  let str = '';
  for(let i = 0; i < num2; i++) {
    for(let j = 0; j < num2; j++) {
      if(i <= j) {
        str = str.concat('#');
      }
    }
    str = str.concat('\n');
  }
  console.log(str);
}


function checkLeapYear() {
  let inputYear = readLineSync.questionInt(chalk.yellow('Please Enter a year in YYYY format '));

  if(String(inputYear).length !== 4) {
    return console.log(chalk.red('Please Enter right year.'))
  }

  if(inputYear % 4 === 0) {
    return console.log(chalk.green('This is leap year.'));
  }
  console.log(chalk.red('This is not a leap year'));
}


function checkPrimeNumber() {
  let userNumber = readLineSync.questionInt(chalk.yellow('Please Enter a number '));
  if(userNumber === 1) {
    return console.log(chalk.bgBlue.black('1 is a co-prime number.'));
  }
  for(let i = 2; i < userNumber; i++) {
    if(userNumber % i === 0) {
      return console.log(chalk.red('This is not a prime number.'))
    }
  }
  console.log(chalk.green('This is a prime number.'));
}


function playGame() {
  switch(userPick + 1) {
    case 1:
      printAscendingStarPattern();
      break;
    case 2:
      printDescendingStarPattern();
      break;
    case 3:
      checkLeapYear();
      break;
    case 4:
      checkPrimeNumber();
      break;
    default:
      return console.log(chalk.bgRed.black('Please select a option to continue'));
  }
}

playGame();