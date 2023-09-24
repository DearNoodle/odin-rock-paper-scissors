function getComputerChoice() {
    return CHOICE[Math.floor(Math.random()*CHOICE.length)];
}

function getPlayerChoice(str) {
    return str.toLowerCase();
}

function playRound(player,computer) {
    if (player === computer) {
        alert(`Computer (${computer}): draw`);
    } else if (player === "rock") {
        if (computer === "scissors") {
            alert(`Computer (${computer}): you win`);
        } else {
            alert(`Computer (${computer}): you lose`);
        }   
    } else if (player === "paper") {
        if (computer === "rock") {
            alert(`Computer (${computer}): you win`);
        } else {
            alert(`Computer (${computer}): you lose`);
        }   
    }  else if (player === "scissors") {
        if (computer === "paper") {
            alert(`Computer (${computer}): you win`);
        } else {
            alert(`Computer (${computer}): you lose`);
        }   
    }  else {
        alert("wrong input")
    }
}

const CHOICE = ["rock","paper","scissors"];
let playerSelection;
let computerSelection;

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice(prompt("Rock/Paper/Scissors"));
playRound(playerSelection,computerSelection);

