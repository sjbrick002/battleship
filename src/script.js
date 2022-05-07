//import { Ship, Board, Player } from "./factory.js";
//import { checkWinner } from "./gamePlay.js";
import "./style.css";
import whiteG from "./img/white-g.png";
//import spaceMusic from "./sounds/391840__vabsounds__space.wav";







//const gameMusic = document.createElement("audio");
//gameMusic.src = spaceMusic;
//gameMusic.setAttribute("type", "audio/wav");

//function playSound(sound, needsLoop = false) {
//    if (sound.hasAttribute("muted")) {sound.removeAttribute("muted")};
//    sound.setAttribute("autoplay", "");
//    if (needsLoop) {sound.setAttribute("loop", "")};
//};

//function stopSound(sound) {
//    if (sound.hasAttribute("autoplay")) {sound.removeAttribute("autoplay")};
//    sound.setAttribute("muted", "");
//}





let targetingBlockRefNumber = 0;

function moveTargetingMarker(e) {
    const targetingBlockList = document.querySelectorAll(".targeting-board-block");
    const currentTargetBlock = document.querySelector(".target-grid-block");
    function updateTargetMarker() {
        currentTargetBlock.classList.remove("target-grid-block");
        targetingBlockList[targetingBlockRefNumber].classList.add("target-grid-block");
    };
    if ((e.key === "a" || e.key === "ArrowLeft") && targetingBlockRefNumber > 0) {
        targetingBlockRefNumber--;
        updateTargetMarker();
    };
    if ((e.key === "s" || e.key === "ArrowDown") && targetingBlockRefNumber < 90) {
        targetingBlockRefNumber += 10;
        updateTargetMarker();
    };
    if ((e.key === "w" || e.key === "ArrowUp") && targetingBlockRefNumber > 9) {
        targetingBlockRefNumber -= 10;
        updateTargetMarker();
    };
    if ((e.key === "d" || e.key === "ArrowRight") && targetingBlockRefNumber < 99) {
        targetingBlockRefNumber++;
        updateTargetMarker();
    };
    if (e.key === "f") {
        currentTargetBlock.classList.add("firing");
    };
};


function initializeFiringStage() {
    const targetingBlockList = document.querySelectorAll(".targeting-board-block");
    targetingBlockList[0].classList.add("target-grid-block");
    window.addEventListener("keydown", moveTargetingMarker);
}




let gameStarted = false;

let isPlacingShip = false;
let homeBlockRefNumber = 0;
let placedShipCount = 0;
let isShipVertical = false;
const shipSizeArray = [5,4,3,3,2];

function moveShipModel(e) {
    if (e.key === "Enter") {
        const homeBlockList = document.querySelectorAll(".home-board-block");
        function checkFreeSpace() {
            for (let i = 0; i < homeBlockList.length; i++) {
                if (homeBlockList[i].classList.contains("undamaged-hull") && homeBlockList[i].classList.contains("flashing-background")) {return true};
            };
        };
        let isSpaceTaken = checkFreeSpace();
        if (!isSpaceTaken) {
            if (!isShipVertical) {
                for (let i = 0; i < shipSizeArray[placedShipCount]; i++) {
                    homeBlockList[homeBlockRefNumber + i].classList.add("undamaged-hull")
                };
            };
            if (isShipVertical) {
                for (let i = 0; i < shipSizeArray[placedShipCount]; i++) {
                    homeBlockList[homeBlockRefNumber + i * 10].classList.add("undamaged-hull")
                };
            };
            removeShipModel();
            placedShipCount++;
            homeBlockRefNumber = 0;
            isShipVertical = false;
            if (placedShipCount < 5) {revealShipModel(isShipVertical)}
            else {initializeFiringStage()};
        };        
    };
    if (e.key === "q") {
        if (!isShipVertical && homeBlockRefNumber + shipSizeArray[placedShipCount] * 10 -10 <= 99 || isShipVertical && (homeBlockRefNumber) % 10 <= 10 - shipSizeArray[placedShipCount]) {
            isShipVertical = !isShipVertical;
            removeShipModel();
            revealShipModel(isShipVertical);
        };
    };
    if (!isShipVertical) {
        if ((e.key === "a" || e.key === "ArrowLeft") && homeBlockRefNumber % 10 !== 0) {
            removeShipModel();
            homeBlockRefNumber--;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "w" || e.key === "ArrowUp") && homeBlockRefNumber - 10 >= 0) {
            removeShipModel();
            homeBlockRefNumber = homeBlockRefNumber - 10;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "s" || e.key === "ArrowDown") && homeBlockRefNumber + 10 <= 99) {
            removeShipModel();
            homeBlockRefNumber = homeBlockRefNumber + 10;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "d" || e.key === "ArrowRight") && (homeBlockRefNumber + shipSizeArray[placedShipCount]) % 10 !== 0) {
            removeShipModel();
            homeBlockRefNumber++;
            revealShipModel(isShipVertical);
        };
    };
    if (isShipVertical) {
        if ((e.key === "a" || e.key === "ArrowLeft") && homeBlockRefNumber % 10 !== 0) {
            removeShipModel();
            homeBlockRefNumber--;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "w" || e.key === "ArrowUp") && homeBlockRefNumber - 10 >= 0) {
            removeShipModel();
            homeBlockRefNumber = homeBlockRefNumber - 10;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "s" || e.key === "ArrowDown") && homeBlockRefNumber + shipSizeArray[placedShipCount] * 10 <= 99) {
            removeShipModel();
            homeBlockRefNumber = homeBlockRefNumber + 10;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "d" || e.key === "ArrowRight") && (homeBlockRefNumber + 1) % 10 !== 0) {
            removeShipModel();
            homeBlockRefNumber++;
            revealShipModel(isShipVertical);
        };
    };
};

function revealShipModel(isShipVertical) {
    const homeBlockList = document.querySelectorAll(".home-board-block");
    for (let i = 0; i < shipSizeArray[placedShipCount]; i++) {
        if (isShipVertical) {homeBlockList[homeBlockRefNumber + i * 10].classList.add("flashing-background")};
        if (!isShipVertical) {homeBlockList[homeBlockRefNumber + i].classList.add("flashing-background")};
    };
    window.addEventListener("keydown", moveShipModel);
};

function removeShipModel() {
    window.removeEventListener("keydown", moveShipModel);
    const flashingHomeBlockList = document.querySelectorAll(".flashing-background");
    if (flashingHomeBlockList.length) {
        flashingHomeBlockList.forEach(block => block.classList.remove("flashing-background"));
    };
};

window.addEventListener("keydown", function(e){
    if (gameStarted) {
        if (e.key === " ") {
            isPlacingShip = true;
            if (isPlacingShip) {
                revealShipModel();
            };
        };
    };
});

const body = document.body;

function clearElement(element = body) {
    while (element.firstChild) {
        element.removeChild(body.firstChild);
    };
};

function renderStartingPage() {
    const initialBackground = document.createElement("div");
    initialBackground.className = "initial-background";

    const startBtn = document.createElement("button");
    startBtn.className = "start-btn";
    startBtn.textContent = "START";
    startBtn.addEventListener("click", () => {
        clearElement();
        renderGamePanel();
        gameStarted = true;
    });
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
    const gunnerImg = document.createElement("img");
    gunnerImg.src = whiteG;
    const gunnerName = document.createElement("p");
    gunnerName.textContent = "Gunner";
    const gunnerDifficulty = document.createElement("p");
    gunnerDifficulty.textContent = "(Easy)";
    gunnerCard.appendChild(gunnerImg);
    gunnerCard.appendChild(gunnerName);
    gunnerCard.appendChild(gunnerDifficulty);
    opponentGallery.appendChild(gunnerCard);
    initialBackground.appendChild(opponentGallery);

    body.appendChild(initialBackground);





    //////////////////////////////////////////////////////////////////////////////////playSound(gameMusic, true);
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
            for (let j = 0; j < 10; j++) {
                const boardBlock = document.createElement("div");
                boardBlock.className = `${boardTypeString}-${classString}`;
                div.appendChild(boardBlock);
            };
        };
        if (i > 0) {
            div.className = `${boardTypeString}-board-${classesArray[i]}`;
            if (i === 1) {
                createCoordinateDisplay("numbers");
            };
            if (i === 2) {
                createCoordinateDisplay("letters");
            };
            if (i === 3) {
                let x = 0;
                while (x < 10) {
                    createBoardBlocks(boardItems.class);
                    x++;
                };
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

renderStartingPage();