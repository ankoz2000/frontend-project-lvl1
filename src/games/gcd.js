import readlineSync from 'readline-sync';
import {
  getRandomInt,
  playRounds,
  gameProcess,
} from '..';

const getRulesGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
};

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
  const isWin = playRounds(check, answer, rightAnswer, userName);
  return isWin;
};

export const brainGcd = (flag = 0, userName) => {
  const localName = gameProcess(getRulesGcd, questionGcd, flag, userName);
  return localName;
};
