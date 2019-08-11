import readlineSync from 'readline-sync';

export const quantityOfRightAnswers = 3;
const quantityOfGames = 5;

const welcome = () => {
  console.log('Welcome to the brain-games!');
};

export const getUserName = () => {
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInt = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

const congratulation = (userName) => {
  console.log(`Congratulations, ${userName}!`);
  return userName;
};

export const comparingAnswers = (check, answer, rightAnswer, userName) => {
  if (check === false) {
    console.log(`"${answer}" is wrong answer. Right answer is ${rightAnswer}`);
    console.log(`Try again, ${userName}`);
  } else {
    console.log('Correct!');
    return 1;
  }
  return 0;
};

const getRulesAndUserName = (numberOfGame) => {
  if (numberOfGame === 0) {
    console.log('Answer "yes" if number is even otherwise answer "no"');
    console.log('');
  }
  if (numberOfGame === 1) {
    console.log('What is the result of the expression?');
    console.log('');
  }
  if (numberOfGame === 2) {
    console.log('Find the greatest common divisor of given numbers.');
    console.log('');
  }
  if (numberOfGame === 3) {
    console.log('What number is missing in the progression?');
    console.log('');
  }
  if (numberOfGame === 4) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log('');
  }
  const userName = getUserName();
  return userName;
};

export const getGameNumber = num => num;

export const gameProcess = (number, game) => {
  let tmp = 0;
  const gameNumber = getGameNumber(number);
  welcome();
  const userName = getRulesAndUserName(gameNumber);
  do {
    tmp += game(userName);
  } while (tmp !== quantityOfRightAnswers);
  return congratulation(userName);
};

const getRulesForAllGames = (numberOfGame) => {
  if (numberOfGame === 0) {
    console.log('Answer "yes" if number is even otherwise answer "no"');
    console.log('');
  }
  if (numberOfGame === 1) {
    console.log('What is the result of the expression?');
    console.log('');
  }
  if (numberOfGame === 2) {
    console.log('Find the greatest common divisor of given numbers.');
    console.log('');
  }
  if (numberOfGame === 3) {
    console.log('What number is missing in the progression?');
    console.log('');
  }
  if (numberOfGame === 4) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log('');
  }
};

export const allGameProcess = (arrayOfGames) => {
  let userName = '';
  welcome();
  for (let number = 0; number < quantityOfGames; number += 1) {
    let tmp = 0;
    const gameNumber = getGameNumber(number);
    if (number === 0) {
      userName = getRulesAndUserName(gameNumber);
    }
    if (number !== 0) getRulesForAllGames(gameNumber);
    do {
      tmp += arrayOfGames[number](userName);
    } while (tmp !== quantityOfRightAnswers);
  }
  return congratulation(userName);
};
