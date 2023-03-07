const choices = ['rock','paper','scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice() {
  const playerChoice = prompt("Rock, paper, or scissors? ");
  return playerChoice;
}
