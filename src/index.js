import readlineSync from 'readline-sync';

export const quantityOfRightAnswers = 3;

export const welcome = () => {
  console.log('Welcome to the brain-games!');
};

export const getUserName = () => {
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInt = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

export const congratulation = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const comparingAnswers = (check, answer, rightAnswer, userName) => {
  if (check === false) {
    console.log(`"${answer}" is wrong answer. Right answer is ${rightAnswer}`);
    console.log(`Try again, ${userName}`);
  } else {
    console.log('Correct!');
    return 1;
  }
  return 0;
};
