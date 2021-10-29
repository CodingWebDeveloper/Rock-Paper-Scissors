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
    draw.style.display = "none";
    currentUserPoints = 0;
    currentComputerPoints = 0;
    computerPoints.innerText = currentComputerPoints;
    userPoints.innerText = currentUserPoints;
    userCompeter.style.display = "none";
    computerCompeter .style.display ="none";
    removeModalBoxOption();
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
    draw.style.display = "none";
    var pickedOption = this.id;

    if(checkWinner()){
        return;
    }
    if(pickedOption == randomOption()){
        draw.style.display ="block";
    }else if(pickedOption == "rock"){
        currentUserPoints += 1;
     }
     else{
            currentComputerPoints +=1;
     }

     computerPoints.innerText = currentComputerPoints;
     userPoints.innerText = currentUserPoints;
});

paper.addEventListener("click",function(){
    draw.style.display ="none";
    pickedOption = this.id;
    if(checkWinner())
    {
        return;
    }
    
    if(pickedOption == randomOption()){
        draw.style.display ="block";
    } else if(pickedOption == "scissors"){
        currentUserPoints +=1;
    } else{
        currentComputerPoints +=1;
    }

    computerPoints.innerText = currentComputerPoints;
    userPoints.innerText = currentUserPoints;

});

rock.addEventListener("click", function(){

    var pickedOption = this.id;
    draw.style.display = "none";

    if(checkWinner()){
        return;
    }

    if(pickedOption == randomOption()){
        draw.style.display ="block";
    }else  if(pickedOption == "scissors"){
        currentComputerPoints +=1; 
    } else{
        currentUserPoints +=1;
    }

    computerPoints.innerText = currentComputerPoints;
    userPoints.innerText = currentUserPoints;
})

function checkWinner(){
    if(currentUserPoints ==5 ){
        userCompeter.style.display = "block";
        addModalBoxOption();
        return true;

    }else if(currentComputerPoints == 5){
        computerCompeter.style.display = "block";
        addModalBoxOption();
        return true;
    }

    return false;
}

function addModalBoxOption(boxOption){
    var boxOptions = document.getElementsByClassName("box-option");
    for(var i = 0; i<boxOptions.length; i++){
        boxOptions[i].setAttribute("data-bs-toggle","modal");
        boxOptions[i].setAttribute("data-bs-target","#staticBackdrop");
    }
}

function removeModalBoxOption(boxOption){
    var boxOptions = document.getElementsByClassName("box-option");
    for(var i = 0; i<boxOptions.length; i++){
        if(boxOptions[i].getAttribute("data-bs-toggle") != null){
            boxOptions[i].removeAttribute("data-bs-toggle");
            boxOptions[i].removeAttribute("data-bs-target");
        }
    }
}
