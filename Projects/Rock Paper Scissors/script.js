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
    var computerPoints = 0;
    if (computerChoice == "rock"){
        if (userChoice == "rock"){
            console.log("Tie! No points awarded.");
        } else if (userChoice == "paper"){
            computerPoints = -1;
            console.log("You win! Paper beats rock.");
        } else {
            console.log("You lose! Rock beats scissors.");
            computerPoints = 1;
        }
    } else if (computerChoice == "paper"){
        if (userChoice == "paper"){
            console.log("Tie! No points awarded.");
        } else if (userChoice == "scissors"){
            console.log("You win! Scissors beats paper.");
            computerPoints = -1;
        } else {
            console.log("You lose! Paper beats rock.");
            computerPoints = 1;
        }
    } else {
        if (userChoice == "scissors"){
            console.log("Tie! No points awarded.");
        } else if (userChoice == "rock"){
            console.log("You win! Rock beats scissors.");
            computerPoints = -1;
        } else {
            console.log("You lose! Scissors beats paper.");
            computerPoints = 1;
        }
    }
    return computerPoints;
}

function game (){
    var computerScore = 0;
    var userScore = 0;
    var userChoice;
    var computerChoice;
    for (i = 0; i < 5; i++){
        userChoice = prompt("Please enter an option (rock, paper, scissors) : ");
        computerChoice = computerPlay();
        outcome = round(computerChoice, userChoice);
        if (outcome == 1){
            computerScore++;
        } else if (outcome == -1){
            userScore++;
        }
    }
    if (userScore > computerScore){
        console.log("Congratulations! You win!");
    } else if (computerScore > userScore){
        console.log("You lost. Better luck next time");
    } else {
        console.log("Tie game.")
    }
}

game();
