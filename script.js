alert("BANANA")

console.log("hello world")
let userScore = 0;
let computerScore = 0;
let playerScore_div = document.getElementById("#playerScore")
let computerScore_div = document.getElementById("#computerScore")
let scoreboard_div = document.getElementsByClassName(".scoreboard")
let rockChoice = document.querySelector("#rock")
let paperChoice = document.querySelector("#paper")
let scissorsChoice = document.querySelector("#scissors")
let showDown_div = document.querySelector(".showdown")
let userChoice; 
let computerChoice;

function getComputerChoice() {
    let choices = [paperChoice, scissorsChoice, rockChoice]
    let randomize = Math.floor(Math.random()*3)
    return choices[randomize]
}

rockChoice.addEventListener('click', (evt) => {
    computerChoice = getComputerChoice
    console.log("You chose rock.")
    if (computerChoice == scissorsChoice) {
        console.log("Computer chose scissors. You win!")
        showDown_div.textcontent = "Computer chose scissors. You win!"
    } else if (computerChoice == paperChoice) {
        console.log("Computer chose paper. You lose :(")
        showDown_div.textcontent = "Computer chose paper. You lose :("
    } else if (userChoice === computerChoice){
        console.log("Computer chose rock...Its a draw :/")
        showDown_div.textcontent = "Computer chose rock...Its a draw :/"
    }
})

paperChoice.addEventListener('click', (evt) => {
    console.log("You chose paper.")
    if (computerChoice == userChoice) {
        console.log("Computer chose paper...Its a draw :/")
    } else if (computerChoice == scissorsChoice) {
        console.log("Computer chose scissors. You lose :(")
    } else if (computerChoice == rockChoice) {
        console.log("Computer chose rock. You win!")
    }
})

scissorsChoice.addEventListener('click', (evt) => {
    console.log("You chose scissors.")
    if (computerChoice == userChoice) {
        console.log("Computer chose scissors...Its a draw :/")
    } else if (computerChoice == rockChoice) {
        console.log("Computer chose rock. You lose :(")
    } else if (computerChoice == paperChoice) {
        console.log("Computer chose paper. You win!")
    }
})
