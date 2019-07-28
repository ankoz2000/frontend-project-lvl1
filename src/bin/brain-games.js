#!/usr/bin/env node
import { getUserName } from '../index';

console.log('Welcome to the brain-games!');
console.log('What is your name?');
const name = getUserName();
console.log(`Hello, ${name}!`);
