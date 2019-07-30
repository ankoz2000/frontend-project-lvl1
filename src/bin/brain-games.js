#!/usr/bin/env node
import {
  welcome,
  getUserName,
  brainEven,
  brainCalc,
  brainGcd,
} from '../index';

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
