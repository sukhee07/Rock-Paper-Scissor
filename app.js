let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const getCompChoice = () => {
    const compChoices = ["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    return compChoices[random];
};

const getResult = (userChoice, compChoice) => {
    if(userChoice === compChoice){
        return "draw";
    }
    else if(userChoice === "rock" && compChoice === "scissors" || userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper"){
        return "win";
    }
    else{
        return "lose";
    }
};


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const compChoice = getCompChoice();
        const result = getResult(userChoice, compChoice);
        updateScore(result);
        displayResult(result, userChoice, compChoice);
    });
});

const updateScore = (result) => {
    if(result === "win"){
        userScore++;
    }
    else if(result === "lose"){
        compScore++;
    }
    document.querySelector('#user-score').innerText = userScore;
    document.querySelector('#comp-score').innerText = compScore;
};

const displayResult = (result, userChoice, compChoice) => {
    if(result === "draw"){
        msg.innerText = `It's a draw. Both chose ${userChoice}.`;
    }
    else if(result === "win"){
        msg.innerText = `You win! ${userChoice} beats ${compChoice}.`;
    }
    else{
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}.`;
    }
};
