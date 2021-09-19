let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const generatecomputerGuess = () => {
  return Math.floor(Math.random() * 10); 
}

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
  const humanGap = Math.abs(targetNum - humanGuess);
  const computerGap = Math.abs(targetNum - computerGuess);
  if (humanGap <= computerGap) {
    console.log(`You Win! You guessed ${humanGuess}, the computer guessed ${computerGuess}, and the target was ${targetNum}.`);
    return 'human';
  } else if (humanGap > computerGap) {
    console.log(`You Lost! You guessed ${humanGuess}, the computer guessed ${computerGuess}, and the target was ${targetNum}.`);
    return 'computer';
  }
}

const updateScore = (winner) => {
  switch (winner) {
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
      break;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}

const playGame = () => {
  const targetNum = generateTarget();
  const computerGuess = generatecomputerGuess();
  const winner = compareGuesses(humanGuess, computerGuess, targetNum);
  updateScore(winner);
  advanceRound();
}

const humanGuess = 3;
playGame();

console.log(`Human Score: ${humanScore}.`);
console.log(`Computer Score: ${computerScore}.`);
console.log(`Round Number: ${currentRoundNumber}.`);
