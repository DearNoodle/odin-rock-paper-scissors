function getComputerChoice() {
    return CHOICE[Math.floor(Math.random()*CHOICE.length)];
}

function getPlayerChoice(str) {
    return str.toLowerCase();
}

const CHOICE = ["rock","paper","scissors"];
let playerSelection;
let computerSelection;
computerSelection = getComputerChoice();
playerSelection = getPlayerChoice(prompt("Rock/Paper/Scissors"));
