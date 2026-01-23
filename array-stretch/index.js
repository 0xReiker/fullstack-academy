let bunnyNames = [
  "harold",
  "pop-eye",
  "scooby",
  "bunnicula",
  "travis",
  "smeegol",
];

function addIsTheBest(bunnyNames) {
  for (let i = 0; i < bunnyNames.length; i++) {
    bunnyNames[i] += "is the best!";
  }
}

console.log(addIsTheBest(bunnyNames));
