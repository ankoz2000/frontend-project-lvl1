import readlineSync from 'readline-sync';
import {
  getRandomInt,
  playRounds,
  gameProcess,
} from '..';

const getRulesEven = () => {
  console.log('Answer "yes" if number is even otherwise answer "no"');
  console.log('');
};

const isEven = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

const isAnswerRight = (answer, rightAnswer) => {
  if (answer === rightAnswer) {
    return true;
  }
  return false;
};

export const questionEven = (userName) => {
  const question = getRandomInt(1, 1000);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const check = isAnswerRight(answer, rightAnswer);
  const isWin = playRounds(check, answer, rightAnswer, userName);
  return isWin;
};

export const brainEven = (flag = 0, userName) => {
  const localName = gameProcess(getRulesEven, questionEven, flag, userName);
  return localName;
};
