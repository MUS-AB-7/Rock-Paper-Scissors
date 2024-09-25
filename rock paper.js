let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice= ()=>{
    const option= ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame= ()=>{
    // console.log("game was drawn");
    // msg.innerText= "GAME WAS DRAW. Try Again";
    msg.style.backgroundColor= "#081b31";
}


const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin) {
        // console.log("YOU WIN");
        userScore++;
        userScorePara.innerText= userScore;

        msg.innerText = ` YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        // console.log("YOU LOSE");
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText = `YOU LOSE. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}
const playGame= (userChoice)=>{
    // console.log("User choice =", userChoice);
    //Generate computer Choice
    const compChoice = genCompChoice();
    // console.log("comp-choice = ", compChoice);   

    if(userChoice === compChoice) {
        //Dram game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice ==="rock") {
            //scissor, paper
            userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper') {
            //rock, scissors
            userWin = compChoice === 'scissors' ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})