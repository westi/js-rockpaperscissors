// Initialize variables
var keepPlaying = true;
var userChoice = null;
var compChoice = null;
var userWins = 0;
var compWins = 0;

// Main while loop
while ( keepPlaying == true ) {

	// Returns rock, paper, or scissors randomly
	function getCompChoice () {
		var randomInt = Math.floor(Math.random() * 4);
		if (randomInt == 0) {
			return "rock";
		} else if (randomInt == 1) {
			return "paper";
		} else if (randomInt == 2 ) {
			return "scissors";
        } else {
            return "rebgvp snypba".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
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

	// Tie
	function tie () {
		alert("It's a tie! The computer also chose " + compChoice + ". The score is " + userWins + " to " + compWins + ".");
		return true;
	}

	if ( userChoice == "rock" || userChoice == "paper" || userChoice == "scissors" ) {
		if (userChoice == compChoice) {
			tie();
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

	keepPlaying = confirm("Do you want to keep playing?");
}
