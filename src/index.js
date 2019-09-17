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

const isAnswerRight = (answer, rightAnswer) => answer === String(rightAnswer);

const congratulation = (userName) => {
  console.log(`Congratulations, ${userName}!`);
  return userName;
};

export default (gameDescription, gameQuestion) => {
  welcome();
  console.log(gameDescription);
  console.log('');
  const userName = getUserName();
  for (let i = 0; i < roundsCount;) {
    //  [question, rightAnswer] = [gameQuestion()[0], gameQuestion()[1]];
    const questionAndAnswer = gameQuestion();
    const [question, rightAnswer] = [questionAndAnswer[0], questionAndAnswer[1]];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const check = isAnswerRight(answer, rightAnswer);
    if (!check) { // to show messages of falling round used boolean 'check'
      console.log(`"${answer}" is wrong answer. Right answer is "${rightAnswer}"`);
      console.log(`Try again, ${userName}`);
      return;
    }
    console.log('Correct!');
    i += 1;
  }
  congratulation(userName);
};
