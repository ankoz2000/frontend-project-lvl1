import readlineSync from 'readline-sync';
import {
  quantityOfRightAnswers,
  welcome,
  getUserName,
  getRandomInt,
  congratulation,
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

const questionEven = (userName) => {
  let tmp = 0;
  do {
    const randomInt = getRandomInt(1, 1000);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    const check = checkingAnswerEven(answer, randomInt);
    if (check === false) {
      const rightAnswer = checkingRightAnswerEven(randomInt);
      console.log(`"${answer}" is wrong answer. Right answer is "${rightAnswer}"`);
      console.log(`Try again, ${userName}`);
    } else {
      tmp += 1;
      console.log('Correct!');
    }
  } while (tmp !== quantityOfRightAnswers);
  congratulation(userName);
  return console.log('');
};

export const brainEven = (userName) => {
  questionEven(userName);
  return userName;
};

export const gameBrainEven = () => {
  welcome();
  console.log('Answer "yes" if number is even otherwise answer "no"');
  console.log('');
  const userName = getUserName();
  brainEven(userName);
};
