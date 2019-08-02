#!/usr/bin/env node
import { welcome, getUserName, brainProgression } from '../../index';

const gameBrainProgression = () => {
  welcome();
  console.log('What number is missing in the progression?');
  console.log('');
  const userName = getUserName();
  brainProgression(userName);
};

export default gameBrainProgression;
