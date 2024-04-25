import { game, randomInteger } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function findGreatestCommonDivisor(num1, num2) {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

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
