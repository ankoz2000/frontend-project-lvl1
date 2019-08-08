import readlineSync from 'readline-sync';
import {
  quantityOfRightAnswers,
  welcome,
  getUserName,
  getRandomInt,
  congratulation,
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

const questionPrime = (userName) => {
  let tmp = 0;
  do {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    const check = checkingAnswerPrime(answer, rightAnswer);
    tmp += comparingAnswers(check, answer, rightAnswer, userName);
  } while (tmp !== quantityOfRightAnswers);
  return congratulation(userName);
};

export const brainPrime = (userName) => {
  questionPrime(userName);
  return userName;
};

export const gameBrainPrime = () => {
  welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log('');
  const userName = getUserName();
  brainPrime(userName);
};
