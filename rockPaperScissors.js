const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case 'rock':
    case 'paper':
    case 'scissors':
      return userInput;
      break;
    default:
      console.log(`Please choose a valid option: rock, paper, scissors.`);
  }
}

const getComputerChoice = () => {
  const num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
  return computerChoice;
}

const determineWinner = (userChoice, computerChoice) => {
  switch (true) {
    case (userChoice === computerChoice):
      return 'It\'s a Tie!';
      break;
    case (userChoice === 'rock'):
      switch(true) {
        case (computerChoice === 'paper'):
          return 'You Lose!';
          break;
        case (computerChoice === 'scissors'):
          return 'You Win!';
          break;
      }
      break;
    case (userChoice === 'paper'):
      switch(true) {
        case (computerChoice === 'rock'):
          return 'You Win!';
          break;
        case (computerChoice === 'scissors'):
          return 'You Lose!';
          break;
      }
      break;
    case (userChoice === 'scissors'):
      switch(true) {
        case (computerChoice === 'paper'):
          return 'You Win!';
          break;
        case (computerChoice === 'rock'):
          return 'You Lose!';
          break;
      }
      break;
    case (userChoice === 'bomb'):
      return 'Secret Win!'
      break;
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
