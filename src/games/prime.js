import {
  getRandomInt,
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

export const questionPrime = () => {
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return rightAnswer;
};

export const brainPrime = (flag = 0, userName) => {
  const localName = gameProcess(getRulesPrime, flag, userName, questionPrime);
  return localName;
};
