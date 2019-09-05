import { getRandomInt, gameProcess } from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const moduledNumber = Math.abs(number);
  if (moduledNumber % 2 === 0 || moduledNumber < 2) return moduledNumber === 2;
  const k = Math.round(Math.sqrt(moduledNumber));
  if (moduledNumber === 3) return true;
  for (let i = 3; i <= k + 1; i += 2) { // Check uneven divider
    if (moduledNumber % i === 0) return false;
  }
  return true;
};

const questionPrime = () => {
  const question = getRandomInt(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameProcess(description, questionPrime);
