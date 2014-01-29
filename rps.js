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
