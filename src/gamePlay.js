function checkWinner(playersArray) {
    const playerLost = playersArray[1].isFleetDead();
    const computerLost = playersArray[0].isFleetDead();
    if (computerLost) {return "Player wins!"};
    if (playerLost) {return "Computer wins!"};
};

export { checkWinner };