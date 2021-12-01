const outcomes = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let aiScore = 0;
let result;

// Randomly picks one of the three options from the outcomes array.
function computerPlay() {
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

// Plays one round of rock paper scissors.
function playRound(selection) {
    const userSelection = selection
    const computerSelection = computerPlay().toLowerCase();
    let theResult;
    
    

    switch (computerSelection) {
        // Computer has:
        case 'rock':
            // User has:
            switch (userSelection) {
                case 'rock':
                    theResult = 'It\'s a tie';
                    break;
                case 'paper':
                    userScore += 1;
                    updateScore();
                    theResult = 'You won';
                    break;
                case 'scissors':
                    aiScore += 1;
                    updateScore();
                    theResult = 'You lost';
                    break;
                default:
                    theResult = 'Choose one';
                    
            }
            break;

        // Computer has:
        case 'paper':
            // User has:
            switch (userSelection) {
                case 'rock':
                    aiScore += 1;
                    updateScore();
                    theResult = 'You lost';
                    break;
                case 'paper':
                    theResult = 'It\'s a tie';
                    break;
                case 'scissors':
                    userScore += 1;
                    updateScore();
                    theResult = 'You won';
                    break;
                    default:
                    theResult = 'Choose one';
                
            }
            break;
        
        // Computer has:
        case 'scissors':
            // User has:
            switch (userSelection) {
                case 'rock':
                    userScore += 1;
                    updateScore();
                    theResult = 'You won';
                    break;
                case 'paper':
                    updateScore();
                    aiScore += 1;
                    theResult = 'You lost';
                    break;
                case 'scissors':
                    theResult = 'It\'s a tie';
                    break;
                    default:
                    theResult = 'Choose one';
                ;
            }
            break; 
    }
    updateResult(userSelection, computerSelection, theResult);
    
}

function updateScore() {
    let user = document.querySelector('.userscore')
    let ai = document.querySelector('.aiscore')

    user.textContent = `User score: ${userScore}`
    ai.textContent = `AI score: ${aiScore}`
}

function updateResult(userSelection, computerSelection, result) {
    let resultDiv = document.querySelector('.result');
    resultDiv.textContent = `You chose: ${capitalizeFirstLetter(userSelection)}
AI chose: ${capitalizeFirstLetter(computerSelection)}
${result}`;
}


function game(e) {
    if (userScore < 5 && aiScore < 5) {
        playRound(e.target.id);
        if (userScore == 5) {
            let resultCont = document.querySelector('.result');
            resultCont.textContent = 'You won the game';
            userScore = 0; 
            aiScore = 0;
            updateScore();
        } if (aiScore == 5) {
            let resultCont = document.querySelector('.result');
            resultCont.textContent = 'You lost the game';
            userScore = 0;
            aiScore = 0;
            updateScore();
        }
    } 
}

function addListener(e) {
    e.addEventListener('click', game)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


const buttons = document.querySelectorAll('.button')
buttons.forEach(addListener)
