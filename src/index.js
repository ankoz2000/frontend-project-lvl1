import readlineSync from 'readline-sync';

const rightAnswersCount = 3;
const gamesCount = 5;

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

const congratulation = (userName) => {
  console.log(`Congratulations, ${userName}!`);
  return userName;
};

export const playRounds = (check, userAnswer, rightAnswer, userName) => {
  if (check === false) {
    console.log(`"${userAnswer}" is wrong answer. Right answer is "${rightAnswer}"`);
    console.log(`Try again, ${userName}`);
    return 0;
  }
  console.log('Correct!');
  return 1;
};

const isShowMessage = (flag) => {
  if (flag !== 1 && flag !== 3) return true;
  return false;
};

const showCongratulation = (flag, userName) => {
  switch (flag) {
    case 0: {
      congratulation(userName);
      break;
    }
    case 1: break;
    case 2: break;
    default: {
      congratulation(userName);
    }
  }
};

export const gameProcess = (getRules, game, flag, userName) => {
  let tmp = 0;
  let localUserName = userName;
  if (isShowMessage(flag)) {
    welcome();
  }
  getRules();
  if (isShowMessage(flag)) {
    localUserName = getUserName();
  }
  do {
    tmp += game(localUserName);
  } while (tmp !== rightAnswersCount);
  showCongratulation(flag, localUserName);
  return localUserName;
};


export const allGameProcess = (arrayOfGames) => {
  let userName = '';
  let flag = 2; // if flag = 2 user see welcome and meeting messages, but not congratulations;
  for (let i = 0; i < gamesCount; i += 1) {
    if (i === gamesCount - 1) flag = 3; // if flag = 3 user see only congratulations;
    /*   take user's name and
    save it in a variable (line 77)    */
    if (flag === 2) {
      userName = arrayOfGames[i](flag, userName);
      flag = 1; // user doesn't see anything;
    } else {
      arrayOfGames[i](flag, userName);
    }
  }
  return userName;
};
