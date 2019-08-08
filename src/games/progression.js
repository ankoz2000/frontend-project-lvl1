import readlineSync from 'readline-sync';
import {
  quantityOfRightAnswers,
  welcome,
  getUserName,
  getRandomInt,
  congratulation,
  comparingAnswers,
} from '../index';

const hideNumber = (place, startNumber, step) => {
  let number = startNumber;
  for (let i = 0; i < place; i += 1) {
    number += step;
  }
  return Number(number);
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

const checkingAnswerProgression = (answer, rightAnswer) => {
  if (answer === String(rightAnswer)) return true;
  return false;
};

const questionProgression = (userName) => {
  let tmp = 0;
  do {
    const quantity = 10;
    const startNumber = getRandomInt(1, 10);
    const step = getRandomInt(1, 10);
    const place = getRandomInt(1, 10);
    const string = printProgressionWithoutNumber(place, startNumber, step, quantity);
    console.log(`Question: ${string}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = hideNumber(place, startNumber, step);
    const check = checkingAnswerProgression(answer, rightAnswer);
    tmp += comparingAnswers(check, answer, rightAnswer, userName);
  } while (tmp !== quantityOfRightAnswers);
  return congratulation(userName);
};

export const brainProgression = (userName) => {
  questionProgression(userName);
  return userName;
};

export const gameBrainProgression = () => {
  welcome();
  console.log('What number is missing in the progression?');
  console.log('');
  const userName = getUserName();
  brainProgression(userName);
};
