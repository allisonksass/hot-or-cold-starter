
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

numGenerator();


//Increasing guess count
function increaseGuessCount() {
		$('#count').html(parseInt($('#count').html(), 10) + 1);
	}





	

//User enters guess into box

$("#guessButton").on ('click', function(event) {

//Adding user's guess to list and clearing input
event.preventDefault();
var inputGuess= parseInt($("#userGuess").val (),10);
var distanceFromNum = Math.abs(inputGuess - secretNumber);


//Making sure user's input is a number
if (inputGuess == "" || inputGuess %1 != 0 || inputGuess < 0 || inputGuess > 100){
		alert("Please enter a number between 1 and 100");

	}

else{

$("#guessList").append('<li>'+inputGuess+'</li>');
$("#userGuess").val('');



//Comparing user guess to the secret number and determining which #feedback to show
	
		//hot
        if (distanceFromNum == 0) {
            $("#feedback").text("Woohoo! You got it!");
			
        } else if (distanceFromNum <= 5) {
            $("#feedback").text("Hot, hot, hot!");
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
}
//Running guess count function every click
increaseGuessCount();

});


//Starting a new game


  $('.new').on('click', function(){
        startNewGame();
    });

  function startNewGame () {
  	 $('#guessList li').remove();
      $("#feedback").text( " Make your Guess!")
      $('#count').html(0);
      numGenerator();

  	}




});


