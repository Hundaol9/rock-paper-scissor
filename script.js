const fiveroundsbutton=document.getElementById("five-rounds");
const sevenroundsbutton=document.getElementById("seven-rounds");
const presentRound = document.getElementById("present-round");


let totalRound = 5;
let currentRound = 0;

fiveroundsbutton.addEventListener("click",function(){

    totalRound = 5;
    currentRound=0;

    presentRound.textContent="0/"+ totalRound;
    console.log("5 rounds selected");

});

sevenroundsbutton.addEventListener("click",function(){
    totalRound=7;
    currentRound=0;

    presentRound.textContent="0/"+ totalRound;
    console.log("7 rounds selected");

});


const rockbutton = document.getElementById("rock");
const paperbutton = document.getElementById("paper");
const scissorsbutton = document.getElementById("scissor");
const choices = ["rock", "paper", "scissors"];

const rockhand=document.getElementById("rock-hand");
const paperhand=document.getElementById("paper-hand");
const scissorhand=document.getElementById("scissor-hand");

const rockcomputer=document.getElementById("rock-computer");
const papercomputer=document.getElementById("paper-computer");
const scissorcomputer=document.getElementById("scissor-computer");

const gameresult =document.getElementById("game-result");

const playerscore = document.getElementById("player-score");
const computerscore = document.getElementById("computer-score");

const restartbutton =document.getElementById("restart");




let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;



function chooseComputerChoice(){
 computerChoice= choices[Math.floor(Math.random()*choices.length)];

}

rockbutton.addEventListener("click",function(){
     if (currentRound >= totalRound){
        gameresult.textContent ="Game Over";
        return
    }
    playerChoice = "rock";

    chooseComputerChoice();
    checkWinner();


    rockhand.style.display="block"
    paperhand.style.display="none"
    scissorhand.style.display="none"

    showComputerChoice();

   

    console.log("Rock selected");
})

paperbutton.addEventListener("click",function(){
      if (currentRound >= totalRound){
           gameresult.textContent ="Game Over";
        return
    }
    playerChoice = "paper";

    chooseComputerChoice();
    checkWinner();
    rockhand.style.display="none"
    paperhand.style.display="block"
    scissorhand.style.display="none"

    showComputerChoice();

    console.log("paper selected");
})

scissorsbutton.addEventListener("click",function(){
      if (currentRound >= totalRound){
           gameresult.textContent ="Game Over";
        return
    }
    playerChoice = "scissors";

    chooseComputerChoice();
    checkWinner();
    rockhand.style.display="none"
    paperhand.style.display="none"
    scissorhand.style.display="block"

    showComputerChoice();
    console.log("scissors selected");
})



function showComputerChoice(){
    rockcomputer.style.display="none"
    papercomputer.style.display="none"
    scissorcomputer.style.display="none"

    if (computerChoice === "rock") {
           rockcomputer.style.display="block";
    }

    if (computerChoice === "paper") {
        papercomputer.style.display="block";
    }

    if (computerChoice === "scissors") {
        scissorcomputer.style.display="block";
    }

}



function checkWinner(){
    if(playerChoice=== computerChoice){
        gameresult.textContent="Draw";
        
    }

    if(playerChoice==="rock" && computerChoice === "scissors"){
        gameresult.textContent = "You win";
        playerScore = playerScore + 1;
        playerscore.textContent = playerScore;


    }

    if(playerChoice==="paper" && computerChoice === "scissors"){
        gameresult.textContent = "You lose";
        computerScore = computerScore + 1;
        computerscore.textContent = computerScore;
    }

     if(playerChoice==="paper" && computerChoice === "rock"){
       gameresult.textContent = "You win";
       playerScore = playerScore + 1;
       playerscore.textContent = playerScore;
    }

      if(playerChoice==="scissors" && computerChoice === "paper"){
       gameresult.textContent = "You win";
       playerScore = playerScore + 1;
       playerscore.textContent = playerScore;
    }


     if(playerChoice==="rock" && computerChoice === "paper"){
       gameresult.textContent = "You lose";
       computerScore = computerScore + 1;
       computerscore.textContent = computerScore;
    }

     if(playerChoice==="scissors" && computerChoice === "rock"){
        gameresult.textContent = "You lose";
        computerScore = computerScore + 1;
        computerscore.textContent = computerScore;
    }

  
currentRound = currentRound + 1;

presentRound.textContent= currentRound +"/"+ totalRound;

if (currentRound === totalRound){
    checkGameWinner();
}


function checkGameWinner(){
    if (playerScore > computerScore){
        gameresult.textContent ="You Win the Game!";
    }

     if (computerScore > playerScore){
        gameresult.textContent ="Computer Wins the Game!";
    }
      if (computerScore === playerScore){
        gameresult.textContent ="Game Draw!";
    }
}

}

restartbutton.addEventListener("click", function(){

    playerScore = 0;
    computerScore = 0;

    playerscore.textContent = playerScore;
    computerscore.textContent = computerScore;

    currentRound = 0;

    presentRound.textContent = "0 / " + totalRound;

    gameresult.textContent = "Choose your move!";


    rockhand.style.display="block";
    paperhand.style.display="none";
    scissorhand.style.display="none";


    rockcomputer.style.display="block";
    papercomputer.style.display="none";
    scissorcomputer.style.display="none";

});



