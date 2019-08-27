import { getRandomInt, gameProcess } from '..';

const isEven = number => number % 2 === 0;

const evenRules = 'Answer "yes" if number is even otherwise answer "no"';

export const questionEven = () => {
  const question = getRandomInt(1, 1000);
  console.log(`Question: ${question}`);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return rightAnswer;
};

export const brainEven = (flag = 0, userName) => {
  const localName = gameProcess(evenRules, flag, userName, questionEven);
  return localName;
};
