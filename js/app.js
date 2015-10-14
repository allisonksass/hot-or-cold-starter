
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



//generating secret number between 1 and 100
function numGenerator() {
	secretNumber = Math.floor((Math.random() * 100) + 1);
	console.log(secretNumber);
};

//Running the secret number generator
numGenerator();

//Increasing guess count
function increaseGuessCount() {
		$('#count').html(parseInt($('#count').html(), 10) + 1);
	}


//User enters guess into box

$("#guessButton").on ('click', function(event) {

//Adding user guess to list
event.preventDefault();
var inputGuess= $("#userGuess").val ();
$("#guessList").append('<li>'+inputGuess+'</li>');
$("#userGuess").val('');

//Comparing user guess to the secret number and determining which #feedback to show

var distanceFromNum = Math.abs(inputGuess - secretNumber);

	//hot
        if (distanceFromNum == 0) {
            $("#feedback").text("Woohoo! You got it!");
			$("#userGuess").attr("disabled",true);
        } else if (distanceFromNum <= 5) {
            $("#feedback").text("Getting hot!");
        }
        //warm
        else if (distanceFromNum <= 15) {
             $("#feedback").text("Getting warmer.....");
        }
        //cold
        else if (distanceFromNum <= 30) {
        	$("#feedback").text("Brrr! It's cold in here!");
        }
        else  {
        	$("#feedback").text("You're basically an ice cube.");
        }
//Running guess count function every click
increaseGuessCount();

});




});


