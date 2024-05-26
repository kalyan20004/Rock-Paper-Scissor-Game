let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const Uscore = document.querySelector("#your-score");
const Cscore = document.querySelector("#comp-score");
const resetBtn = document.querySelector(".resetbtn");
const select = document.querySelector("#selected");

const genComCh = () => {
    const options = ["rock", "paper", "scissors"];
    const ran_Ind = Math.floor(Math.random() * 3);
    return options[ran_Ind];
}

const who_is_Winner = (userWin, userchoice, comchoice) => {
    select.innerText = "your choice: "+ userchoice + " and comp choice: "+ comchoice;
    if (userWin) {
        userScore++;
        Uscore.innerText = userScore;
        console.log("YOU WIN");
        msg.innerText = "YOU WON! " + userchoice + " beats " + comchoice;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        Cscore.innerText = compScore;
        console.log("YOU LOSE");
        msg.innerText = "YOU LOSE! " + comchoice + " beats " + userchoice;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const comchoice = genComCh();
    console.log("computer choice = ", comchoice);

    if (userchoice === comchoice) {
        select.innerText = "your choice: "+ userchoice + " and comp choice: "+ comchoice;
        console.log("IT'S A TIE!");
        msg.innerText = "IT'S A TIE. PLAY AGAIN";
        msg.style.backgroundColor = "orange";
    } else {
        let userWin;
        if ((userchoice === "rock" && comchoice === "scissors") || 
            (userchoice === "scissors" && comchoice === "paper") || 
            (userchoice === "paper" && comchoice === "rock")) {
            userWin = true;
        } else {
            userWin = false;
        }
        who_is_Winner(userWin, userchoice, comchoice); 
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playGame(userchoice);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    Uscore.innerText = userScore;
    Cscore.innerText = compScore;
    msg.innerText = "Make your move!";
    msg.style.backgroundColor = "yellow";
    console.log("Game reset!");
});
