import {Player} from "./factory";

function checkWinner(playersArray) {
    const playerLost = playersArray[0].isFleetDead();
    const opponentLost = playersArray[1].isFleetDead();
    if (playerLost) {return "Opponent wins!"};
    if (opponentLost) {return "You win!"};
    if (playerLost && opponentLost) {return "Tie game!"};
    return false;
};

function newCompetitors() {
    const player = Player();
    const opponent = Player();
    const competitors = [player, opponent];
    return competitors;
};

function getRandomCoordinate() {
    return Math.floor(Math.random() * 100);
};

function getRandomOrientation() {
    const number = Math.floor(Math.random() * 2);
    if (number === 1) {return true};
    return false;
};

export { checkWinner, newCompetitors, getRandomCoordinate, getRandomOrientation };