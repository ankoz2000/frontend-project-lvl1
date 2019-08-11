#!/usr/bin/env node
import { questionPrime } from '../games/prime';
import { gameProcess } from '../index';

gameProcess(4, questionPrime);
