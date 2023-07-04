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
    // Check to see if the user input is suitable
    const validOptions = ["Rock", "Paper", "Scissors"];
    const inputCheck = playerInput.charAt(0).toUpperCase() + playerInput.substring(1).toLowerCase();

    return validOptions.includes(inputCheck);
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

function game() {
    // Store the scores
    let playerScore = 0;
    let computerScore = 0;
    
    // Play five rounds of RPS
    for (let i = 0; i < 5; i++) {
        // Check for a valid input
        let playerSelection;
        const computerSelection = getComputerChoice();
        let validInput = false;

        while (!validInput) {
            playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors): ");

            validInput = validateInput(playerSelection);

            if (!validInput) {
                alert("Please enter a valid input");
            }

            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
        }

        // Play the round and collect the outcome
        let roundReturn = playRound(playerSelection, computerSelection);
        let roundAnnounce = roundReturn.announce;
        let roundOutcome = roundReturn.outcome;

        console.log(roundAnnounce);

        // Check who won the round
        if (roundOutcome == 0) {
            playerScore++;
        }

        else if (roundOutcome == 1) {
            computerScore++;
        }

        console.log("Current Score: Player " + playerScore + " - " + computerScore + " CPU");
    }

    // Determine the winner of the game from the final score
    if (playerScore > computerScore) {
        console.log("Player Wins!");
        console.log("Final Score: Player " + playerScore + " - " + computerScore + " CPU");
    }

    else if (playerScore < computerScore) {
        console.log("CPU Wins!");
        console.log("Final Score: Player " + playerScore + " - " + computerScore + " CPU");
    }

    else {
        console.log("Tied Game!");
        console.log("Final Score: Player " + playerScore + " - " + computerScore + " CPU");
    }
}

game();