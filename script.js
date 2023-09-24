function getComputerChoice() {
    return CHOICE[Math.floor(Math.random()*CHOICE.length)];
}

function getPlayerChoice(input) {
    return input.toLowerCase();
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
    }  else {
        alert("wrong input");
        restartRound = true;
    }
    if (!restartRound) {
        alert(`Computer (${computer}): ${roundResult}
Player Score:${playerScore}     Computer Score: ${computerScore}`);
    }
}

function Game(rounds) {
    while (gameRound <= rounds) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice(prompt(`Round ${gameRound}: Rock/Paper/Scissors`));
        playRound(playerSelection,computerSelection);
        if (restartRound === true) {
            restartRound = false;
            continue;
        }
        gameRound++;
    }
}

const CHOICE = ["rock","paper","scissors"];
let playerSelection;
let computerSelection;
let gameRound = 1;
let playerScore = 0;
let computerScore = 0;
let roundResult;
let restartRound = false;

Game(5);
