const choices = ['rock','paper','scissors'];

function getComputerChoice() {
  // chooses a random item from choices
  return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice() {
  // prompts user for an their choice
  // lowercases their input
  let playerChoice = prompt("Rock, paper, or scissors? ");
  return playerChoice.toLowerCase();
}

function playRound() {
  // plays a single round
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
}