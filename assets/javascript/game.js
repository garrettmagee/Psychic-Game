var wins = 0;
var losses = 0;
var guessString = '';
var guessesLeft = 10;
var secretLetter = '';

$(document).ready(randomLetter());


function handler(e){
		
    var keyPressed = String.fromCharCode(e.which);
    guessString += keyPressed + ', ';
	guessesLeft -= 1;

	if(guessesLeft == 0){
		losses +=1;
		guessesLeft = 10;
	}
	
	if(keyPressed == secretLetter){
	wins += 1;
	guessesLeft=10;
	randomLetter();
	guessString = "";
	}
	
   
   document.getElementById("wins").innerHTML = wins;
   document.getElementById("losses").innerHTML = losses;
   document.getElementById("guessesLeft").innerHTML = guessesLeft;
   document.getElementById("guessed").innerHTML = guessString;

};

function randomLetter(){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(secretLetter);

}


$('#whichkey').on("keypress", function(e){
        handler(e);
});
