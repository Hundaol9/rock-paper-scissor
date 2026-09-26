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
const scissorsbutton = document.getElementById("scissors");
const choices = ["rock", "paper", "scissors"];

const rockhand=document.getElementById("rock-hand");
const paperhand=document.getElementById("paper-hand");
const scissorhand=document.getElementById("scissor-hand");

const rockcomputer=document.getElementById("rock-computer");
const papercomputer=document.getElementById("paper-computer");
const scissorcomputer=document.getElementById("scissor-computer");


let playerChoice;
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

console.log(computerChoice);

rockbutton.addEventListener("click",function(){
    playerChoice = "rock";

    rockhand.style.display="block"
    paperhand.style.display="none"
    scissorhand.style.display="none"

    

    console.log("Rock selected");
})

paperbutton.addEventListener("click",function(){
    playerChoice = "paper";

    rockhand.style.display="none"
    paperhand.style.display="block"
    scissorhand.style.display="none"

    console.log("paper selected");
})

scissorsbutton.addEventListener("click",function(){
     playerChoice = "scissors";

    rockhand.style.display="none"
    paperhand.style.display="none"
    scissorhand.style.display="block"
    console.log("scissors selected");
})



function showcomputerChoice(){
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


rockbutton.addEventListener("click",function(){

})


