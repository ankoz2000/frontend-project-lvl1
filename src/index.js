import readlineSync from 'readline-sync';

const roundsCount = 3;

const welcome = () => {
  console.log('Welcome to the brain-games!');
};

const getUserName = () => {
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInt = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

const isAnswerRight = (answer, rightAnswer) => answer === String(rightAnswer);

const congratulation = (userName) => {
  console.log(`Congratulations, ${userName}!`);
  return userName;
};

export const gameProcess = (gameDescription, gameQuestion) => {
  welcome();
  console.log(`${gameDescription}`);
  console.log('');
  const userName = getUserName();
  for (let i = 0; i < roundsCount;) {
    const question = gameQuestion();
    const questionString = question[0]; // question[0] - question string
    console.log(`Question: ${questionString}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = question[1]; // question[1] - right answer
    const check = isAnswerRight(answer, rightAnswer);
    if (!check) { // to show messages of falling round used boolean 'check'
      console.log(`"${answer}" is wrong answer. Right answer is "${rightAnswer}"`);
      console.log(`Try again, ${userName}`);
    } else if (check) {
      console.log('Correct!');
      i += 1;
    }
  }
  congratulation(userName);
  return userName;
};
