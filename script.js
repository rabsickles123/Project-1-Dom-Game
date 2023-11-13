let userScore = 0;
let computerScore = 0;
let playerScore_div = document.getElementById("playerScore")
let computerScore_div = document.getElementById("computerScore")
let scoreboard_div = document.getElementsByClassName(".scoreboard")
let rockChoice = document.querySelector("#rock")
let paperChoice = document.querySelector("#paper")
let scissorsChoice = document.querySelector("#scissors")
let showDown_div = document.querySelector(".showdown")
let resetButton = document.querySelector(".reset")
let roundsPlayed = 0;
let maxRounds = 7;
let userChoice; 
let computerChoice;

function getComputerChoice() {
    let choices = [paperChoice, scissorsChoice, rockChoice]
    let randomize = Math.floor(Math.random()*3)
    return choices[randomize]
}

function updateScore() {
    playerScore_div.textContent ="Your score: " + userScore;
    computerScore_div.textContent = "Computer score: " + computerScore
}

function resetGame(){
        userScore = 0
        computerScore = 0
        roundsPlayed = 0
        updateScore()
        showDown_div.textContent = "Game reset! Lets play again :)"
}

function checkWinner() {
    if (roundsPlayed === maxRounds) {
        if (userScore > computerScore) {
            showDown_div.textContent = "You win the game!";
        } else if (userScore < computerScore) {
            showDown_div.textContent = "You lose the game :(";
        } else {
            showDown_div.textContent = "DRAW";
        }
        resetGame();
    }
}
/* while loop necessary to instate a full game
so while (i < = 7) {game continues with}
winner of the 7 games (whoever has more is declared winner with a "You win!" 
popping up on screen and confetti animation and pah pah sound. Otherwise "You lose :("
*/


rockChoice.addEventListener('click', (evt) => {
    computerChoice = getComputerChoice();
    userChoice = rockChoice
    showDown_div.textContent = "You chose rock."
    console.log("You chose rock.")
    if (computerChoice === scissorsChoice) {
        console.log("Computer chose scissors. You win!")
        showDown_div.textContent = "Computer chose scissors. You win!"
        userScore++
    } else if (computerChoice === paperChoice) {
        console.log("Computer chose paper. You lose :(")
        showDown_div.textContent = "Computer chose paper. You lose :("
        computerScore++
    } else if (userChoice === computerChoice){
        console.log("Computer chose rock...Its a draw :/")
        showDown_div.textContent = "Computer chose rock...Its a draw :/"
    }
    updateScore()
    roundsPlayed ++
    checkWinner()
})

paperChoice.addEventListener('click', (evt) => {
    computerChoice = getComputerChoice()
    userChoice = paperChoice
    showDown_div.textContent = "You chose paper."
    console.log("You chose paper.")
    if (computerChoice === userChoice) {
        console.log("Computer chose paper...Its a draw :/")
        showDown_div.textContent = "Computer chose paper...Its a draw :/"
    } else if (computerChoice === scissorsChoice) {
        console.log("Computer chose scissors. You lose :(")
        showDown_div.textContent = "Computer chose scissors. You lose :("
        computerScore++
    } else if (computerChoice === rockChoice) {
        console.log("Computer chose rock. You win!")
        showDown_div.textContent = "Computer chose rock. You win!"
        userScore++
    }
    updateScore()
    roundsPlayed ++
    checkWinner()
})

scissorsChoice.addEventListener('click', (evt) => {
    computerChoice = getComputerChoice();
    userChoice = scissorsChoice;
    showDown_div.textContent = "You chose scissors."
    console.log("You chose scissors.")
    if (computerChoice === userChoice) {
        console.log("Computer chose scissors...Its a draw :/")
        showDown_div.textContent = "Computer chose scissors...Its a draw :/"
    } else if (computerChoice === rockChoice) {
        console.log("Computer chose rock. You lose :(")
        showDown_div.textContent = "Computer chose rock. You lose :("
        computerScore++
    } else if (computerChoice === paperChoice) {
        console.log("Computer chose paper. You win!")
        showDown_div.textContent = "Computer chose paper. You win!"
        userScore++
    }
    updateScore()
    roundsPlayed++
    checkWinner()
})

resetButton.addEventListener('click', (evt) => {
    userScore = 0
    computerScore = 0
    roundsPlayed = 0
    updateScore()
    showDown_div.textContent = "Game reset!"
})
