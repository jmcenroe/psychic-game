var letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;

    // Randomly chooses a letter for the Computer's guess 
    var computerChoice = letterList[Math.floor(
        Math.random() * letterList.length)];

    console.log(computerChoice);


    // Run when user presses key 
    $(document).on('keyup', function() {
        var userGuess = event.key;

        if (userGuess === computerChoice) {
            wins++;
        } 

        else {
            guessesLeft--;
        }
        if (guessesLeft === 0) {
            losses++;
        }

        var userGuess = $('.let-guessed');

        $(".let-guessed").html();

            var newDiv = $('<div>');
            newDiv.html(event.key);
            userGuess.append(newDiv);
        })
    })
;