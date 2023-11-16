let userScore = 0;
let computerScore = 0;
let playerScore_div = document.getElementById("playerScore")
let computerScore_div = document.getElementById("computerScore")
let scoreboard_div = document.querySelector(".scoreboard")
let rockChoice = document.querySelector("#rock")
let paperChoice = document.querySelector("#paper")
let scissorsChoice = document.querySelector("#scissors")
let showDown_div = document.querySelector("#showtexthere")
let resetButton = document.querySelector(".reset")
let startButton = document.querySelector("#startButton")
let winnerSound = document.querySelector("#congratsaudio")
let tieSound = document.querySelector("#gongaudio")
let loserSound = document.querySelector("#loseraudio")
let roundsPlayed = 0;
let maxRounds = 7;
let userChoice; 
let computerChoice;

function playRockPaperScissors (){
    // add the event listener game logic here...?


}



function getComputerChoice() {
    let choices = [paperChoice, scissorsChoice, rockChoice]
    let randomize = Math.floor(Math.random()*3)
    return choices[randomize]
}

function updateScore() {
    playerScore_div.textContent ="You: " + userScore;
    computerScore_div.textContent = "Computer: " + computerScore
}

function resetGame(){
        userScore = 0
        computerScore = 0
        roundsPlayed = 0
        updateScore()
        showDown_div.textContent = "Game reset! Lets play again :)"
}

function resetGameWithDelay() {
    setTimeout(() => {
        userScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        updateScore();
        showDown_div.textContent = "Press a button to play!";
    }, 2000);
}

function resetGamePlayAgain(){
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    updateScore();
    showDown_div.textContent = "Press a button to play!"
}

function checkWinner() {
    if (roundsPlayed === maxRounds) {
        if (userScore > computerScore) {
            showDown_div.textContent = "You win the game!";
            let winnerPrompt = alert("You win! " + "You: " + userScore + " Computer: " + computerScore)
            winnerSound.play()
        } else if (userScore < computerScore) {
            showDown_div.textContent = "You lose the game :(";
            let loserPrompt = alert("You lost! " + "Computer: "+ computerScore + " You: " + userScore)
            loserSound.play()
        } else {
            showDown_div.textContent = "Its a draw...";
            let drawPrompt = alert("It's a draw...")
            tieSound.play()
        }
        resetGameWithDelay();
    }
}

startButton.addEventListener('click', (evt) => {
    playRockPaperScissors();
    console.log("Game has started.")
    showDown_div.textContent = "Game has started."
})

rockChoice.addEventListener('click', (evt) => {
    computerChoice = getComputerChoice();
    userChoice = rockChoice
    showDown_div.textContent = "You chose rock."
    console.log("You chose rock.")
    if (computerChoice === scissorsChoice) {
        console.log("Computer chose scissors. You win!")
        showDown_div.textContent = "You chose rock. Computer chose scissors. You win!"
        userScore++
    } else if (computerChoice === paperChoice) {
        console.log("Computer chose paper. You lose :(")
        showDown_div.textContent = "You chose rock. Computer chose paper. You lose :("
        computerScore++
    } else if (userChoice === computerChoice){
        console.log("You chose rock. Computer chose rock...Its a draw :/")
        showDown_div.textContent = "You chose rock. Computer chose rock...Its a draw :/"
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
        console.log("You chose paper. Computer chose paper...Its a draw :/")
        showDown_div.textContent = "You chose paper. Computer chose paper...Its a draw :/"
    } else if (computerChoice === scissorsChoice) {
        console.log("You chose paper. Computer chose scissors. You lose :(")
        showDown_div.textContent = "You chose paper. Computer chose scissors. You lose :("
        computerScore++
    } else if (computerChoice === rockChoice) {
        console.log("Computer chose rock. You win!")
        showDown_div.textContent = "You chose paper. Computer chose rock. You win!"
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
        showDown_div.textContent = "You chose scissors. Computer chose scissors...Its a draw :/"
    } else if (computerChoice === rockChoice) {
        console.log("Computer chose rock. You lose :(")
        showDown_div.textContent = "You chose scissors. Computer chose rock. You lose :("
        computerScore++
    } else if (computerChoice === paperChoice) {
        console.log("Computer chose paper. You win!")
        showDown_div.textContent = "You chose scissors. Computer chose paper. You win!"
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
    showDown_div.innerHTML = " "
})
