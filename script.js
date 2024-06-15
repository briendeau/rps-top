// rock paper scissors game algorithm

// scores start at 0
let humanScore = 0;
let computerScore = 0;

console.log("Hello World");
let container = document.getElementById("container");
let p = document.createElement("p");
let resultContainer = document.createElement("div");
let finalResult = document.createElement("h3");

// player selects a state
function getHumanChoice() {
  let promptChoice = prompt("Rock, paper or scissors?");
  console.log(promptChoice);
  return promptChoice;
}

// computer selects state randomly
function getComputerChoice() {
  let choice = Math.random() * 3;
  if (choice < 1 || choice == 0) {
    return "rock";
  } else if (choice <= 2 && choice > 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// each round is played separated and the winner increments score
// state is tested to see who wins
// and is announced the round winner.
function playRound(humanChoice, computerChoice) {
  if (
    humanChoice.toLowerCase() == "rock" &&
    computerChoice.toLowerCase() == "scissors"
  ) {
    humanScore += 1;
    p.textContent = `Human wins the round ${humanChoice} beats ${computerChoice}`;
    container.appendChild(p);
  } else if (
    humanChoice.toLowerCase() == "rock" &&
    computerChoice.toLowerCase() == "paper"
  ) {
    computerScore += 1;
    p.textContent = `Computers wins the round ${computerChoice} beats ${humanChoice}`;
    container.appendChild(p);
  } else if (
    humanChoice.toLowerCase() == "rock" &&
    computerChoice.toLowerCase() == "rock"
  ) {
    p.textContent = `Round Draw`;
    container.appendChild(p);
  } else if (
    humanChoice.toLowerCase() == "scissors" &&
    computerChoice.toLowerCase() == "rock"
  ) {
    computerScore += 1;
    p.textContent = `Computers wins the round ${computerChoice} beats ${humanChoice}`;
    container.appendChild(p);
  } else if (
    humanChoice.toLowerCase() == "scissors" &&
    computerChoice.toLowerCase() == "scissors"
  ) {
    p.textContent = `Round Draw`;
    container.appendChild(p);
  } else if (
    humanChoice.toLowerCase() == "scissors" &&
    computerChoice.toLowerCase() == "paper"
  ) {
    humanScore += 1;
    p.textContent = `Human wins the round ${humanChoice} beats ${computerChoice}`;
    container.appendChild(p);
  } else if (
    humanChoice.toLowerCase() == "paper" &&
    computerChoice.toLowerCase() == "rock"
  ) {
    humanScore += 1;
    p.textContent = `Human wins the round ${humanChoice} beats ${computerChoice}`;
    container.appendChild(p);
  } else if (
    humanChoice.toLowerCase() == "paper" &&
    computerChoice.toLowerCase() == "scissors"
  ) {
    computerScore += 1;
    p.textContent = `Computers wins the round ${computerChoice} beats ${humanChoice}`;
    container.appendChild(p);
  } else if (
    humanChoice.toLowerCase() == "paper" &&
    computerChoice.toLowerCase() == "paper"
  ) {
    p.textContent = `Round Draw`;
    container.appendChild(p);
  }
  resultContainer.textContent = ` Games Won - humans:${humanScore} vs computers : ${computerScore} `;
  container.appendChild(resultContainer);

  if (humanScore > computerScore && humanScore == 5) {
    finalResult.textContent = `Humans win ${humanScore} to ${computerScore}`;
    container.appendChild(finalResult);
  } else if (humanScore < computerScore && computerScore == 5) {
    finalResult.textContent = `Computers win ${computerScore} to ${humanScore}`;
    container.appendChild(finalResult);
  } else if (humanScore == 5 && computerScore == 5) {
    finalResult.textContent = "Game ends in Draw";
    container.appendChild(finalResult);
  }
}

playRound(getHumanChoice(), getComputerChoice());

// the game will go 5 rounds to determine a winner.
// scores start at 0 and first to 3 wins.
// function playGame() {
//   for (let i = 0; i <= 4; i++) {
//     playRound(getHumanChoice(), getComputerChoice());
//   }
//   if (humanScore > computerScore) {
//     console.log(`Humans win ${humanScore} to ${computerScore}`);
//   } else if (humanScore < computerScore) {
//     console.log(`Computers win ${computerScore} to ${humanScore}`);
//   } else {
//     console.log("Game ends in Draw");
//   }

// }

let buttons = document.querySelectorAll("button");
// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//   alert("gdgd");
// });
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // alert("gdgd");
    playRound(e.target.textContent, getComputerChoice());
  });
});
