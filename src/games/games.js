#!/usr/bin/env node
import { allGameProcess } from '../index';
import { questionEven } from './even';
import { questionCalc } from './calc';
import { questionGcd } from './gcd';
import { questionProgression } from './progression';
import { questionPrime } from './prime';

/* export default () => {
  welcome();
  console.log('Answer "yes" if number is even otherwise answer "no"');
  console.log('');
  const userName = getUserName();
  brainEven(userName);
  console.log('What is the result of the expression?');
  console.log('');
  brainCalc(userName);
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
  brainGcd(userName);
  console.log('What number is missing in the progression?');
  console.log('');
  brainProgression(userName);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log('');
  brainPrime(userName);
}; */

const allGames = () => {
  const arrayOfGames = [
    questionEven,
    questionCalc,
    questionGcd,
    questionProgression,
    questionPrime,
  ];
  allGameProcess(arrayOfGames);
};

export default allGames;
