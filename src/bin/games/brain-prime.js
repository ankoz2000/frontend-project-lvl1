#!/usr/bin/env node
import { welcome, getUserName, brainPrime } from '../../index';

welcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
console.log('');
const userName = getUserName();
brainPrime(userName);
