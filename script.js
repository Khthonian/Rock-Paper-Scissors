// Store the scores
let playerScore = 0;
let computerScore = 0;

// UI Interaction   
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const gameOutcome = document.getElementById("game-outcome");
const gameMessage = document.getElementById("game-message");
const playerText = document.getElementById("player-score");
const computerText = document.getElementById("computer-score");

// Event listeners for button clicks
rockButton.addEventListener('click', () => game("Rock"));
paperButton.addEventListener("click", () => game("Paper"));
scissorsButton.addEventListener("click", () => game("Scissors"));

// Game
function getComputerChoice() {
    // Get a random value to decide between the outputs
    rpsValue = Math.floor(Math.random() * 3);

    // Determine the string output via the random integer
    switch (rpsValue) {
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // Determine the winner of the round

    // Tie round
    if (playerSelection === computerSelection) {
        return {
            announce: "Tied Round!",
            outcome: 2
        };
    }

    // Player chooses Rock
    else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return {
                announce: "You Lose! Paper beats Rock.",
                outcome: 1
            };
        }

        else {
            return {
                announce: "You Win! Rock beats Scissors.",
                outcome: 0
            };
        }
    }

    // Player chooses Paper
    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return {
                announce: "You Lose! Scissors beats Paper.",
                outcome: 1
            };
        }

        else {
            return {
                announce: "You Win! Paper beats Rock.",
                outcome: 0
            };
        }
    }

    // Player chooses Scissors
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return {
                announce: "You Lose! Rock beats Scissors.",
                outcome: 1
            };
        }

        else {
            return {
                announce: "You Win! Scissors beats Paper.",
                outcome: 0
            };
        }
    }
}

function game(playerSelection) {

    if (playerScore == 0 && computerScore == 0) {
        gameOutcome.textContent = "First to five wins the game!";
    }
    
    const computerSelection = getComputerChoice();
    
    // Play the round and collect the outcome
    let roundReturn = playRound(playerSelection, computerSelection);
    let roundAnnounce = roundReturn.announce;
    let roundOutcome = roundReturn.outcome;

    //console.log(roundAnnounce);
    gameMessage.textContent = roundAnnounce;

    // Check who won the round
    if (roundOutcome == 0) {
        playerScore++;
    }

    else if (roundOutcome == 1) {
        computerScore++;
    }

    playerText.textContent = "Player: " + playerScore;
    computerText.textContent = "CPU: " + computerScore;


    // Determine the winner of the game from the final score
    if (playerScore == 5) {
        gameOutcome.textContent = "Player Wins!";
        gameMessage.textContent = "Final Score: Player " + playerScore + " - " + computerScore + " CPU";
        playerScore = 0;
        computerScore = 0;
    }

    else if (playerScore == 5) {
        gameOutcome.textContent = "CPU Wins!";
        gameMessage.textContent = "Final Score: Player " + playerScore + " - " + computerScore + " CPU";
        playerScore = 0;
        computerScore = 0;
    }
}