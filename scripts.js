const choices = ['rock','paper','scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, paper, or scissors? ");
  return playerChoice.toLowerCase();
}

