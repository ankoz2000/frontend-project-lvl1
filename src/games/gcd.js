import {
  getRandomInt,
  gameProcess,
} from '..';

const getRulesGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
};

const findGcd = (number1, number2) => {
  const greatestNumber = number1 > number2 ? number1 : number2;
  for (let i = greatestNumber; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) return i;
  }
  return greatestNumber;
};

export const questionGcd = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  console.log(`Question: ${number1} ${number2}`);
  const rightAnswer = findGcd(number1, number2);
  return rightAnswer;
};

export const brainGcd = (flag = 0, userName) => {
  const localName = gameProcess(getRulesGcd, flag, userName, questionGcd);
  return localName;
};
