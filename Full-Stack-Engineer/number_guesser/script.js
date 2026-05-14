let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(userGuess, comGuess, target) {
    if (userGuess < 0 || userGuess > 9) {
        alert('Target number will be between 0 and 9');
    };

    const userClose = getAbsolute(userGuess, target);
    const comClose = getAbsolute(comGuess, target);

    if (userClose <= comClose) {
        return true;
    } else {
        return false;
    };
};

function getAbsolute(guess, target) {
    return Math.abs(guess - target);
};

function updateScore(winner) {
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    };
};

function advanceRound() {
    currentRoundNumber ++
}







