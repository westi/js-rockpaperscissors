// Rock Paper Scissors

// Initialize variables
var userChoice = null;
var compChoice = null;
var userWins = 0;
var compWins = 0;

// Returns rock, paper, or scissors randomly
function getCompChoice () {
	var randomInt = Math.floor(Math.random() * 3);
	if (randomInt == 0) {
		return "rock";
	} else if (randomInt == 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

// Set compChoice
var compChoice = getCompChoice();

// Set userChoice
var userChoice = prompt("Choose rock, paper, or scissors:");

// If user wins
function youWin () {
	userWins++;
	alert("You win! The computer chose " + compChoice + ". The score is " + userWins + " to " + compWins + ".");
	return true;
}

// If user loses
function youLose () {
	compWins++;
	alert("You lose! The computer chose " + compChoice + ". The score is " + userWins + " to " + compWins + ".");
	return true;
}

// Main if statement
if ( userChoice == "rock" || userChoice == "paper" || userChoice == "scissors" ) {
	if (userChoice == compChoice) {
		youWin();
	}
	else if (userChoice == "rock") {
		if (compChoice == "paper") {
			youLose();
		} else {
			youWin();
		}
	} else if (userChoice == "paper") {
		if (compChoice == "rock") {
			youWin();
		} else {
			youLose();
		}
	} else {
		if (compChoice == "rock") {
			youLose();
		} else {
			youWin();
		}
	}
} else {
	alert("Choose either rock, paper, or scissors.");
	return false;
}
