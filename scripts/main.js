// Pseudocode
// 1. Computer randomly plays "Rock", "Paper" or "Scissors"
// 2. User inputs "Rock", "Paper" or "Scissors"
// 3. Compare both player selections and assign a winner
// 4. If Rock and Paper are played, Paper wins
// 5. If Rock and Scissors are played, Rock wins
// 6. If Paper and Scissors are played, Scissors wins
// 7. If both selection are same, game is tie
// 8. Ensure Player's selection input is case insensitive
// 9, Ensure Computer's selection input is case insensitive
// 10. Play 5 game rounds and determine the final winner

function getComputerChoice() {
    const myArr = ["rock", "paper", "scissors"];
    const myArrIndex = Math.floor(Math.random() * myArr.length);
    const myArrRandom = myArr[myArrIndex];
    return myArrRandom;
}
getComputerChoice();
//console.log("COMPUTER CHOICE: ", getComputerChoice());

