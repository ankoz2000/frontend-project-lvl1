import { getRandomInt, gameProcess } from '..';

const evenDescription = 'Answer "yes" if number is even otherwise answer "no"';

const isEven = number => number % 2 === 0;

const questionEven = () => {
  const question = getRandomInt(1, 1000);
  const rightAnswerEven = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswerEven];
};

const brainEven = () => gameProcess(evenDescription, questionEven);

export default brainEven;
/* export const brainEven = (flag = 0, userName) => {
  const localName = gameProcess(evenRules, flag, userName, questionEven);
  return localName;
}; */
