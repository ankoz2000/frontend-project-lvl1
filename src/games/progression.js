import { getRandomInt, gameProcess } from '..';

const progressionRules = 'What number is missing in the progression?';

const hiddenNumber = (place, startNumber, step) => {
  let number = startNumber;
  for (let i = 0; i < place; i += 1) {
    number += step;
  }
  return number;
};

const printProgressionWithoutNumber = (place, startNumber, step, quantity) => {
  let number = startNumber;
  let str = '';
  for (let i = 0; i < quantity; i += 1) {
    if (i === place - 1) {
      str += '.. ';
      i += 1;
      number += step;
    }
    if (i !== quantity - 1) {
      number += step;
      str += `${number} `;
    } else {
      number += step;
      str += `${number}`;
    }
  }
  return str;
};

export const questionProgression = () => {
  const quantity = 10;
  const startNumber = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const place = getRandomInt(1, 10);
  const string = printProgressionWithoutNumber(place, startNumber, step, quantity);
  console.log(`Question: ${string}`);
  const rightAnswer = hiddenNumber(place, startNumber, step);
  return rightAnswer;
};

export const brainProgression = (flag = 0, userName) => {
  const localName = gameProcess(progressionRules, flag, userName, questionProgression);
  return localName;
};
