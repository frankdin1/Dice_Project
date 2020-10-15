//declare our variables
var scores, roundScore, activePlayer, dice, player1CurrentScore,player2CurrentScore, player1GlobalScore,playe21GlobalScore, diceRoll, diceImg;
diceImg = document.querySelector(".dice");
scores = [0,0];//global score array  for both players
roundScore = 0;// round score for each player
activePlayer = [0,1];
player1CurrentScore = document.querySelector("#current-" + activePlayer[0]);
player2CurrentScore = document.querySelector("#current-" + activePlayer[1]);
player1GlobalScore = document.querySelector("#score-" + activePlayer[0]);
player2GlobalScore = document.querySelector("#score-" + activePlayer[1]);


function gameInit(){
	diceImg.style.display = "none";
	player1CurrentScore.innerHTML = 0;
	player2CurrentScore.innerHTML = 0;
	player1GlobalScore.innerHTML = 0;
	player2GlobalScore.innerHTML = 0;
}

gameInit();
diceRoll = document.querySelector(".btn-roll")




// diceRoll.addEventListener("click", function(){
// 	dice = Math.floor(Math.random()*6) + 1;// random number for dice roll
// 	;//change the value of player's round score
// 	diceImg.style.display = "block";
// 	diceImg.src = "dice-" + dice + ".jpg";
// 	console.log(dice)
// })

