function checkWinner(playersArray) {
    const computerLost = playersArray[0].isFleetDead();
    const playerLost = playersArray[1].isFleetDead();
    if (computerLost) {return "Player wins!"};
    if (playerLost) {return "Computer wins!"};
};

export { checkWinner };