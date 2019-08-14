import readlineSync from 'readline-sync';
import {
  getRandomInt,
  playRounds,
  gameProcess,
} from '..';

const getRulesPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log('');
};

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
  const isWin = playRounds(check, answer, rightAnswer, userName);
  return isWin;
};

export const brainPrime = (flag = 0, userName) => {
  const localName = gameProcess(getRulesPrime, questionPrime, flag, userName);
  return localName;
};
