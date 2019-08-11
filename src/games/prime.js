import readlineSync from 'readline-sync';
import {
  getUserName,
  getRandomInt,
  comparingAnswers,
} from '../index';

const isPrime = (number) => {
  if (number % 2 === 0 || number === 2 || number === 1) return false; // Any even numper is compound
  const k = Math.round(Math.sqrt(number));
  for (let i = 3; i < k; i += 2) { // Check uneven divider
    if (number % i === 0) return false;
  }
  return true;
};

const checkingAnswerPrime = (answer, rightAnswer) => {
  if (answer === String(rightAnswer)) return true;
  return false;
};

export const questionPrime = (userName) => {
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  const check = checkingAnswerPrime(answer, rightAnswer);
  if (comparingAnswers(check, answer, rightAnswer, userName) === 0) return 0;
  return 1;
};

export const brainPrime = (userName) => {
  questionPrime(userName);
  return userName;
};

export const gameBrainPrime = (flag) => {
  if (flag === 1) return 5;
  const userName = getUserName();
  brainPrime(userName);
  return userName;
};
