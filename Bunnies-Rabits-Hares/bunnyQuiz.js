const answers = {
  q1: "c", //Hares
  q2: "correct", //All the answers are correct.
  q3: "a", //The rabbit
  q4: "d", //The Holt Hand-Grenade
  q5: "c", //He was having a bad hare day!
};

const submitBtn = document.getElementById("submitBtn");
const resultsDiv = document.getElementById("results");

submitBtn.addEventListener("click", function () {
  let score = 0;

  for (let question in answers) {
    const selected = document.querySelector(
      `input[name="${question}"]:checked`
    );

    if (selected && selected.value === answers[question]) {
      score++;
    }
  }

  let message = "";

  if (score === 5) {
    message = "Holy smokes! Bunny master!";
  } else if (score === 4) {
    message = "Jeez Louis! Up-and-coming Bunny Pro!";
  } else if (score === 3) {
    message = `Very close! Just a little more bunthropology and there's a perfect score in your future`;
  } else if (score === 2) {
    message = `Getting there. You've got a basic understanding of the bunny landscape`;
  } else if (score === 1) {
    message = `Not quite! Go talk with a couple bunnies and come back.`;
  } else if (score === 0) {
    message = `How did you even get zero? All of the answers are accepted on question 2 lolol`;
  }

  resultsDiv.innerHTML = `
  <h2>Your Score: ${score}/5</h2>
  <p>${message}</p>
  `;
});
