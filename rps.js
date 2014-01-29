// Rock Paper Scissors

// Initialize variables
var userChoice = null;
var compChoice = null;

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

if ( userChoice == "rock" || userChoice == "paper" || userChoice == "scissors" ) {
	if (userChoice == compChoice) {
		alert("Tie!");
		return true;
	}
	else if (userChoice == "rock") {
		if (compChoice == "paper") {
			alert("You lose!");
			return true;
		} else {
			alert("You win!");
			return true;
		}
	} else if (userChoice == "paper") {
		if (compChoice == "rock") {
			alert("You win!");
			return true;
		} else {
			alert("You lose!");
			return true;
		}
	} else { // user chose scissors
		if (compChoice == "rock") {
			alert("You lose!");
			return true;
		} else {
			alert("You win!");
			return true;
		}
	}
} else {
	alert("Choose either rock, paper, or scissors.");
	return false;
}
