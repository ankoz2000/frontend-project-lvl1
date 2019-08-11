import readlineSync from 'readline-sync';
import {
  getUserName,
  getRandomInt,
} from '../index';

const getRandomOperation = () => {
  const randomInt = getRandomInt(1, 90);
  if (randomInt % 10 <= 3) return '*';
  if (randomInt % 10 > 3 && randomInt <= 6) return '+';
  return '-';
};

const checkingAnswerCalc = (answer, number1, number2, operation) => {
  if (operation === '*' && answer === String(number1 * number2)) return true;
  if (operation === '+' && answer === String(number1 + number2)) return true;
  if (operation === '-' && answer === String(number1 - number2)) return true;
  return false;
};

const checkingRightAnswerCalc = (number1, number2, operation) => {
  if (operation === '*') return number1 * number2;
  if (operation === '+') return number1 + number2;
  return number1 - number2;
};

export const questionCalc = (userName) => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operation = getRandomOperation();
  console.log(`Question: ${number1} ${operation} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const check = checkingAnswerCalc(answer, number1, number2, operation);
  if (check === false) {
    const rightAnswer = checkingRightAnswerCalc(number1, number2, operation);
    console.log(`"${answer}" is wrong answer. Right answer is ${rightAnswer}`);
    console.log(`Try again, ${userName}`);
    return 0;
  }
  console.log('Correct!');
  return 1;
};

export const brainCalc = (userName) => {
  questionCalc(userName);
  return userName;
};

export const gameBrainCalc = (flag) => {
  if (flag === 1) return 2;
  const userName = getUserName();
  brainCalc(userName);
  return 1;
};
