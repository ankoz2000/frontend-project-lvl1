import gameProcess from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const fewerNumber = Math.min(number1, number2);
  for (let i = Math.abs(fewerNumber); i > 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) return i;
  }
  return 1;
};

const questionGcd = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `${number1} ${number2}`;
  const rightAnswer = String(findGcd(number1, number2));
  return [question, rightAnswer];
};

export default () => gameProcess(description, questionGcd);
