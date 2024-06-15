// rock paper scissors game algorithm

console.log("Hello World");

// scores start at 0
let humanScore = 0;
let computerScore = 0;

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
    console.log(`Human wins the round ${humanChoice} beats ${computerChoice}`);
  } else if (
    humanChoice.toLowerCase() == "rock" &&
    computerChoice.toLowerCase() == "paper"
  ) {
    computerScore += 1;
    console.log(
      `Computers wins the round ${computerChoice} beats ${humanChoice}`
    );
  } else if (
    humanChoice.toLowerCase() == "rock" &&
    computerChoice.toLowerCase() == "rock"
  ) {
    console.log(`Round Draw`);
  } else if (
    humanChoice.toLowerCase() == "scissors" &&
    computerChoice.toLowerCase() == "rock"
  ) {
    computerScore += 1;
    console.log(
      `Computers wins the round ${computerChoice} beats ${humanChoice}`
    );
  } else if (
    humanChoice.toLowerCase() == "scissors" &&
    computerChoice.toLowerCase() == "scissors"
  ) {
    console.log(`Round Draw`);
  } else if (
    humanChoice.toLowerCase() == "scissors" &&
    computerChoice.toLowerCase() == "paper"
  ) {
    humanScore += 1;
    console.log(`Human wins the round ${humanChoice} beats ${computerChoice}`);
  } else if (
    humanChoice.toLowerCase() == "paper" &&
    computerChoice.toLowerCase() == "rock"
  ) {
    humanScore += 1;
    console.log(`Human wins the round ${humanChoice} beats ${computerChoice}`);
  } else if (
    humanChoice.toLowerCase() == "paper" &&
    computerChoice.toLowerCase() == "scissors"
  ) {
    computerScore += 1;
    console.log(
      `Computers wins the round ${computerChoice} beats ${humanChoice}`
    );
  } else if (
    humanChoice.toLowerCase() == "paper" &&
    computerChoice.toLowerCase() == "paper"
  ) {
    console.log(`Round Draw`);
  }
}

playRound(getHumanChoice(), getComputerChoice());

// the game will go 5 rounds to determine a winner.
// scores start at 0 and first to 3 wins.
function playGame() {
  for (let i = 0; i <= 4; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log(`Humans win ${humanScore} to ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`Computers win ${computerScore} to ${humanScore}`);
  } else {
    console.log("Game ends in Draw");
  }
}
