import gameProcess from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const quantity = 10;

const hiddenNumber = (position, startNumber, step) => startNumber + step * (position - 1);

const getProgressionWithoutNumber = (place, startNumber, step) => {
  let number = startNumber;
  let str = '';
  for (let i = 0; i < quantity; i += 1) {
    if (i === place - 1) {
      str += '.. ';
      number += step;
    } else {
      str += `${number} `;
      number += step;
    }
  }
  return str.trim();
};

export const questionProgression = () => {
  const startNumber = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const position = getRandomInt(1, quantity);
  const question = getProgressionWithoutNumber(position, startNumber, step, quantity);
  const rightAnswer = hiddenNumber(position, startNumber, step);
  return [question, rightAnswer];
};

export default () => gameProcess(description, questionProgression);
