
const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}

function playerPlay(){
   let playerChoise =  prompt('choose rock, paper, or scissors');

    if (playerChoise.toLowerCase() === 'rock'){
        return playerChoise = choices[0];
    } else if (playerChoise.toLowerCase() === 'paper') {
        return playerChoise = choices[1];
    } else if (playerChoise.toLowerCase() === 'scissors') {
        return playerChoise = choices[2];
    } else {
       return console.log('something went wrong')
    }
}

function playRound() {

    const playerSelection = playerPlay();
    console.log(`player chose: ${playerSelection}`); 
    const computerSelection = computerPlay();
    console.log(`computer chose: ${computerSelection}`); 
    
    if (playerSelection === choices[0] && computerSelection === choices[0]) {
        console.log('%cTie!! go again!', 'color:blue') ;
    } else if (playerSelection === choices[0]&& computerSelection === choices[1]) {
        console.log('%cCOMPUTER WINS! Paper beats rock', 'color:red') ;
        computerScore++;
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        console.log('%cPLAYER WINS!Rock beats Scissors', 'color:green') ; 
        playerScore++;

    } else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        console.log('%cPLAYER WINS! Paper beats Rock', 'color:green') ;
        playerScore++        
    } else if (playerSelection === choices[1] && computerSelection === choices[1]) {
        console.log('%cTie!! go again!', 'color:blue') ;  ;
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {
        console.log('%cCOMPUTER WINS!  Scissors beat paper', 'color:red') ;
        computerScore++;

    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {
        console.log('%cCOMPUTER WINS! Rocks beat Scisoors', 'color:red') ;
        computerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        console.log ('%cPLAYER WINS! you won! Scisoors beats Paer', 'color:green') ;
        playerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[2]) {
        console.log('%cTie!! go again!', 'color:blue') ; ;

    } else {
        return ('something went wrong')
    }
}

function scoreBoard(){
    console.log(" *******FINAL SCORE*******")
    console.log(` Player score:    ${playerScore}`)
    console.log(` Computer score:  ${computerScore}`)
}

function finalResult(){
    if (playerScore > computerScore) {
        console.log('THE HUMAN WINS!')
    } else if( computerScore > playerScore) {
        console.log('THE COMPUTERS ARE SMARTER!')
    } else {
        console.log('its a tie! go again!')
    }
}

function game() {
    for (let rounds = 0; rounds < 5; rounds++) {     
      const result = playRound();
    }          
    scoreBoard() 
    finalResult()
 }




