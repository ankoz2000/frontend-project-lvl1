import readlineSync from 'readline-sync';
import {
  getRandomInt,
  gameProcess,
} from '../index';

const checkingAnswerEven = (answer, randomInt) => {
  if (answer === 'yes' && randomInt % 2 === 0) {
    return true;
  }
  if (answer === 'no' && randomInt % 2 !== 0) {
    return true;
  }
  return false;
};

const checkingRightAnswerEven = (randomInt) => {
  if (randomInt % 2 === 0) return 'yes';
  return 'no';
};

export const questionEven = (userName) => {
  const randomInt = getRandomInt(1, 1000);
  console.log(`Question: ${randomInt}`);
  const answer = readlineSync.question('Your answer: ');
  const check = checkingAnswerEven(answer, randomInt);
  if (check === false) {
    const rightAnswer = checkingRightAnswerEven(randomInt);
    console.log(`"${answer}" is wrong answer. Right answer is "${rightAnswer}"`);
    console.log(`Try again, ${userName}`);
    return 0;
  }
  console.log('Correct!');
  return 1;
};

export const brainEven = (userName) => {
  questionEven(userName);
  return userName;
};

export const gameBrainEven = () => {
  const userName = gameProcess(1, questionEven);
  return userName;
};
