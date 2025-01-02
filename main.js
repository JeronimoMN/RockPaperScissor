class Score {
    constructor() {
        this.humanScore = 0;
        this.computerScore = 0;
    }
}

/*
    Initializes the game and waits for user input via clicks.
*/
function initGame() {

    const score = new Score()

    document.getElementById("rock").addEventListener('click', () => handleClick("rock", score))
    document.getElementById('paper').addEventListener('click', () => handleClick("paper", score))
    document.getElementById('scissor').addEventListener('click', () => handleClick("scissor", score))
}

/*
    Gets computer choice of an specific array of elements
*/
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

/*
    Play a single round of play
    Update the score and logs the result
*/
function playRound(humanChoice, computerChoice, score) {
    if ((humanChoice === computerChoice)) {
        console.log('It`s a tie')
        return "tie"
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')
    ) {
        console.log(`Player WIN! ${humanChoice} beats ${computerChoice}!`)
        score.humanScore++
        return "human"
    } else {
        console.log(`Computer WIN! ${computerChoice} beats ${humanChoice}!`)
        score.computerScore++;
        return "computer"
    }
}

/*
    Handles the user's click, determines the winner, and updates the UI.
*/
function handleClick(humanChoice, score) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice, score)

    const roundResultElement = document.getElementById("round-result");
    if (result === "tie") {
        roundResultElement.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (result === "human") {
        roundResultElement.textContent = `You won this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        roundResultElement.textContent = `You lost this round! ${computerChoice} beats ${humanChoice}.`;
    }

    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Current Score: You: ${score.humanScore}, Computer: ${score.computerScore}`;
}

initGame()