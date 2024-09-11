let count1 =0;
let count2 =0;
function playGame(playerChoice) {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNumber];
    
    let resultmsg;

    if (playerChoice === computerChoice) {
        resultmsg = `It's a Tie!`;
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissor') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        resultmsg = 'You Won!';
        count1++;
resultScore1=count1;
    } else {
        resultmsg = 'Computer Won!';
        count2++;
        rresultScore2=count2;
    }
    document.getElementById('resultMessage').innerText = ` ${resultmsg} \n\n You chose ${playerChoice}\n\n Computer chose ${computerChoice}`;
    document.getElementById('resultMessage1').innerText = `Choose Again `;

// alert(`your score is ${count1} and computer score is ${count2}`);
document.getElementById('resultScore1').innerText = `Your score : ${count1} ` ;
document.getElementById('resultScore2').innerText = `Computer score : ${count2} `;
}

