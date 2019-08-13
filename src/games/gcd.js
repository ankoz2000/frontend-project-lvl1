import readlineSync from 'readline-sync';
import {
  getRandomInt,
  playingRounds,
  gameProcess,
} from '../index';

const gameNumberGcd = 2;

const findGcd = (number1, number2) => {
  const greatestNumber = number1 > number2 ? number1 : number2;
  for (let i = greatestNumber; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) return i;
  }
  return greatestNumber;
};

const checkingAnswerGcd = (answer, number1, number2) => {
  if (answer === String(findGcd(number1, number2))) return true;
  return false;
};

export const questionGcd = (userName) => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const check = checkingAnswerGcd(answer, number1, number2);
  const rightAnswer = findGcd(number1, number2);
  const isWin = playingRounds(check, answer, rightAnswer, userName);
  return isWin;
};

export const brainGcd = () => {
  const userName = gameProcess(gameNumberGcd, questionGcd);
  return userName;
};
