let score = 0;

const username = prompt("What's your name?");
alert(`Hello, ${username}!`);

const question1 = prompt(`What is the logical operator for 'and' in JavaScript?
  [1] - ||
  [2] - &&
  [3] - **
  [4] - $$`);

const answer1 = Number(question1);

if (answer1 === 2) {
  score++;
}

const question2 = prompt(`What is the logical operator 'or' in JavaScript?
  [1] - ||
  [2] - &&
  [3] - **
  [4] - $$`);

const answer2 = Number(question2);

if (answer2 === 1) {
  score++;
}

const question3 = prompt(`What is the ternery operator in JavaScript?
  [1] - :?
  [2] - !?
  [3] - ?:
  [4] - :!`);

const answer3 = Number(question3);

if (answer3 === 3) {
  score++;
}

if (score === 3) {
  alert(`${username} got a perfect score! Hooray!`);
} else if (score === 2) {
  alert(`${username}, you only missed one! Not bad!`);
} else if (score === 1) {
  alert(`${username}, only one right. Study and come back!`);
} else if (score === 0) {
  alert(`Womp Womp`);
}
