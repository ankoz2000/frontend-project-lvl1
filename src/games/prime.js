import gameProcess from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 1) return false;
  if (number % 2 === 0) return number === 2;
  const k = Math.round(Math.sqrt(number));
  if (number === 3) return true;
  for (let i = 3; i <= k + 1; i += 2) { // Check uneven divider
    if (number % i === 0) return false;
  }
  return true;
};

const questionPrime = () => {
  const question = getRandomInt(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameProcess(description, questionPrime);
