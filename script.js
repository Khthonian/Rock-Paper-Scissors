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

console.log(getComputerChoice());