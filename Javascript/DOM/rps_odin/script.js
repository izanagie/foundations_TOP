const head1 = document.querySelector('#head1')
const head3 = document.querySelector('h3')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const sign1 = document.querySelector('.sign1')
const sign2 = document.querySelector('.sign2')
const playerScore1 = document.querySelector('#score1')
const playerScore2 = document.querySelector('#score2')
// ///////////////////////////////////////////////////////
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

let randomMove = ()=>{
    let move = Math.ceil(Math.random()*3)
    if(move == 1){
        move = 'ROCK'
    }else if(move ==2){
        move = 'PAPER'
    }else{
        move = 'SCISSORS'
    }
    return move;    
}

let playerScore = 0;
let computerScore = 0;

let computerSelection = ()=>{
    let comp = randomMove()
    if(comp === 'ROCK'){
        sign2.textContent = '✊'
    }else if(comp === 'PAPER'){
        sign2.textContent = '✋'
    }else{
        sign2.textContent = '✌'
    }
    return comp;
}

let playRound = ()=>{
    let playerMove = ''
    rock.addEventListener('click', ()=>{
        playerMove = 'ROCK'
        sign1.textContent ='✊'
        let computerMove = computerSelection()
        resCondition(playerMove,computerMove)
    })
    paper.addEventListener('click', ()=>{
        playerMove = 'PAPER'
        sign1.textContent = '✋'
        let computerMove = computerSelection()
        resCondition(playerMove,computerMove)
    })
    scissors.addEventListener('click',()=>{
        playerMove = 'SCISSORS'
        sign1.textContent = '✌'
        let computerMove = computerSelection()
        resCondition(playerMove,computerMove)
    })
    // console.log(playerScore)
}
playRound()
overlay.addEventListener('click', closeEndgameModal)
restartBtn.addEventListener('click', restartGame)

function restartGame() {
    playerScore = 0
    computerScore = 0
    head1.textContent = 'Choose your sign'
    head3.textContent = 'First to score 5 points wins the game'
    playerScore1.textContent = '0'
    playerScore2.textContent = '0'
    sign1.textContent = '❔'
    sign2.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}

let resCondition = (player,comp)=>{
    if(player === comp){
        head1.textContent = 'Its a TIE'
        head3.textContent = 'Nobody beats Nobody'
    }
    if((player === 'ROCK' && comp === 'SCISSORS') || 
    (player === 'SCISSORS' && comp === 'PAPER') || 
    (player === 'PAPER' && comp === 'ROCK')){
        playerScore++
        head1.textContent = 'You Win'
        head3.textContent = `${player} beats ${comp}`
        playerScore1.textContent = playerScore
    }
    if((comp === 'ROCK' && player === 'SCISSORS') || 
    (comp === 'SCISSORS' && player === 'PAPER') || 
    (comp === 'PAPER' && player === 'ROCK')){
        computerScore++
        head1.textContent = 'Computer Wins'
        head3.textContent = `${comp} beats ${player}`
        playerScore2.textContent = computerScore
    }
    gameResult(playerScore,computerScore)

}

let gameResult = (player,comp)=>{
    if(player === 5){
        endgameMsg.textContent = 'You won!'
        }else if(comp === 5){
            endgameMsg.textContent = 'You lost!'
        }else{
            return
        }
        openEndgameModal()
        playerScore = 0
        computerScore = 0
        playerScore1.textContent = '0'
        playerScore2.textContent = '0'
    }
    
function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }

function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

let gameEng2 = ()=>{
    for(let i=1; i<=5; i++){
        testEngine()
    }
}
