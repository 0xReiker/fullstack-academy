let bunnies = 20;

for (let i = 1; i <= bunnies; i++) {
  console.log(`Floofer #${i}`);
}

let numberGuess = 0;
let winningNumber = 5;

while (numberGuess != winningNumber) {
  numberGuess = prompt("Guess a number between 1 and 10");
  numberGuess = Number(numberGuess);
  if (numberGuess === winningNumber) {
    alert("Bingo!");
  } else {
    alert("Wrong, try again!");
  }
}
