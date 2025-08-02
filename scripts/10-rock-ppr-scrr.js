let score = JSON.parse(localStorage.getItem('score'))|| {
    wins: 0,
    losses: 0, 
    ties:0,
};


updateScoreElement();
function playGame(playerMove){
    let result = ''
    let computerMove = pickCompMove();
    if (playerMove === computerMove){
        score.ties += 1;
        result = 'Tie';
        console.log(score);
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors')||
        (playerMove === 'scissors' && computerMove === 'paper')||
        (playerMove === 'paper' && computerMove === 'rock')
    ){
        score.wins += 1;
        result = 'You win.';
        console.log(score)

    }else{
        score.losses +=1;
        result = 'You lose.';
        console.log(score)
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result')
    .innerHTML = result; 

    document.querySelector('.js-moves')
    .innerHTML = `You <img src="images/${playerMove}-emoji.png"
    class="game-icons">
    <img src="images/${computerMove}-emoji.png"
    class="game-icons">
    Computerm` ; 
}

function pickCompMove(){
    let computerMove = '';
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
    computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
    computerMove = 'paper';
    } else {
    computerMove = 'scissors';
    }

    return computerMove;
}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}