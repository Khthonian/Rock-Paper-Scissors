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
    const validOptions = ['Rock', 'Paper', 'Scissors'];
    const inputCheck = playerInput.charAt(0).toUpperCase() + playerInput.substring(1).toLowerCase();

    return inputCheck, validOptions.includes(inputCheck);
}

// Tester console
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    // Determine player input
    
}