#!/usr/bin/env node
import { welcome, getUserName, brainEven, brainCalc } from '../index';

welcome();
console.log('Answer "yes" if number is even otherwise answer "no"');
console.log('');
const userName = getUserName();
brainEven(userName);
console.log('What is the result of the expression?');
console.log('');
brainCalc(userName);
