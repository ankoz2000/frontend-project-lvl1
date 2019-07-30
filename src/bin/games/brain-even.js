#!/usr/bin/env node
import { welcome, getUserName, brainEven } from '../../index';

welcome();
console.log('Answer "yes" if number is even otherwise answer "no"');
console.log('');
const userName = getUserName();
brainEven(userName);
