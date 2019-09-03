import { getRandomInt, gameProcess } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const fewerNumber = number1 > number2 ? number2 : number1;
  for (let i = fewerNumber; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) return i;
  }
  return fewerNumber;
};

const questionGcd = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `${number1} ${number2}`;
  const rightAnswer = findGcd(number1, number2);
  return [question, rightAnswer];
};

export default () => gameProcess(description, questionGcd);
