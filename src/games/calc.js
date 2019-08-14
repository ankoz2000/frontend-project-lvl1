import readlineSync from 'readline-sync';
import {
  getRandomInt,
  playRounds,
  gameProcess,
} from '..';

const getRulesCalc = () => {
  console.log('What is the result of the expression?');
  console.log('');
};

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
  const rightAnswer = checkingRightAnswerCalc(number1, number2, operation);
  const isWin = playRounds(check, answer, rightAnswer, userName);
  return isWin;
};

export const brainCalc = (flag = 0, userName) => {
  const localName = gameProcess(getRulesCalc, questionCalc, flag, userName);
  return localName;
};
