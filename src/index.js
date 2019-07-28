import readlineSync from 'readline-sync';

export const welcome = () => {
  return console.log('Welcome to the brain-games!');
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
  return console.log(`Congratulations, ${userName}!`);
};

export const question = (userName) => {
  let i = 0;
  do {
    const randomInt = getRandomInt(1, 1000);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && randomInt % 2 === 0) {
      console.log('Correct!');
      i += 1;
    } else if (answer === 'no' && randomInt % 2 !== 0) {
      console.log('Correct!');
      i += 1;
    } else {
      let rightAnswer = '';
      if (randomInt % 2 === 0) {
        rightAnswer = 'yes';
      } else rightAnswer = 'no';
      console.log(`"${answer}" is wrong answer. Right answer is ${rightAnswer}`);
      console.log(`Try again, ${userName}`);
    }
  } while (i !== 3);
  return congratulation(userName);
};

export const brainEven = () => {
  welcome();
  console.log('Answer "yes" if number is even otherwise answer "no"');
  console.log('');
  const name = getUserName();
  question(name);
  return true;
};
