import game from '../index.js';

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
  const length = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Длина прогрессии от 5 до 10 чисел
  const start = Math.floor(Math.random() * 50) + 1; // Стартовое число от 1 до 50
  const step = Math.floor(Math.random() * 10) + 1; // Шаг прогрессии от 1 до 10
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = generateProgression(length, start, step);
  const question = `${hideElementInProgression(progression, hiddenIndex)}`;
  const correctAnswer = `${start + step * hiddenIndex}`;

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
