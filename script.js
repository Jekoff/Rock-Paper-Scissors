const prompt = require('prompt-sync')({sigint: true});


let wins = 0;
let losses = 0;
let ties = 0;

const choice = prompt("Enter rock, paper, or scissors: ");
if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
    console.log("Please enter a valid choice.");
}
