#!/usr/bin/env node
import { welcome, getUserName, brainCalc } from '../../index';

welcome();
console.log('What is the result of the expression?');
console.log('');
const userName = getUserName();
brainCalc(userName);
