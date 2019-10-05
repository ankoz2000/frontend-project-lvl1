import gameProcess from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';

const getRandomOperation = () => {
  const randomInt = getRandomInt(1, 3);
  switch (randomInt) {
    case 1: {
      return '+';
    }
    case 2: {
      return '-';
    }
    default: {
      return '*';
    }
  }
};

const getExpressionString = (number1, number2, operation) => `${number1} ${operation} ${number2}`;

const getRightAnswer = (number1, number2, operation) => {
  switch (operation) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    default: return number1 * number2;
  }
};

const questionCalc = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operation = getRandomOperation();
  const question = getExpressionString(number1, number2, operation);
  const rightAnswerCalc = String(getRightAnswer(number1, number2, operation));
  return [question, rightAnswerCalc];
};

export default () => gameProcess(description, questionCalc);
