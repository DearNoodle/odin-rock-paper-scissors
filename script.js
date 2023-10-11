function getComputerChoice() {
    return CHOICE[Math.floor(Math.random()*CHOICE.length)];
}

function Game(choice) {
    computerSelection = getComputerChoice();
    playerSelection = choice;
    playRound(playerSelection,computerSelection);
}

function playRound(player,computer) {
    if (player === computer) {
        roundResult = "draw";
    } else if (player === "rock") {
        if (computer === "scissors") {
            playerScore++;
            roundResult = "you win";
        } else {
            computerScore++;
            roundResult = "you lose";
        }   
    } else if (player === "paper") {
        if (computer === "rock") {
            playerScore++;
            roundResult = "you win";
        } else {
            computerScore++;
            roundResult = "you lose";
        }   
    }  else if (player === "scissors") {
        if (computer === "paper") {
            playerScore++;
            roundResult = "you win";
        } else {
            computerScore++;
            roundResult = "you lose";
        }  
    }
    if (playerScore === 5) {
        panelText.innerHTML = `YOU WIN`;
        restartGame();
    } else if (computerScore === 5) {
        panelText.innerHTML = `YOU LOSE`;
        restartGame();
    } else {
        panelText.innerHTML = `Computer (${computer}): ${roundResult}<br>Player Score:${playerScore}<br>Computer Score: ${computerScore}`;
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
}

const CHOICE = ["rock","paper","scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundResult;

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const panelText = document.querySelector(".panel-text");

rockBtn.addEventListener("click", () => Game("rock"));
paperBtn.addEventListener("click", () => Game("paper"));
scissorsBtn.addEventListener("click", () => Game("scissors"));


