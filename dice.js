//declare our variables
var scores, roundScore, activePlayer, dice, currentPlayerScore, diceRoll, diceImg;
diceImg = document.querySelector(".dice");

function gameInit(){
	diceImg.style.display = "none";
}

gameInit();
diceRoll = document.querySelector(".btn-roll")

scores = [0,0];//global score array  for both players
roundScore = 0;// round score for each player
activePlayer = 1;
currentPlayerScore = document.querySelector("#current-" + activePlayer);


diceRoll.addEventListener("click", function(){
	dice = Math.floor(Math.random()*6) + 1;// random number for dice roll
	currentPlayerScore.innerHTML = dice;//change the value of player 1's round score
	diceImg.style.display = "block";
	diceImg.src = "dice-" + dice + ".jpg";
	console.log(dice)
})

