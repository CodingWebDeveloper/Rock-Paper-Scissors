let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let draw = document.getElementById("draw");
let computerPoints = document.getElementById("computer-points");
let userPoints = document.getElementById("user-points");
let currentUserPoints = 0;
let currentComputerPoints = 0;
let userCompeter = document.getElementById("competer-user");
let computerCompeter = document.getElementById("competer-computer");

window.onload = startGame();

function startGame(){
    setTimeout(function(){
        draw.style.display = "none";
        currentUserPoints = 0;
        currentComputerPoints = 0;
        computerPoints.innerText = currentComputerPoints;
        userPoints.innerText = currentUserPoints;
        console.log("Hello world");
        userCompeter.style.display = "none";
        computerCompeter .style.display ="none";
    }, 1000);
};


function randomOption(){
    var compResult = Math.random() + Math.random() + Math.random();
    switch(Math.ceil(compResult)){
        case 1:
            return "scissors";
        case 2:
            return "paper";
        case 3:
            return "rock";
    }
    return  ;
}

scissors.addEventListener("click", function(){
    var pickedOption = this.id;

    if(pickedOption == randomOption()){
        draw.style.display ="block";
        return;
    }

    if(pickedOption == "rock"){
        currentUserPoints +=1;
     }
     else{
            currentComputerPoints +=1;
     }

     computerPoints.innerText = currentComputerPoints;
     userPoints.innerText = currentUserPoints;
     checkWinner();
});

paper.addEventListener("click",function(){
    draw.style.display ="none";
    pickedOption = this.id;
    if(pickedOption == randomOption()){
        draw.style.display ="block";
        return;
    }

    if(pickedOption == "scissors"){
        currentUserPoints +=1;
    } else{
        currentComputerPoints +=1;
    }

    var pickedOption = this.id;
    computerPoints.innerText = currentComputerPoints;
    userPoints.innerText = currentUserPoints;

    checkWinner();
});

rock.addEventListener("click", function(){
    var pickedOption = this.id;
    draw.style.display = "none";

    if(pickedOption == randomOption()){
        draw.style.display ="block";
        return;
    }

    if(pickedOption == "scissors"){
        currentComputerPoints +=1; 
    } else{
        currentUserPoints +=1;
    }

    computerPoints.innerText = currentComputerPoints;
    userPoints.innerText = currentUserPoints;
    checkWinner();
})

function checkWinner(){
    if(currentUserPoints >=5 ){
        userCompeter.style.display = "block";
        console.log("winner computer");
        startGame();
        return;
    }
    
    if(currentComputerPoints >= 5){
        computerCompeter.style.display = "block";
        console.log("winner user");
        startGame();
        return;
    }
}
