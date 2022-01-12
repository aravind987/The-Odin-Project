function computerPlay(){
    choosePlay = Math.floor(Math.random()*3)+1;
    var play;
    if (choosePlay == 1){
        play = "rock";
    } else if (choosePlay == 2){
        play = "paper";
    } else if (choosePlay == 3){
        play = "scissors";
    }
    return play;
}

function round(computerChoice, userChoice){
    const container = document.querySelector('#messages');
    var computerPoints = 0;
    if (computerChoice == "rock"){
        if (userChoice == "rock"){
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = 'Tie! No points awarded.';
            container.appendChild(content);
        } else if (userChoice == "paper"){
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = 'You win! Paper beats rock.';
            container.appendChild(content);
            computerPoints = -1;
        } else {
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = 'You lose! Rock beats scissors.';
            container.appendChild(content);
            computerPoints = 1;
        }
    } else if (computerChoice == "paper"){
        if (userChoice == "paper"){
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = 'Tie! No points awarded.';
            container.appendChild(content);
        } else if (userChoice == "scissors"){
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = 'You win! Scissors beats paper.';
            container.appendChild(content);
            computerPoints = -1;
        } else {
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = 'You lose! Paper beats rock.';
            container.appendChild(content);
            computerPoints = 1;
        }
    } else {
        if (userChoice == "scissors"){
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = 'Tie! No points awarded.';
            container.appendChild(content);
        } else if (userChoice == "rock"){
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = 'You win! Rock beats scissors.';
            container.appendChild(content);
            computerPoints = -1;
        } else {
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = 'You lose! Scissors beats paper.';
            container.appendChild(content);
            computerPoints = 1;
        }
    }
    return computerPoints;
}

function declareWinner (userScore, computerScore){
    const container = document.querySelector('#messages');
    if (userScore > computerScore){
        const content = document.createElement('h3');
        content.classList.add('content');
        content.textContent = 'Congratulations! You win!';
        container.appendChild(content);
    } else if (computerScore > userScore){
        const content = document.createElement('h3');
        content.classList.add('content');
        content.textContent = 'You lost. Better luck next time.';
        container.appendChild(content);
    } else {
        const content = document.createElement('h3');
        content.classList.add('content');
        content.textContent = 'Tie game.';
        container.appendChild(content);
    }
}

function printScores (userScore, computerScore){
    const container = document.querySelector('#messages');
    const content = document.createElement('p');
    content.classList.add('content');
    content.textContent = 'User Score - ' + userScore + "       " + 'Computer Score - ' + computerScore;
    container.appendChild(content);
}

function printRound(roundsPlayed){
    const container = document.querySelector('#messages');
    const content = document.createElement('h3');
    content.classList.add('content');
    content.textContent = 'Round ' + (roundsPlayed + 1);
    container.appendChild(content);
}

function game (){
    var computerScore = 0;
    var userScore = 0;
    var userChoice;
    var computerChoice;
    var roundsPlayed = 0;

    //Get input from buttons
    const btnRock = document.querySelector('#rock');
    btnRock.addEventListener('click', () => {
        if (roundsPlayed < 5){
            printRound(roundsPlayed);
            userChoice = "rock";
            computerChoice = computerPlay();
            outcome = round(computerChoice, userChoice);
            if (outcome == 1){
                computerScore++;
            } else if (outcome == -1){
                userScore++;
            }
            roundsPlayed++;
            printScores(userScore, computerScore);
        } 

        if (roundsPlayed == 5){
            declareWinner(userScore, computerScore);
            roundsPlayed++;
        }
    });

    const btnPaper = document.querySelector('#paper');
    btnPaper.addEventListener('click', () => {
        if (roundsPlayed < 5){
            printRound(roundsPlayed);
            userChoice = "paper";
            computerChoice = computerPlay();
            outcome = round(computerChoice, userChoice);
            if (outcome == 1){
                computerScore++;
            } else if (outcome == -1){
                userScore++;
            }
            roundsPlayed++;
            printScores(userScore, computerScore);
        }

        if (roundsPlayed == 5){
            declareWinner(userScore, computerScore);
            roundsPlayed++;
        }
    });

    const btnScissors = document.querySelector('#scissors');
    btnScissors.addEventListener('click', () => {
        if (roundsPlayed < 5){
            printRound(roundsPlayed);
            userChoice = "scissors";
            computerChoice = computerPlay();
            outcome = round(computerChoice, userChoice);
            if (outcome == 1){
                computerScore++;
            } else if (outcome == -1){
                userScore++;
            }
            roundsPlayed++;
            printScores(userScore, computerScore);
        }
        
        if (roundsPlayed == 5){
            declareWinner(userScore, computerScore);
            roundsPlayed++;
        }
    });
}

game();
