//import { Ship, Board, Player } from "./factory.js";
//import { checkWinner } from "./gamePlay.js";
//import "./style.css";

const body = document.body;

function renderStartingPage() {
    const initialBackground = document.createElement("div");
    initialBackground.className = "initial-background";

    const startBtn = document.createElement("button");
    startBtn.className = "start-btn";
    startBtn.textContent = "START";
    initialBackground.appendChild(startBtn);

    const gameModeDisplay = document.createElement("p");
    gameModeDisplay.className = "game-mode-display";
    const gameMode = document.createElement("span");
    gameMode.className = "game-mode";
    gameModeDisplay.appendChild(gameMode);
    initialBackground.appendChild(gameModeDisplay);

    const opponentGallery = document.createElement("div");
    opponentGallery.className = "opponent-gallery";
    const gunnerCard = document.createElement("div");
    gunnerCard.className = "opponent-card";
    gunnerImg = document.createElement("img");
    gunnerImg.src = "./img/white-g.png";
    gunnerName = document.createElement("p");
    gunnerName.textContent = "Gunner";
    gunnerDifficulty = document.createElement("p");
    gunnerDifficulty.textContent = "(Easy)";
    gunnerCard.appendChild(gunnerImg);
    gunnerCard.appendChild(gunnerName);
    gunnerCard.appendChild(gunnerDifficulty);
    opponentGallery.appendChild(gunnerCard);
    initialBackground.appendChild(opponentGallery);

    body.appendChild(initialBackground);
};

function renderFleetDisplay(fleetOwnerString, commanderString) {
    const fleetSection = document.createElement("div");
    const fleetPara = document.createElement("p");
    fleetPara.textContent = `${fleetOwnerString} fleet`.toUpperCase();
    const fleetDisplay = document.createElement("div");
    fleetDisplay.className = `${commanderString}-fleet-display`;
    for (let i = 0; i < 5; i++) {
        const shipNameArray = ["carrirer", "battleship", "cruiser", "submarine", "destroyer"];
        const shipHullCount = [5,4,3,3,2];
        const shipDiv = document.createElement("div");
        for (let j = 0; j < shipHullCount[i]; j++) {
            const shipBlock = document.createElement("div");
            shipBlock.className = `${commanderString}-${shipNameArray[i]}-${j + 1} ship-hull-block`;
            shipDiv.appendChild(shipBlock);
        };
        fleetDisplay.appendChild(shipDiv);
    };
    fleetSection.appendChild(fleetPara);
    fleetSection.appendChild(fleetDisplay);
    return fleetSection;
};

function renderBoard(boardTypeString) {
    const boardSection = document.createElement("div");
    const boardPara = document.createElement("p");
    boardPara.textContent = `${boardTypeString} board`.toUpperCase();
    const board = document.createElement("div");
    board.className = `${boardTypeString}-board`;
    const classesArray = [null,"number-coordinates","letter-coordinates","blocks"];
    const boardItems = {
        numbers: [1,2,3,4,5,6,7,8,9,10],
        letters: ["A","B","C","D","E","F","G","H","I","J"],
        class: "board-block"
    };
    for (let i = 0; i < 4; i++) {
        const div = document.createElement("div");
        function createCoordinateDisplay(boardItem) {
            for (let j = 0; j < 10; j++) {
                const coordinateDiv = document.createElement("div");
                coordinateDiv.textContent = `${boardItems[boardItem][j]}`;
                div.appendChild(coordinateDiv);
            };
        };
        function createBoardBlocks(classString) {
            for (let j = 0; j < 100; j++) {
                const boardBlock = document.createElement("div");
                boardBlock.className = `${classString}`;
                div.appendChild(boardBlock);
            };
        };
        if (i > 0) {
            console.log("greater than 0");
            div.className = `${boardTypeString}-board-${classesArray[i]}`;
            if (i === 1) {
                console.log("i equals 1");
                createCoordinateDisplay("numbers");
            };
            if (i === 2) {
                console.log("i equals 2");
                createCoordinateDisplay("letters");
            };
            if (i === 3) {
                console.log("i equals 3");
                createBoardBlocks(boardItems.class);
            };
        };
        board.appendChild(div);
    };
    boardSection.appendChild(boardPara);
    boardSection.appendChild(board);
    return boardSection;
};

function renderGamePanel() {
    const gamePanel = document.createElement("div");
    gamePanel.className = "game-panel";

    const gamePanelLeft = document.createElement("div");
    gamePanelLeft.className = "game-panel-left";

    gamePanelLeft.appendChild(renderFleetDisplay("your", "player"));
    gamePanelLeft.appendChild(renderFleetDisplay("enemy", "enemy"));
    gamePanelLeft.appendChild(renderBoard("home"));

    gamePanel.appendChild(gamePanelLeft);

    const gamePanelRight = document.createElement("div");
    gamePanelRight.className = "game-panel-right";

    
    const controlsDisplay = document.createElement("div");
    controlsDisplay.className = "controls-display";
    const controlsDisplayPara = document.createElement("p");
    controlsDisplayPara.textContent = "CONTROLS";
    const controlsDisplayDiv = document.createElement("div");
    const instructionsPara = document.createElement("p");
    instructionsPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores minima ad modi aliquid sapiente. Magnam repellat ad //placeat? Quo exercitationem assumenda aliquid non nostrum magnam praesentium minus, est error.";
    controlsDisplayDiv.appendChild(instructionsPara);
    controlsDisplay.appendChild(controlsDisplayPara);
    controlsDisplay.appendChild(controlsDisplayDiv);

    gamePanelRight.appendChild(renderBoard("targeting"));
    gamePanelRight.appendChild(controlsDisplay);
    gamePanel.appendChild(gamePanelRight);

    body.appendChild(gamePanel);
};

renderGamePanel();