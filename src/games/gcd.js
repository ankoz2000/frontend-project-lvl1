import readlineSync from 'readline-sync';
import {
  getUserName,
  getRandomInt,
} from '../index';

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
  if (check === false) {
    const rightAnswer = findGcd(number1, number2);
    console.log(`"${answer}" is wrong answer. Right answer is ${rightAnswer}`);
    console.log(`Try again, ${userName}`);
    return 0;
  }
  return 1;
};

export const brainGcd = (userName) => {
  questionGcd(userName);
  return userName;
};

export const gameBrainGcd = (flag) => {
  if (flag === 1) return 4;
  const userName = getUserName();
  brainGcd(userName);
  return 1;
};
