import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
  const question = randomInteger(1, 30);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
