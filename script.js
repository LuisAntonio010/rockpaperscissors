
const choices = ['rock', 'paper', 'scissors'];

const playerSelection = ''
const computerSelection = computerPlay();


function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}


function startPlay() {
    if (playerSelection.toLowerCase() === choices[0] && computerSelection === choices[0]) {
        console.log('tie') ;
    } else if (playerSelection.toLowerCase() === choices[0]&& computerSelection === choices[1]) {
        console.log('Sorry, you lost') ;
    } else if (playerSelection.toLowerCase() === choices[0] && computerSelection === choices[2]) {
        console.log('congratulations! you won') ; 
    } else if (playerSelection.toLowerCase === choices[1] && computerSelection === choices[0]) {
        console.log('congratulations! you won') ;
    } else if (playerSelection.toLowerCase === choices[1] && computerSelection === choices[1]) {
        console.log('tie')  ;
    } else if (playerSelection.toLowerCase === choices[1] && computerSelection === choices[2]) {
        console.log('Sorry, you lost') ;
    } else if (playerSelection.toLowerCase === choices[2] && computerSelection === choices[0]) {
        console.log('Sorry, you lost') ;
    } else if (playerSelection.toLowerCase === choices[2] && computerSelection === choices[1]) {
        console.log('congratulations! you won') ;
    } else if (playerSelection.toLowerCase === choices[2] && computerSelection === choices[2]) {
        console.log('tie')  ;
    } 
        else
        console.log('something went wrong')

}

function game () {
    
}