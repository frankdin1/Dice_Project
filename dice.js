//declare our variables
var scores, roundScore, activePlayer, dice, currentPlayerScore diceRoll;

currentPlayerScore = document.querySelector("#score-0")
diceRoll = document.querySelector(".btn-roll")

scores = [0,0];//global score array  for both players
roundScore = 0;// round score for each player

dice = Math.floor(Math.random()*6) + 1;// random number for dice roll
currentPlayerScore.innerHTML = dice;
console.log(dice);