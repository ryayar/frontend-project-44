import { game, randomInteger } from '../index.js';

const description = 'What is the result of the expression?';

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(1, 30);
  const num2 = randomInteger(1, 30);
  const operator = generateRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = `${calculateExpression(num1, num2, operator)}`;

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
