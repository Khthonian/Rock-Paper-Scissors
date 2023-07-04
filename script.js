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

function validateInput(playerInput) {
    const validOptions = ["Rock", "Paper", "Scissors"];
    const inputCheck = playerInput.charAt(0).toUpperCase() + playerInput.substring(1).toLowerCase();

    return inputCheck, validOptions.includes(inputCheck);
}

// Tester console
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    // Determine the winner of the round

    // Tie round
    if (playerSelection === computerSelection) {
        return "Tied Round!";
    }

    // Player chooses Rock
    else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "You Lose! Paper beats Rock."; 
        }

        else {
            return "You Win! Rock beats Scissors.";
        }
    }

    // Player chooses Paper
    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return "You Lose! Scissors beats Paper.";
        }

        else {
            return "You Win! Paper beats Rock.";
        }
    }

    // Player chooses Scissors
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors.";
        }

        else {
            return "You Win! Scissors beats Paper.";
        }
    }
}

// Tester console
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));