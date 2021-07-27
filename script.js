
let playerScore = 0;
let computerScore = 0;

gameLoop();

// Async so we can sleep and see the console display, otherwise it bugs out
async function gameLoop() {
    for (let i = 0; i < 2; i++) {
        playRound();
        console.log(`Score\nYou: ${playerScore}\nComputer: ${computerScore}`);
        await sleep(1000);
    }
    totalScore(playerScore, computerScore);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



// Displays your place overall and the results of every game
function totalScore(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`Overall, you win! ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`Overall, you lose! ${computerScore} - ${playerScore}`);
    } else if (computerScore == playerScore) {
        console.log(`Overall, it's a draw! ${computerScore} - ${playerScore}`);
    } 
    console.log("There has been a problem");
}

function playRound() {
    let playerChoice = convertChoice(getPlayerInput());
    let computerChoice = computerPlay();
    playGame(computerChoice, playerChoice); 
}

// Gets user input
function getPlayerInput() {
    // error loop
    while (true) {
        input = prompt("Please choose paper, scissors or rock\n 0 = paper\n 1 = scissors\n 2 = rock");
        // Error handling for annyoing inputs
        if (!(isNaN(input) || input > 2 || input < 0 || input.length > 1 || input == "")) return parseInt(input);
        alert(`You entered \"${input}\", which is not valid`);
    }
}

// Gets winner and loser and displays outcome
function playGame(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) { 
        console.log("It's a draw!");

    } else if (playerChoice == "paper") {

        if (computerChoice == "scissors") {
            lose(computerChoice, playerChoice);
        } else win(computerChoice, playerChoice);

    } else if (playerChoice == "rock") {

        if (computerChoice == "paper") {
            lose(computerChoice, playerChoice);
        } else win(computerChoice, playerChoice)

    } else if (playerChoice == "scissors") {

        if (computerChoice == "rock") {
            lose(computerChoice, playerChoice);
        } else win(computerChoice, playerChoice);

    } else console.log("There has been a problem");
}

// displays win condition and increments score
function win(computerChoice, playerChoice) {
    console.log(getWinLoseString(computerChoice, playerChoice, true));
    playerScore++;
}

// displays loss condition and increments score
function lose(computerChoice, playerChoice) {
    console.log(getWinLoseString(computerChoice, playerChoice, false));
    computerScore++;
}

// returns string describing win or loss
function getWinLoseString(computerChoice, playerChoice, isWin) {
    if (isWin) {
        return `You win, ${playerChoice} beats ${computerChoice}`;
    } else return `You lose, ${computerChoice} beats ${playerChoice}`;
}

// gets computers choice
function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return convertChoice(choice);
   
}

// converts choice from number to string (easier documentation)
function convertChoice(input) {
    switch (input) {
        case 0:
            return "paper";
        case 1:
            return "scissors";
        case 2:
            return "rock";
    }
}