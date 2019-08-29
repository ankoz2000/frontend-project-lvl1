import { getRandomInt, gameProcess } from '..';

const calcDescription = 'What is the result of the expression?';

const getRandomOperation = () => {
  const randomInt = getRandomInt(1, 90);
  if (randomInt % 10 <= 3) return '*';
  if (randomInt % 10 > 3 && randomInt <= 6) return '+';
  return '-';
};

const getExpressionString = (number1, number2, operation) => `${number1} ${operation} ${number2}`;

const checkingRightAnswerCalc = (number1, number2, operation) => {
  if (operation === '*') return number1 * number2;
  if (operation === '+') return number1 + number2;
  return number1 - number2;
};

const questionCalc = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operation = getRandomOperation();
  const question = getExpressionString(number1, number2, operation);
  const rightAnswerCalc = checkingRightAnswerCalc(number1, number2, operation);
  return [question, rightAnswerCalc];
};

const brainCalc = () => gameProcess(calcDescription, questionCalc);

export default brainCalc;

/* export const questionCalc = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operation = getRandomOperation();
  console.log(`Question: ${number1} ${operation} ${number2}`);
  const rightAnswer = checkingRightAnswerCalc(number1, number2, operation);
  return rightAnswer;
};

export const brainCalc = (flag = 0, userName) => {
  const localName = gameProcess(calcRules, flag, userName, questionCalc);
  return;
}; */
