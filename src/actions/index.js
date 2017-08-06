export function addScore(player){
  return {
    type: 'ADD_SCORE',
    payload: player
  }
}

export function resetGame(){
  return {
    type: 'RESET_GAME',
  }
}
