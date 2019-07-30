#!/usr/bin/env node
import { welcome, getUserName, brainGcd } from '../../index';

welcome();
console.log('Find the greatest common divisor of given numbers.');
console.log('');
const userName = getUserName();
brainGcd(userName);
