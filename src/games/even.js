import {
  getRandomInt,
  gameProcess,
} from '..';

const isEven = (number) => {
  const result = number % 2 === 0;
  return result;
};

export const getRulesEven = () => {
  console.log('Answer "yes" if number is even otherwise answer "no"');
  console.log('');
};

const isAnswerRight = (answer, rightAnswer) => answer === rightAnswer;

export const questionEven = () => {
  const question = getRandomInt(1, 1000);
  console.log(`Question: ${question}`);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return rightAnswer;
};

export const checkEven = (answer, rightAnswer) => {
  const check = isAnswerRight(answer, rightAnswer);
  return check;
};

export const brainEven = (flag = 0, userName) => {
  const localName = gameProcess(getRulesEven, flag, userName, questionEven);
  return localName;
};
