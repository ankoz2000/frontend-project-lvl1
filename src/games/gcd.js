import readlineSync from 'readline-sync';
import {
  quantityOfRightAnswers,
  welcome,
  getUserName,
  getRandomInt,
  congratulation,
} from '../index';

const findGcd = (number1, number2) => {
  const greatestNumber = number1 > number2 ? number1 : number2;
  for (let i = greatestNumber; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) return i;
  }
  return greatestNumber;
};

const checkingAnswerGcd = (answer, number1, number2) => {
  if (answer === String(findGcd(number1, number2))) return true;
  return false;
};

const questionGcd = (userName) => {
  let tmp = 0;
  do {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const check = checkingAnswerGcd(answer, number1, number2);
    if (check === false) {
      const rightAnswer = findGcd(number1, number2);
      console.log(`"${answer}" is wrong answer. Right answer is ${rightAnswer}`);
      console.log(`Try again, ${userName}`);
    } else {
      tmp += 1;
      console.log('Correct!');
    }
  } while (tmp !== quantityOfRightAnswers);
  return congratulation(userName);
};

export const brainGcd = (userName) => {
  questionGcd(userName);
  return userName;
};

export const gameBrainGcd = () => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
  const userName = getUserName();
  brainGcd(userName);
};
