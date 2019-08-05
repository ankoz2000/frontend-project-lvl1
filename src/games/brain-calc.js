#!/usr/bin/env node
import { welcome, getUserName, brainCalc } from '../index';

const brainGameCalc = () => {
  welcome();
  console.log('What is the result of the expression?');
  console.log('');
  const userName = getUserName();
  brainCalc(userName);
};

export default brainGameCalc;
