import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const findGreatestCommonDivisor = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${findGreatestCommonDivisor(num1, num2)}`;

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
