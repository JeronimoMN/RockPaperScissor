function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function getHumanChoice(){
    return prompt('Select Rock or Paper or Scissor').toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if((humanChoice === computerChoice)){
        return 'It´s a tie'
    }else if(
        (humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')
    ){
        humanScore++
        return `Player WIN! ${humanChoice} beats ${computerChoice}!`
    }else{
        computerScore++;
        return `Computer WIN! ${computerChoice} beats ${humanChoice}!`
    }
}

function playGame() {
    for (let i = 0; i < 3; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        console.log( playRound(humanSelection, computerSelection));
    }

    if(humanScore > computerScore){
        console.log('Human Win')
    }else if(humanScore < computerScore){
        console.log('Computer Win')
    }
    else{
        console.log('TIE!')
    }
}

let humanScore = 0 , computerScore = 0

playGame();