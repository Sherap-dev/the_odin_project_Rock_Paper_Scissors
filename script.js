let humanScore = 0;
let computerScore = 0;


function randomMove(){
    let computerMove = ''
    const randomNumber = Math.floor(Math.random()*3);
    if ( randomNumber === 0){
        computerMove = 'rock';
        return(computerMove);
    }else if (randomNumber === 1){
        computerMove = 'paper';
        return computerMove;
    }else if (randomNumber === 2){
        computerMove = 'scissors';
        return computerMove;
    }
}


function playerMove(move){
    move = move.toLowerCase()
    if (move === 'rock' || move === 'paper' || move === 'scissors'){
        console.log(`you chose ${move}`)
        return move ;
    } else {
        console.log('please enter a valid move');
        return null;
    }
}

function playRound(player , computer){
    console.log(`computer chose ${computer}`)

    if(computer === 'rock' && player === 'scissors' || 
    computer === 'paper' && player === 'rock' ||
    computer === 'scissors' && player === 'paper'){
        console.log('you lost')
        computerScore ++
    }else if (computer === player){
        console.log ('its a tie')
    }
    else {
        console.log('you win');
        humanScore ++

    } 

    console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
}




function playGame(){
    for (i =1; i<=5; i++){
        console.log(`round ${i}`)


    const player = playerMove(prompt('choose'))
    if(player){
        const computer = randomMove();
        playRound(player,computer);
    }
    }

    if (humanScore > computerScore){
        console.log('you won the game');
    }else if (humanScore < computerScore){
        console.log('you lost the game')
    }else console.log('the game was a tie')
}

playGame()













