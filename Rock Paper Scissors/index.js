const computerChoiceDisplay = document.getElementById('computer-choice') 
const userChoiceDisplay = document.getElementById('user-choice')
const displayWinner = document.getElementById('winner')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let gameWinner

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    gameResult()
}))

function generateComputerChoice() {
    const computerSelectableChoices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * 3)
    
    computerChoice = computerSelectableChoices[randomIndex]
    computerChoiceDisplay.innerHTML = computerChoice
}

function gameResult() {

    if (computerChoice == userChoice) {
        gameWinner = 'Draw'
    }
    else if (
        (computerChoice === 'Rock' && userChoice === 'Paper') ||
        (computerChoice === 'Paper' && userChoice === 'Scissors') ||
        (computerChoice === 'Scissors' && userChoice === 'Rock')
        ){
        gameWinner = 'User'
    } else {
        gameWinner = 'Computer'
    } 

    displayWinner.innerHTML = gameWinner
}
