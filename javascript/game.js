// var a = 1
// var b = 2
// var c = 3
// var d = 4
// var e = 5
// var f = 6
// var g = 7
// var h = 8
// var i = 9
// var j = 10
// var k = 11
// var l = 12
// var m = 13
// var n = 14
// var o = 15
// var p = 16
// var q = 17
// var r = 18
// var s = 19
// var t = 20
// var u = 21
// var v = 22
// var w = 23
// var x = 24
// var y = 25
// var z = 26

// var letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
// 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
// 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
function to_a(c1 = 'a', c2 = 'z') {
    a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return (a.slice(a.indexOf(c1), a.indexOf(c2) + 1)); 
}

var userGuess
var answer
var wins = document.createElement('wins')
var losses = document.createElement('losses')
var guessesLeft = document.createElement('guesses-left')
var numGuesses = document.createElement('num-guesses')

// Run when user presses key 
document.onkeyup = function(event) {
var userGuess = event.key;

// Randomly chooses a letter for the Computer's guess
var answer = alphabet[Math.floor(
	Math.random() * alphabet.length)];
}

for (i = 0; i < 10; i++) {
		$('#num-guesses').html(userGuess);
		$('#guesses-left').html(i--);
	
	// If User guesses correctly, #wins + 1 and stop the loop  
	// if (userGuess == answer) {
	// $('#')
	// }
}
