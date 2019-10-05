import gameProcess from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2 || number === 3) return true;
  if (number % 2 === 0) return false;
  const k = Math.round(Math.sqrt(number));
  for (let i = 2; i <= k; i += 1) { // Check uneven divider
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
