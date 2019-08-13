import readlineSync from 'readline-sync';
import {
  getRandomInt,
  playingRounds,
  gameProcess,
} from '../index';

const gameNumberEven = 0;

const checkingAnswerEven = (answer, randomInt) => {
  const isEven = randomInt % 2 ? 'yes' : 'no';
  if (answer === isEven) {
    return true;
  }
  return false;
};

const checkingRightAnswerEven = (randomInt) => {
  if (randomInt % 2 === 0) return 'yes';
  return 'no';
};

export const questionEven = (userName) => {
  const number = getRandomInt(1, 1000);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const check = checkingAnswerEven(answer, number);
  const rightAnswer = checkingRightAnswerEven(number);
  const isWin = playingRounds(check, answer, rightAnswer, userName);
  return isWin;
};

export const brainEven = () => {
  const userName = gameProcess(gameNumberEven, questionEven);
  return userName;
};
