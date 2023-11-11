const prompt = require('prompt-sync')({sigint: true});

let wins = 0;
let losses = 0;
let ties = 0;

while(true) {
    // Get the player's choice and convert it to lowercase for consistency
    const playerChoice = prompt("Enter rock, paper, or scissors (or q to quit): ").toLowerCase();
    
    // Check if the player wants to quit the game
    if (playerChoice === "q") {
        break;
    }
    
    // Check for a valid choice
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        console.log("Please enter a valid choice.");
        continue; // Skip to the next iteration of the loop
    }

    // Generate computer's choice
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); // Use Math.floor to ensure a valid index
    const computerChoice = choices[randomIndex];
    console.log("Computer choice: " + computerChoice);

    // Compare the player's choice with the computer's choice and determine the outcome
    if (computerChoice === playerChoice) {
        console.log("Draw!");
        ties++;
    } else if (
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        console.log("You lost!");
        losses++;
    } else {
        console.log("You won!");
        wins++;
    }
}

// Print the final scores
console.log("Wins: " + wins, "Losses: " + losses, "Ties: " + ties);
