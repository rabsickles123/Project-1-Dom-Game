alert("BANANA")

console.log("hello world")
let rockChoice = document.querySelector("#rock")
let paperChoice = document.querySelector("#paper")
let scissorsChoice = document.querySelector("#scissors")
let userChoice;
let computerChoice;


rockChoice.addEventListener('click', (evt) => {
    console.log("You chose rock.")
    if (computerChoice == scissorsChoice) {
        console.log("Computer chose scissors. You win!")
    } else if (computerChoice == paperChoice) {
        console.log("Computer chose paper. You lose :(")
    } else if (userChoice === computerChoice){
        console.log("Computer chose rock...Its a draw :/")
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
