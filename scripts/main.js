//Computer randomly plays "Rock", "Paper" or "Scissors"
function getComputerChoice() {
    const myArr = ["rock", "paper", "scissors"];
    const myArrIndex = Math.floor(Math.random() * myArr.length);
    const myArrRandom = myArr[myArrIndex];
    return myArrRandom;
}

//User inputs "Rock", "Paper" or "Scissors"
//Compare both player selections and assign a winner
function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    const playerSelectionLowerCase = playerSelection.toLowerCase();

    if(playerSelection === null  || playerSelection.trim() === "" || !["rock", "paper", "scissors"].includes(playerSelectionLowerCase)) {
        return "Invalid input. Please enter 'rock', 'paper', 'scissors'";
    } else if(playerScore >= 5 || computerScore >= 5) {
        return "Game Over!";
    } else if(playerSelectionLowerCase === computerSelection) {
        return "Draw";
    }else if(playerSelectionLowerCase === "rock") {
        if(computerSelection === "paper") {
            computerScore++;
            return "You Lose. Paper beats Rock";
        } else if(computerSelection === "scissors") {
            playerScore++;
            return "You Win. Rock beats Scissors";
        }
    } else if(playerSelectionLowerCase === "paper") {
        if(computerSelection === "scissors") {
            computerScore++;
            return "You Lose. Scissors beats Paper";
        } else if(computerSelection === "rock") {
            playerScore++;
            return "You Win. Paper beats Rock";
        }
    } else if(playerSelectionLowerCase === "scissors") {
        if(computerSelection === "rock") {
            computerScore++;
            return "You Lose. Rock beats Scissors";
        } else if(computerSelection === "paper") {
            playerScore++;
            return "You Win. Scissors beats Paper";
        }
    }
}

//Play 5 game rounds and determine the final winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    let playerSelectionLowerCase;

    while(round <= 5) {
        const playerSelection = prompt("Please enter your weapon", "rock");

        if(playerSelection === null) {
            console.log("You have cancelled the game!");
            return;
        }

        playerSelectionLowerCase = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`\nGAME ROUND: ${round}`);
        console.log(`COMPUTER CHOICE: ${computerSelection}`);
        console.log(`YOUR SELECTION: ${playerSelectionLowerCase}`);

        if(result === "Invalid input. Please enter 'rock', 'paper', 'scissors'"){
            console.log(result);
            console.log("\u26A0 GAME ERROR! INVALID WEAPON INPUT DETECTED! TRY AGAIN!");
            return;
        } else if(result === "Game Over!") {
            console.log(result);
            break;
        } else {
            console.log(result);
        }

        if(result.includes("Win")) {
            console.log(`You won round: ${round}`);
            playerScore++;
        } else if(result.includes("Lose")) {
            console.log(`You Lost round: ${round}`);
            computerScore++;
        } else if(result === "Draw") {
            console.log(`It's a Draw in round ${round}`);
        }
        
        round++;
    }

    console.log("=========================================================");

    if(playerScore === computerScore) {
        console.log("DRAW: YOU & THE COMPUTER HAVE A TIE!");
    } else if(playerScore > computerScore) {
        console.log(`YOU WON:\nFinal Tally \nYour Score ${playerScore}/5 vs Computer Score ${computerScore}/5`);
    } else {
        console.log(`YOU LOST:\nFinal Tally \nComputer Score ${computerScore}/5 vs Your Score ${playerScore}/5`);
    } 
} 

game();