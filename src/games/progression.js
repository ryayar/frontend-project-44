import { game, randomInteger } from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const hideElementInProgression = (progression, hiddenIndex) => {
  const progressionWithHiddenElement = progression.slice();
  progressionWithHiddenElement[hiddenIndex] = '..';
  return progressionWithHiddenElement.join(' ');
};

const getQuestionAndAnswer = () => {
  const length = randomInteger(5, 10);
  const start = randomInteger(1, 50);
  const step = randomInteger(1, 10);
  const hiddenIndex = randomInteger(0, length - 1);

  const progression = generateProgression(length, start, step);
  const question = `${hideElementInProgression(progression, hiddenIndex)}`;
  const correctAnswer = `${start + step * hiddenIndex}`;

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
