import {
  getRandomInt,
  gameProcess,
} from '..';

const getRulesCalc = () => {
  console.log('What is the result of the expression?');
  console.log('');
};

const getRandomOperation = () => {
  const randomInt = getRandomInt(1, 90);
  if (randomInt % 10 <= 3) return '*';
  if (randomInt % 10 > 3 && randomInt <= 6) return '+';
  return '-';
};

const checkingRightAnswerCalc = (number1, number2, operation) => {
  if (operation === '*') return number1 * number2;
  if (operation === '+') return number1 + number2;
  return number1 - number2;
};

export const questionCalc = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operation = getRandomOperation();
  console.log(`Question: ${number1} ${operation} ${number2}`);
  const rightAnswer = checkingRightAnswerCalc(number1, number2, operation);
  return rightAnswer;
};


export const brainCalc = (flag = 0, userName) => {
  const localName = gameProcess(getRulesCalc, flag, userName, questionCalc);
  return localName;
};
