//Letters

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" , "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;

var guessedLetters = []

 

var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)]


function updateRemainingGuesses (){
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft
};


function updateMysteryLetter(){
    this.mysteryLetter = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)]
};


function updateGuessesSoFar(){
    document.querySelector ("#history").innerHTML = "Your Guesses So Far " + guessedLetters.join(",");
};



var reset = function(){
    totalguesses = 9;
    guessesLeft = 9;
    guessedLetters = [];


    updateMysteryLetter();
    updateRemainingGuesses();
    updateGuessesSoFar();
}

document.onkeyup = function(event){
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes (playerGuess);

    if (check === true){
        guessesLeft--;
        guessedLetters.push(playerGuess);
        updateRemainingGuesses();
        updateGuessesSoFar();

    if (guessesLeft > 0){
        if (playerGuess == mysteryLetter){
            wins++;
            document.querySelector("#wins").innerHTML = "Wins:" + wins;
            playerGuess = playerGuess.toUpperCase();
            alert("You win! Psychic Dog chose " + playerGuess);
            reset();
        }
    } else if(guessesLeft == 0){
        losses++;
        document.querySelector("#losses").innerHTML = "Losses:" + losses;
        alert("You lost! Psychic Dog isn't impressed ");
        reset();
    }
}};