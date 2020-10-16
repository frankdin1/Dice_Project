//declare our variables
var scores, maxScore, roundScore, globalScore, globalScore1,globalScore2, activePlayerArr, activePlayer,holdBtn, dice,player1Panel,player2Panel, player1CurrentScore,player2CurrentScore, player1GlobalScore,playe21GlobalScore, diceRoll, diceImg;
diceImg = document.querySelector(".dice");
scores = [0,0];//global score array  for both players
roundScore = 0;// round score for each player
activePlayerArr = [0,1]
player1CurrentScore = document.querySelector("#current-" + activePlayerArr[0]);
player2CurrentScore = document.querySelector("#current-" + activePlayerArr[1]);
player1GlobalScore = document.querySelector("#score-" + activePlayerArr[0]);
player2GlobalScore = document.querySelector("#score-" + activePlayerArr[1]);
player1Panel = document.querySelector(".player-0-panel");
player2Panel = document.querySelector(".player-1-panel");
diceRoll = document.querySelector(".btn-roll");
holdBtn = document.querySelector(".btn-hold");
var player1Name = document.querySelector(".name-0");
var player2Name = document.querySelector(".name-1");
var player1Active;
globalScore = {globalScore1: 0, globalScore2: 0};
globalScore1 = 0
globalScore2 = 0;
maxScore = 100;

function active(num){
	activePlayer = num;
	document.querySelector("#current-" + activePlayer).innerHTML = dice;
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
	activePlayer = 0;
}

function hold(num){
	activePlayer = num;
		if(activePlayer === 0){
			globalScore1 += parseInt(document.querySelector("#current-" + activePlayer).innerHTML);
			document.querySelector("#score-" + activePlayer).innerHTML = globalScore1;
		}
		else{
			globalScore2 += parseInt(document.querySelector("#current-" + activePlayer).innerHTML);
			document.querySelector("#score-" + activePlayer).innerHTML = globalScore2;
		}
	document.querySelector("#current-" + activePlayer).innerHTML = "0";
}

gameInit();

diceRoll.addEventListener("click", function(){
	dice = Math.floor(Math.random()*6) + 1;// random number for dice roll
	if (player1Active === true){
		active(0);
	}
	else{
		active(1);
	}

	diceImg.style.display = "block";
	diceImg.src = "dice-" + dice + ".jpg";
})

function max(score1,score2){
	if(score1 >= maxScore){
		player1Name.classList.add("winner");
	}
	else if(score2 >= maxScore){
		player2Name.classList.add("winner")
	}
}

holdBtn.addEventListener("click", function(){

	if(player1Active === true){
		hold(0);
	}
	else{
		hold(1);
	}
})

// function winner(win){
// 	if (win = ){
// 		alert("winner")
// 		player1Name.classList.add("winner")
// 	}
// 	else if (globalScore2 >= 20){
// 		alert("winner")
// 		player2Name.classList.add("winner")
// 	}
// }