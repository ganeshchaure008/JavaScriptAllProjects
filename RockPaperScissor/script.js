let playerScore=0,aiScore=0,winningScore=3
const result=document.getElementById('result')
const playerScoreEl=document.getElementById('playerScore')
const aiScoreEl=document.getElementById('aiScore')
const rounds=document.getElementById('rounds')
const choices=document.querySelectorAll('.choice')

rounds.addEventListener('change',()=>winningScore=parseInt(rounds.value))

choices.forEach(btn=>{
btn.addEventListener('click',()=>{
if(playerScore>=winningScore||aiScore>=winningScore)return
let playerChoice=btn.dataset.choice
let aiChoice=getAIChoice()
let winner=getWinner(playerChoice,aiChoice)
updateScore(winner)
result.textContent=`You chose ${playerChoice}, AI chose ${aiChoice}. ${winner==='draw'?'It\'s a draw!':winner==='player'?'You win!':'AI wins!'}`
})
})

function getAIChoice(){
let options=['rock','paper','scissors']
return options[Math.floor(Math.random()*options.length)]
}

function getWinner(player,ai){
if(player===ai)return 'draw'
if(
(player==='rock'&&ai==='scissors')||
(player==='paper'&&ai==='rock')||
(player==='scissors'&&ai==='paper')
)return 'player'
return 'ai'
}

function updateScore(winner){
if(winner==='player'){playerScore++;playerScoreEl.textContent=playerScore}
if(winner==='ai'){aiScore++;aiScoreEl.textContent=aiScore}
if(playerScore===winningScore){
result.textContent='🎉 You won the game! 🎉'
launchConfetti()
}
if(aiScore===winningScore){
result.textContent='AI won the game! 😔'
}
}

function launchConfetti(){
confetti({
particleCount:150,
spread:70,
origin:{y:0.6}
})
}
