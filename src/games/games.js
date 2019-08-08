#!/usr/bin/env node
import {
  welcome,
  getUserName,
} from '../index';
import { brainEven } from './even';
import { brainCalc } from './calc';
import { brainGcd } from './gcd';
import { brainProgression } from './progression';
import { brainPrime } from './prime';

export default () => {
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
};
