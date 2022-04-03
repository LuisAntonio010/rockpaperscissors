
const choices = ['rock', 'paper', 'scissors'];

const rockButton = document.querySelector(".rockButton")
const paperButton = document.querySelector(".paperButton")
const scissorsButton = document.querySelector(".scissorsButton")

const guessSubmit = document.querySelectorAll('button')

const result = document.querySelector('.result')
const resultList = document.createElement('div')
result.appendChild(resultList)
const playerPick = document.createElement('div')
result.appendChild(playerPick)
const computerPick = document.createElement('div')
result.appendChild(computerPick)

const scoreResult = document.querySelector('.scoreResult')
const finalScore = document.createElement('div')
scoreResult.appendChild(finalScore)

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}

rockButton.addEventListener("click", e => {
    document.getElementsByClassName("rockButton") ;
    playerSelection = 'rock'
    playRound() 
    scoreBoard()
    finalResult()
})

paperButton.addEventListener("click", e => {
    document.getElementsByClassName("paperButton")
    playerSelection = 'paper'
    playRound() 
    scoreBoard()
    finalResult()

    
})

scissorsButton.addEventListener("click", e => {
    document.getElementsByClassName("scissorsButton")
    playerSelection = 'scissors'
    playRound() 
    scoreBoard()
    finalResult()
 
})

function playRound() {

    computerSelection = computerPlay();

    playerPick.textContent = `Player chose: ${playerSelection}`    
    computerPick.textContent = `Computer chose: ${computerSelection}`
    
    if (playerSelection === choices[0] && computerSelection === choices[0]) {
        resultList.textContent = (`Tie!!go again!` )
        

    } else if (playerSelection === choices[0]&& computerSelection === choices[1]) {
        resultList.textContent = `COMPUTER WINS! \n  Paper beats rock `
        computerScore++;

    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        resultList.textContent = `PLAYER WINS! \n  Rock beats Scissors`
        playerScore++;

    } else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        resultList.textContent = 'PLAYER WINS! Paper beats Rock', 'color:green'
        playerScore++        

    } else if (playerSelection === choices[1] && computerSelection === choices[1]) {
        resultList.textContent = 'Tie!! go again!', 'color:blue'
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {
        resultList.textContent = 'COMPUTER WINS!  Scissors beat paper', 'color:red' ;
        computerScore++

    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {
        resultList.textContent = 'COMPUTER WINS! Rocks beat Scisoors'
        computerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        resultList.textContent = 'PLAYER WINS! you won! Scisoors beats Paer'
        playerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[2]) {
        resultList.textContent = 'Tie!! go again!' 

    } else {
        resultList.textContent ='something went wrong'
    }
}

function scoreBoard(){
    finalScore.textContent= `Player score:${playerScore} Computer score:${computerScore}` 
}


function finalResult(){

    if (playerScore === 5 ) {
        console.log('THE HUMAN WINS!')
        guessSubmit.disabled = true
    
    } else if(computerScore === 5) {
        console.log('THE COMPUTERS ARE SMARTER!')  
        guessSubmit.disabled = true      
    } else {
        console.log('its a tie! go again!')
      
     }
}

