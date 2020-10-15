//declare our variables
var scores, roundScore, activePlayer, dice,player1Panel,player2Panel, player1CurrentScore,player2CurrentScore, player1GlobalScore,playe21GlobalScore, diceRoll, diceImg;
diceImg = document.querySelector(".dice");
scores = [0,0];//global score array  for both players
roundScore = 0;// round score for each player
activePlayer = [0,1];
player1CurrentScore = document.querySelector("#current-" + activePlayer[0]);
player2CurrentScore = document.querySelector("#current-" + activePlayer[1]);
player1GlobalScore = document.querySelector("#score-" + activePlayer[0]);
player2GlobalScore = document.querySelector("#score-" + activePlayer[1]);
player1Panel = document.querySelector(".player-0-panel");
player2Panel = document.querySelector(".player-1-panel");
diceRoll = document.querySelector(".btn-roll");

function gameInit(){
	diceImg.style.display = "none";
	player1CurrentScore.innerHTML = 0;
	player2CurrentScore.innerHTML = 0;
	player1GlobalScore.innerHTML = 0;
	player2GlobalScore.innerHTML = 0;
}

gameInit();





diceRoll.addEventListener("click", function(){
	dice = Math.floor(Math.random()*6) + 1;// random number for dice roll
	//change the value of player's round score
	player1CurrentScore.innerHTML = dice;
	if(player1CurrentScore.innerHTML === "1"){//if you use ===, use "1", else if you use ==, use 1
		player1Panel.classList.remove("active");
		player2Panel.classList.add("active");
	}
	diceImg.style.display = "block";
	diceImg.src = "dice-" + dice + ".jpg";
})

