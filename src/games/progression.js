import gameProcess from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const quantity = 10;

const getNumberOfProgression = (position, startNumber, step) => startNumber + step * (position - 1);

const getHiddenNumber = (position, startNumber, step) => getNumberOfProgression(position, startNumber, step);

const getProgressionWithoutNumber = (place, startNumber, step) => {
  let number;
  let str = '';
  for (let i = 0; i < quantity; i += 1) {
    number = getNumberOfProgression(i, startNumber, step);
    if (i === place - 1) {
      str += '.. ';
    } else {
      str += `${number} `;
    }
  }
  return str.trim();
};

export const questionProgression = () => {
  const startNumber = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const position = getRandomInt(1, quantity);
  const question = getProgressionWithoutNumber(position, startNumber, step, quantity);
  const rightAnswer = String(getHiddenNumber(position, startNumber, step));
  return [question, rightAnswer];
};

export default () => gameProcess(description, questionProgression);
