#!/usr/bin/env node
import { welcome, getUserName, brainGcd } from '../index';

const gameBrainGcd = () => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
  const userName = getUserName();
  brainGcd(userName);
};

export default gameBrainGcd;
