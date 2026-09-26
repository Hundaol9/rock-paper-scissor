const fiveroundsbutton=document.getElementById("five-rounds");
const sevenroundsbutton=document.getElementById("seven-rounds");
const currentround=document.getElementById("current-round");

let totalround=5;


fiveroundsbutton.addEventListener("click",function(){
    totalround = 5;
    currentround.textContent="0/"+ totalround;
    console.log("5 rounds selected");

});

sevenroundsbutton.addEventListener("click",function(){
    totalround=7;
    currentround.textContent="0/"+ totalround;
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
const playerScore =document.getElementById("player-score");
const computerScore =document.getElementById("computer-score");



let playerChoice;
let computerChoice;


let playerscore =0
let computerscore =0


function chooseComputerChoice(){
 computerChoice= choices[Math.floor(Math.random()*choices.length)];

}



rockbutton.addEventListener("click",function(){
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
}




