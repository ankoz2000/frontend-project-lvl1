import { getRandomInt, gameProcess } from '..';

const gcdDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  const greatestNumber = number1 > number2 ? number1 : number2;
  for (let i = greatestNumber; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) return i;
  }
  return greatestNumber;
};

const questionGcd = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `${number1} ${number2}`;
  const rightAnswerGcd = findGcd(number1, number2);
  return [question, rightAnswerGcd];
};

const brainGcd = () => gameProcess(gcdDescription, questionGcd);

export default brainGcd;

/* export const questionGcd = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  console.log(`Question: ${number1} ${number2}`);
  const rightAnswer = findGcd(number1, number2);
  return rightAnswer;
};

export const brainGcd = (flag = 0, userName) => {
  const localName = gameProcess(gcdRules, flag, userName, questionGcd);
  return localName;
}; */
