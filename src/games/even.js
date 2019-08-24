import {
  getRandomInt,
  playRounds,
  gameProcess,
} from '..';

const isEven = (number) => {
  const result = number % 2 === 0;
  return result;
};

export const getRulesEven = () => {
  console.log('Answer "yes" if number is even otherwise answer "no"');
  console.log('');
};

const isAnswerRight = (answer, rightAnswer) => answer === rightAnswer;

export const questionEven = (userName) => {
  const question = getRandomInt(1, 1000);
  console.log(`Question: ${question}`);
  // const answer = readlineSync.question('Your answer: '); //  xxx
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  // const check = isAnswerRight(answer, rightAnswer); // xxx
  const isWin = playRounds(check, answer, rightAnswer, userName);
  return isWin;
};

export const questEven = () => {
  const question = getRandomInt(1, 1000);
  console.log(`Question: ${question}`);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return rightAnswer;
};

export const checkEven = (answer, rightAnswer) => {
  const check = isAnswerRight(answer, rightAnswer);
  return check;
};

export const brainEven = (flag = 0, userName) => {
  const localName = gameProcess(getRulesEven, flag, userName, questEven);
  return localName;
};
