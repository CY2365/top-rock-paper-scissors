const outcomes = ["Rock", "Paper", "Scissors"]

// Randomly picks one of the three options from the outcomes array.
function computerPlay() {
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

function playRound() {
    const userSelection = prompt('Choose Rock, Paper or Scissors..')
                        .toLowerCase();
    const computerSelection = computerPlay().toLowerCase();
    
    console.log(`You chose: ${userSelection}`);
    console.log(`'AI' chose: ${computerSelection}.`);

    switch (computerSelection) {
        // Computer has:
        case 'rock':
            // User has:
            switch (userSelection) {
                case 'rock':
                    return 'It\'s a tie';
                    break;
                case 'paper':
                    return 'You won';
                    break;
                case 'scissors':
                    return 'You lost';
                    break;
                default:
                    return 'Choose one';
                    break;
            }
            break;
        
        // Computer has:
        case 'paper':
            // User has:
            switch (userSelection) {
                case 'rock':
                    return 'You lost';
                    break;
                case 'paper':
                    return 'It\'s a tie';
                    break;
                case 'scissors':
                    return 'You won';
                    break;
                    default:
                return 'Choose one';
                break;
            }
            break;
        
        // Computer has:
        case 'scissors':
            // User has:
            switch (userSelection) {
                case 'rock':
                    return 'You won';
                    break;
                case 'paper':
                    return 'You lost';
                    break;
                case 'scissors':
                    return 'It\'s a tie';
                    break;
                    default:
                return 'Choose one';
                break;
            }
            break; 
    }
}

// Loops 5 times to playRound 5 times.
function game() {
    for (let times = 0; times < 5; times++) {
    console.log(playRound())
    }
}

game()