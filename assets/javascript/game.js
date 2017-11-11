
//words
var arrWordList = ["christmas", "thanksgiving", "valentine", "easter"]; 


var GuessesCount = 10;
var guessCount = 0;
var correctCount = 0;
var lossCounter = 0;
var winCounter = 0;
var gameWord = generateRandomWord();
var guesses = [];
var message = "";


function resetHM() {
    generateRandomWord();
    GuessesCount = 10;
    guessCount = 0;
    correctCount = 0;
    guesses = [];


}


//choosing a random word
function generateRandomWord(){
    message = "PRESS ANY KEY TO GET STARTED!"
    document.getElementById("message").innerHTML = message;
    var randomWordIndex = Math.floor((Math.random() * arrWordList.length));
    var randomWord = document.getElementById("gameWordDisplay");
    randomWord.innerHTML = arrWordList[randomWordIndex];
    return arrWordList[randomWordIndex];
}

//function to replace word with underscore
function updateDisplay(gameWord, guesses){
    var word = gameWord;
    var arr = word.split('');
    var displayWord = "";
    //reset count
    for (var i = 0; i < arr.length; i++) {
        arr[i];
        var found = false;
        for(var j = 0; j < guesses.length; j++){
            if(guesses[j] === arr[i]){
                found = true;
            }
        }
        if(found === false){
            displayWord += "_ ";
        }
        else{
            displayWord += arr[i];
        }

    }

    document.getElementById("gameWordDisplay").innerHTML = displayWord;

}






updateDisplay(gameWord, guesses, GuessesCount);






//receiving a letter from the user
document.onkeyup = function(event){
    var key = event.key.toLowerCase();

    var guessNew = true;

    for(var i = 0; i < guesses.length; i++) {
        if(key === guesses[i]) {
            //letter has already been entered.  nothing happens.
            guessNew = false;
        }
    }
    
    //guessed letter is not found withing the word and is added to the guesses array
    if(guessNew && gameWord.indexOf(key) === -1){
        guesses.push(key);
        GuessesCount--;
    }
    else if(guessNew){
        guesses.push(key);
        correctCount++;
    }
    if ((guessCount - GuessesCount.length) == gameWord.length) {
        winCounter++;
        alert("YOU WIN!");
        resetHM();
    }
  	if (GuessesCount < 1){
  		alert("YOU LOSE! PRESS OK TO TRY AGAIN");
        resetHM();
        lossCounter++;

  	}
    
    guessCount++;

   
    updateDisplay(gameWord, guesses, GuessesCount);
    document.getElementById("remainingGuesses").innerHTML = GuessesCount;
    document.getElementById("lettersGuessed").innerHTML = guesses;
    document.getElementById("lossCounter").innerHTML = lossCounter;
    
};





