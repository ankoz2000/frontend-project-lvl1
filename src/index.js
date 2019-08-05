import readlineSync from 'readline-sync';

const quantityOfRightAnswers = 3;

export const welcome = () => {
  console.log('Welcome to the brain-games!');
};

export const getUserName = () => {
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomInt = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

const getRandomOperation = () => {
  const randomInt = getRandomInt(1, 90);
  if (randomInt % 10 <= 3) return '*';
  if (randomInt % 10 > 3 && randomInt <= 6) return '+';
  return '-';
};

export const congratulation = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

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

const findGcd = (number1, number2) => {
  const greatestNumber = number1 > number2 ? number1 : number2;
  for (let i = greatestNumber; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) return i;
  }
  return greatestNumber;
};

const checkingAnswerCalc = (answer, number1, number2, operation) => {
  if (operation === '*' && answer === String(number1 * number2)) return true;
  if (operation === '+' && answer === String(number1 + number2)) return true;
  if (operation === '-' && answer === String(number1 - number2)) return true;
  return false;
};

const checkingRightAnswerCalc = (number1, number2, operation) => {
  if (operation === '*') return number1 * number2;
  if (operation === '+') return number1 + number2;
  return number1 - number2;
};

const questionCalc = (userName) => {
  let tmp = 0;
  do {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const operation = getRandomOperation();
    console.log(`Question: ${number1} ${operation} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const check = checkingAnswerCalc(answer, number1, number2, operation);
    if (check === false) {
      const rightAnswer = checkingRightAnswerCalc(number1, number2, operation);
      console.log(`"${answer}" is wrong answer. Right answer is ${rightAnswer}`);
      console.log(`Try again, ${userName}`);
    } else {
      tmp += 1;
      console.log('Correct!');
    }
  } while (tmp !== quantityOfRightAnswers);
  return congratulation(userName);
};

export const brainCalc = (userName) => {
  questionCalc(userName);
  return userName;
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

const hideNumber = (place, startNumber, step) => {
  let number = startNumber;
  for (let i = 0; i < place; i += 1) {
    number += step;
  }
  return Number(number);
};

const printProgressionWithoutNumber = (place, startNumber, step, quantity) => {
  let number = startNumber;
  let str = '';
  for (let i = 0; i < quantity; i += 1) {
    if (i === place - 1) {
      str += '.. ';
      i += 1;
      number += step;
    }
    if (i !== quantity - 1) {
      number += step;
      str += `${number} `;
    } else {
      number += step;
      str += `${number}`;
    }
  }
  return str;
};

const comparingAnswers = (check, answer, rightAnswer, userName) => {
  if (check === false) {
    console.log(`"${answer}" is wrong answer. Right answer is ${rightAnswer}`);
    console.log(`Try again, ${userName}`);
  } else {
    console.log('Correct!');
    return 1;
  }
  return 0;
};

const checkingAnswerProgression = (answer, rightAnswer) => {
  if (answer === String(rightAnswer)) return true;
  return false;
};

const questionProgression = (userName) => {
  let tmp = 0;
  do {
    const quantity = 10;
    const startNumber = getRandomInt(1, 10);
    const step = getRandomInt(1, 10);
    const place = getRandomInt(1, 10);
    const string = printProgressionWithoutNumber(place, startNumber, step, quantity);
    console.log(`Question: ${string}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = hideNumber(place, startNumber, step);
    const check = checkingAnswerProgression(answer, rightAnswer);
    tmp += comparingAnswers(check, answer, rightAnswer, userName);
  } while (tmp !== quantityOfRightAnswers);
  return congratulation(userName);
};

export const brainProgression = (userName) => {
  questionProgression(userName);
  return userName;
};

const isPrime = (number) => {
  if (number % 2 === 0 || number === 2 || number === 1) return false; // Any even numper is compound
  const k = Math.round(Math.sqrt(number));
  for (let i = 3; i < k; i += 2) { // Check uneven divider
    if (number % i === 0) return false;
  }
  return true;
};

const checkingAnswerPrime = (answer, rightAnswer) => {
  if (answer === String(rightAnswer)) return true;
  return false;
};

const questionPrime = (userName) => {
  let tmp = 0;
  do {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    const check = checkingAnswerPrime(answer, rightAnswer);
    tmp += comparingAnswers(check, answer, rightAnswer, userName);
  } while (tmp !== quantityOfRightAnswers);
  return congratulation(userName);
};

export const brainPrime = (userName) => {
  questionPrime(userName);
  return userName;
};
