//declare our variables
var winningScore, maxScore, globalScore, activePlayerArr, holdBtn, reset, maxScoreInput, 
player1Panel, player2Panel, player1CurrentScore, player2CurrentScore, endGame,
player1GlobalScore, playe21GlobalScore, diceRoll, diceImg, player1Active, maxScoreDisplay;

diceImg = document.querySelector(".dice");
player1CurrentScore = document.querySelector("#current-0");
player2CurrentScore = document.querySelector("#current-1");
player1GlobalScore = document.querySelector("#score-0");
player2GlobalScore = document.querySelector("#score-1");
player1Panel = document.querySelector(".player-0-panel");
player2Panel = document.querySelector(".player-1-panel");
diceRoll = document.querySelector(".btn-roll");
holdBtn = document.querySelector(".btn-hold");
maxScoreBtn = document.querySelector("#maxScore");
reset = document.querySelector(".btn-new");
maxScoreDisplay = document.querySelector("#maxScoreDisplay");
globalScore = [0,0];
maxScore;
endGame = false;
gameInit();

function active(num){
		activePlayer = num;
		document.querySelector("#current-" + activePlayer).innerHTML = dice;
		switchPlayer();
}

function switchPlayer(){
	if (dice === 1){
	player1Active = !player1Active;
	console.log(player1Active);
	player1Panel.classList.toggle("active");
	player2Panel.classList.toggle("active");
	document.querySelector("#current-" + activePlayer).innerHTML = "0";
	}
	
}

function gameInit(){
	diceImg.style.display = "none";
	player1CurrentScore.innerHTML = 0;
	player2CurrentScore.innerHTML = 0;
	player1GlobalScore.innerHTML = 0;
	player2GlobalScore.innerHTML = 0;
	player1Active = true;
	document.querySelector("#name-0").innerHTML = "PLAYER 1";
	document.querySelector("#name-1").innerHTML = "PLAYER 2";
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.add("active");
	endGame = false;
	globalScore = [0,0];
}

function hold(num){
	if (endGame === false){
		activePlayer = num;
		globalScore[num] += parseInt(document.querySelector("#current-" + activePlayer).innerHTML);
		document.querySelector("#score-" + activePlayer).innerHTML = globalScore[num];
		document.querySelector("#current-" + activePlayer).innerHTML = "0";
	}
	
}

reset.addEventListener("click", gameInit);

maxScoreBtn.addEventListener("click", function(){
	maxScore = Number(prompt("Enter your desired max score (Default is 100)"))
	maxScoreDisplay.innerHTML = maxScore;
})

diceRoll.addEventListener("click", function(){
	if (endGame === false){
		dice = Math.floor(Math.random()*6) + 1;// random number for dice roll
		if (player1Active === true){
			active(0);
		}
		else{
			active(1);
		}
	diceImg.style.display = "block";
	diceImg.src = "dice-" + dice + ".jpg";
	}
})

function winner(num){
	activePlayer = num;
	if(globalScore[num] >= maxScore){
	endGame = true;
	console.log(endGame);
	document.querySelector("#name" + "-" + activePlayer).innerHTML = "WINNER";
	document.querySelector(".player" + "-" + activePlayer + "-panel").classList.add("winner");
	document.querySelector(".player" + "-" + activePlayer + "-panel").classList.remove("active");
	diceImg.style.display = "none";
	}
	return endGame;
}

holdBtn.addEventListener("click", function(){
	if(endGame === false){
		if(player1Active === true){
		hold(0);
		endGame = winner(0);
		}
		else{
			hold(1);
			endGame = winner(1)
		}
	}
	// console.log(endGame)
	
})