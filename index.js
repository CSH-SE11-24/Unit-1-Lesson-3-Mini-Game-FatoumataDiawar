// Get started!

const name = prompt("What's your name?")

console.log("Welcome to Rock, Paper, Scissors", name+"!")

let userChoice = prompt("Please choose one of the following numbers: [1] Rock, [2] Paper, or [3] Scissors" )

userChoice = parseInt(userChoice)
let compChoice = Math.floor(Math.random(1)*4)


console.log("You selected", userChoice, "and the computer selected", compChoice+ ".")

