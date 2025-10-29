
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
    } else console.log('please enter a valid move')
}

function playRound(player , computer){
    console.log(`computer chose ${computer}`)

    if(computer === 'rock' && player === 'scissors' || 
    computer === 'paper' && player === 'rock' ||
    computer === 'scissors' && player === 'paper'){
        console.log('you lost')
    }else if (computer === player){
        console.log ('its a tie')
    }
    else console.log('you win')

}

const player = playerMove(prompt('choose'))
const computer = randomMove()

playRound(player,computer)






