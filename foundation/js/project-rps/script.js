// Create variables to hold computer selection and the player selection
let playerSelection = "rock";
let computerSelection = getComputerChoice();

game();

// Function to generate the computer selection in a random basis
function getComputerChoice() {

    let choice = Math.floor(Math.random() * 10) + 1;
    if (choice >= 1 && choice <= 4) {
        return "rock";
    } else if (choice >= 5 && choice <= 7) {
        return "paper";
    } else {
        return "scissors";
    }
}

function game() {

    for(let i = 1; i <= 5; i++) {
        playerSelection = prompt("Rock, Paper, Scissors");

        console.log(playRound(playerSelection, computerSelection));
    }

    // Function that takes two parameter, the computer selection and the player selection
    function playRound(playerSelection, computerSelection) {

        // Turn both the arguments to all upper case
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();

        // Comparing both selection and return output accordingly
        if (playerSelection === computerSelection) {
            return `DRAW! BOTH SELECTS ${playerSelection}`;
        }
        if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
            return `YOU WIN! ${playerSelection} BEATS ${computerSelection}`;
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            return `YOU WIN! ${playerSelection} BEATS ${computerSelection}`;
        } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            return `YOU WIN! ${playerSelection} BEATS ${computerSelection}`;
        } else {
            return `YOU LOSE! ${computerSelection} BEATS ${playerSelection}`;
        }
    }
}