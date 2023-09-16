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

// Full game function
function game() {

    const container = document.querySelector('container');
    const btn = document.querySelectorAll('button');
    const div = document.querySelector('div');

    btn.forEach((btn) => {

        btn.addEventListener('click', function (e) {
            console.log(e.target.id);
            playerSelection = e.target.id;
            playRound(playerSelection, getComputerChoice());
            console.log(playerScore);
            console.log(computerScore);

            if (playerScore === 5|| computerScore === 5) {

                if (playerScore > computerScore) {
                    div.textContent = "GAME RESULT YOU WIN!";
                } else if (playerScore < computerScore) {
                    div.textContent = "GAME RESULT: YOU LOSE!";
                } else {
                    div.textContent = "GAME RESULT: DRAW";
                }
            }
        });
    });

    let playerScore = 0;
    let computerScore = 0;

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
            playerScore++;
            return `YOU WIN! ${playerSelection} BEATS ${computerSelection}`;
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            playerScore++;
            return `YOU WIN! ${playerSelection} BEATS ${computerSelection}`;
        } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            playerScore++;
            return `YOU WIN! ${playerSelection} BEATS ${computerSelection}`;
        } else {
            computerScore++;
            return `YOU LOSE! ${computerSelection} BEATS ${playerSelection}`;
        }
    }
}