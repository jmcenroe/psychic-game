// var letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// $(document).ready(function() {

//     var wins = 0;
//     var losses = 0;
//     var guessesLeft = 10;

//     // Randomly chooses a letter for the Computer's guess 
//     var computerChoice = letterList[Math.floor(
//         Math.random() * letterList.length)];

//     console.log(computerChoice);


//     // Run when user presses key, set the letter computer picks
//     $(document).on('keyup', function() {
//         var userGuess = event.key;

//         if (guessesLeft = 9) {
//             var computerChoice = computerChoice;
//         }

//         var userGuess = $('.let-guessed');

//         // $(".wins").html();

//         //     var newDiv1 = $('')

//         $(".let-guessed").html();

//             var newDiv = $('<div>');
//             newDiv.html(event.key);
//             userGuess.append(newDiv);

//             newDiv.attr("class", "fancy");
//         })
//     })
// ;

// Sets the computer choices to whole alphabet 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Declares the tallies to 0  
var wins = 0;
var losses = 0;
var guessCount = 9;
var letterGuessed = [];
var setCompPick = ""; 

    // When the user presses a key, it records the keypress and then sets it to userguess 
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        // Sets the letter the computer picks at the beginning of the game
        if (guessCount == 9) {
            var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            setCompPick = computerPick;
        }

        console.log(computerPick);

        // If the key user chooses is not in guessTally array, run game
        var userCheck = letterGuessed.indexOf(userGuess);
        if (userCheck < 0) {

            // Compares letter user guesses to letter computer picks
            if (userGuess == setCompPick) {
                // if it matches, user wins, reset game
                wins++;
                guessCount = 9;
                letterGuessed = [];
                alert('You win. Woodhouse! Again!')
            } else {
                // add user pick to user array guessTally and reduce guessCount
                letterGuessed.push(userGuess);
                guessCount--;
            }

        }
        // check if guessCount = 0, add as a loss, and reset game
        if (guessCount == 0) {
            losses++;
            guessCount = 9;
            letterGuessed = [];
            alert('You lose...Try again')
        }

        // Taking the tallies and displaying them in HTML
        var html = "<h2>Guess what letter I'm thinking of</h2>" +
            "<h2>Wins: " + wins + "</h2>" +
            "<h2>Losses: " + losses + "</h2>" +
            "<h2>Guesses Left: " + guessCount + "</h2>" +
            "<h2>Your Guesses so far: " + letterGuessed + "</h2>";

        // Inserting the html into the game ID
        document.querySelector('#game').innerHTML = html;
    }

