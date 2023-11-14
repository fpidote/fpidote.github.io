

  document.getElementById('rockBtn').addEventListener('click', function () {
    playGame('rock');
  });

  document.getElementById('paperBtn').addEventListener('click', function () {
    playGame('paper');
  });

  document.getElementById('scissorsBtn').addEventListener('click', function () {
    playGame('scissors');
  });
  

  function playGame(playerChoice) {
    // Generate a random number 
    const computerChoiceNum = Math.floor(Math.random() * 3);

    // Assign String to choices
    let computerChoice;
    if (computerChoiceNum === 0) {
      computerChoice = 'rock';
    } else if (computerChoiceNum === 1) {
      computerChoice = 'paper';
    } else {
      computerChoice = 'scissors';
    }

    // Determine the winner
    const result = determineWinner(playerChoice, computerChoice);

    // Show the result
    showResult(playerChoice, computerChoice, result);
  }

  function determineWinner(player, computer) {
    if (player === computer) {
      return "Tie Game";
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'You lost!';
    }
  }

  function showResult(player, computer, result) {
    const resultText = document.getElementById('result');
    resultText.innerHTML = `You chose ${player}.<br><br>Computer chose ${computer}.<br><br>${result}`;
    
  }