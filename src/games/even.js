import gameProcess from '..';
import getRandomInt from '../utils';

export const description = 'Answer "yes" if number is even otherwise answer "no"';

const isEven = number => number % 2 === 0;

export const questionEven = () => {
  const question = getRandomInt(1, 1000);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameProcess(description, questionEven);
