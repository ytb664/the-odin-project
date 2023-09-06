// Create variables to hold computer selection and the player selection
const playerSelection = "rock";
const computerSelection = getComputerChoice();

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
// Function that takes two parameter, the computer selection and the player selection
function playRound(playerSelection, computerSelection) {

    // Turn both the arguments to all upper case
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
}
// Return a string based on the result from the previous function