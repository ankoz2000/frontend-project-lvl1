#!/usr/bin/env node
import { questionProgression } from '../games/progression';
import { gameProcess } from '../index';

gameProcess(3, questionProgression);
