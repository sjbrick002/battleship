import { checkWinner, newCompetitors, getRandomCoordinate, getRandomOrientation } from "./gamePlay.js";
import "./style.css";
import whiteG from "./img/white-g.png";
import spaceMusic from "./sounds/391840__vabsounds__space.wav";
import laserSound from "./sounds/339169__debsound__arcade-laser-014.wav";


let competitors = [];
let isMusicOn = false;
let isFxOn = true;




const gameMusic = document.createElement("audio");
gameMusic.src = spaceMusic;
gameMusic.setAttribute("type", "audio/wav");

const firingSound = document.createElement("audio");
firingSound.src = laserSound;
firingSound.setAttribute("type", "audio/wav");

function renderSoundOptions() {
    const soundOptions = document.createElement("div");
    soundOptions.className = "sound-options";
    const musicLabel = document.createElement("label");
    musicLabel.textContent = "Music";
    musicLabel.addEventListener("click", function() {
        isMusicOn = !isMusicOn;
        if (!isMusicOn) {musicLabel.className = "strikethrough"}
        else {musicLabel.className = ""};
        if (isMusicOn) {
            gameMusic.setAttribute("loop","");
            gameMusic.play();
        } else {
            gameMusic.removeAttribute("loop");
            gameMusic.pause();
        };
    });
    const fxLabel = document.createElement("label");
    fxLabel.textContent = "FX Sound";
    fxLabel.addEventListener("click", function() {
        isFxOn = !isFxOn;
        if (!isFxOn) {fxLabel.className = "strikethrough"}
        else {fxLabel.className = ""};
    });
    if (!isMusicOn) {musicLabel.className = "strikethrough"};
    if (!isFxOn) {fxLabel.className = "strikethrough"};
    soundOptions.appendChild(musicLabel);
    soundOptions.appendChild(fxLabel);
    body.appendChild(soundOptions);
};






let targetingBlockRefNumber = 0;
let previousOpponentTargetCoordinates = [];

function moveTargetingMarker(e) {
    const homeBlockList = document.querySelectorAll(".home-board-block");
    const targetingBlockList = document.querySelectorAll(".targeting-board-block");
    const currentTargetBlock = document.querySelector(".target-grid-block");
    function updateTargetMarker() {
        currentTargetBlock.classList.remove("target-grid-block");
        currentTargetBlock.textContent = "";
        targetingBlockList[targetingBlockRefNumber].classList.add("target-grid-block");
        targetingBlockList[targetingBlockRefNumber].textContent = "+";
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
    if (e.key === "f" && !currentTargetBlock.classList.contains("firing")) {
        currentTargetBlock.classList.add("firing");
        if (isFxOn) {
            firingSound.currentTime = 0;
            firingSound.play()
        };
        const playerAttackResult = competitors[0].attack(targetingBlockRefNumber, competitors[1]);
        let currentOpponentTargetCoordinate = getRandomCoordinate();
        while (previousOpponentTargetCoordinates.includes(currentOpponentTargetCoordinate)) {
            currentOpponentTargetCoordinate = getRandomCoordinate();
        };
        previousOpponentTargetCoordinates.push(currentOpponentTargetCoordinate);
        const opponentAttackResult = competitors[1].attack(currentOpponentTargetCoordinate, competitors[0]);
        if (playerAttackResult[1] === "miss") {currentTargetBlock.classList.add("empty-grid-block")
        };
        if (playerAttackResult[1] === "hit") {currentTargetBlock.classList.add("damaged-hull")};
        if (playerAttackResult[1] === "sunk") {
            currentTargetBlock.classList.add("damaged-hull");
            const sunkFleetShip = document.querySelectorAll(`.enemy-${playerAttackResult[0]}`);
            sunkFleetShip.forEach(block => block.classList.add("damaged-hull"));
        };
        if (opponentAttackResult[1] === "miss") {homeBlockList[currentOpponentTargetCoordinate].classList.add("empty-grid-block")};
        if (opponentAttackResult[1] === "hit") {homeBlockList[currentOpponentTargetCoordinate].classList.add("damaged-hull")};
        if (opponentAttackResult[1] === "sunk") {
            homeBlockList[currentOpponentTargetCoordinate].classList.add("damaged-hull");
            const sunkFleetShip = document.querySelectorAll(`.player-${opponentAttackResult[0]}`);
            sunkFleetShip.forEach(block => block.classList.add("damaged-hull"));
        };
        if (checkWinner(competitors)) {
            alert(checkWinner(competitors));
            endCombat();
            targetingBlockRefNumber = 0;
            previousOpponentTargetCoordinates = [];
            gameStarted = false;
            homeBlockRefNumber = 0;
            placedShipCount = 0;
            isShipVertical = false;
            clearElement(body);
            renderStartingPage();
        }
    };
};

function endCombat() {
    window.removeEventListener("keydown", moveTargetingMarker);
};


function initializeFiringStage() {
    const targetingBlockList = document.querySelectorAll(".targeting-board-block");
    targetingBlockList[0].classList.add("target-grid-block");
    targetingBlockList[0].textContent = "+";
    window.addEventListener("keydown", moveTargetingMarker);
}




let gameStarted = false;

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
            competitors[0].setShip(homeBlockRefNumber, isShipVertical);
            let computerSetShipResult = "";
            while (computerSetShipResult !== "success" ) {
                computerSetShipResult = competitors[1].setShip(getRandomCoordinate(), getRandomOrientation());
            };
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
    if (e.key === "r") {
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
            revealShipModel();
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
        competitors = newCompetitors();
    });
    initialBackground.appendChild(startBtn);

    const gameModeDisplay = document.createElement("p");
    gameModeDisplay.className = "game-mode-display";
    gameModeDisplay.textContent = "Game Mode: ";
    const gameMode = document.createElement("span");
    gameMode.className = "game-mode";
    gameMode.textContent = "Gunner";
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
    renderSoundOptions();
};

function renderFleetDisplay(fleetOwnerString, commanderString) {
    const fleetSection = document.createElement("div");
    const fleetPara = document.createElement("p");
    fleetPara.textContent = `${fleetOwnerString} fleet`.toUpperCase();
    const fleetDisplay = document.createElement("div");
    fleetDisplay.className = `${commanderString}-fleet-display`;
    for (let i = 0; i < 5; i++) {
        const shipNameArray = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
        const shipHullCount = [5,4,3,3,2];
        const shipDiv = document.createElement("div");
        for (let j = 0; j < shipHullCount[i]; j++) {
            const shipBlock = document.createElement("div");
            shipBlock.className = `${commanderString}-${shipNameArray[i]} ship-hull-block`;
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

function renderHowToPlay() {
    let i = 0
    const gameInstructions = ["Welcome!</br></br>To start, press <span class='how-to-play-span'>space</span> to set your fleet on the home board!","Use <span class='how-to-play-span'>wasd</span> or <span class='how-to-play-span'>arrow</span> keys to move the ship model and the <span class='how-to-play-span'>r</span> button to flip its orientation.</br></br>When you are happy with its position, press <span class='how-to-play-span'>enter</span> to confirm it!","After setting your fleet on the board, it's time to start firing!</br></br>Using the <span class='how-to-play-span'>wasd</span> or <span class='how-to-play-span'>arrow</span> keys, press <span class='how-to-play-span'>f</span> to fire at target coordinates to try and sink you opponents ships before they sink yours; good luck!!!"];
    function updateHowToPlayDisplay(element) {
        element.innerHTML = gameInstructions[i];
    };

    const howToPlayDisplay = document.createElement("div");
    howToPlayDisplay.className = "how-to-play-display";
    const howToPlayDisplayPara = document.createElement("p");
    howToPlayDisplayPara.textContent = "HOW TO PLAY";
    const howToPlayDisplayDiv = document.createElement("div");
    howToPlayDisplayDiv.className = "how-to-play-instrucitons";
    const instructionsPara = document.createElement("p");
    updateHowToPlayDisplay(instructionsPara);
    const instructionControls = document.createElement("div");
    instructionControls.className = "instruction-controls";
    const backBtn = document.createElement("div");
    backBtn.className = "instructions-btn";
    backBtn.textContent = "<";
    backBtn.addEventListener("click", function() {
        if (i > 0) {i--};
        updateHowToPlayDisplay(instructionsPara);
    });
    const forwardBtn = document.createElement("div");
    forwardBtn.className = "instructions-btn";
    forwardBtn.textContent = ">";
    forwardBtn.addEventListener("click", function() {
        if (i < 2) {i++};
        updateHowToPlayDisplay(instructionsPara);
    });
    instructionControls.appendChild(backBtn);
    instructionControls.appendChild(forwardBtn);
    howToPlayDisplayDiv.appendChild(instructionsPara);
    howToPlayDisplay.appendChild(howToPlayDisplayPara);
    howToPlayDisplay.appendChild(howToPlayDisplayDiv);
    howToPlayDisplay.appendChild(instructionControls);
    return howToPlayDisplay;
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


    gamePanelRight.appendChild(renderBoard("targeting"));
    gamePanelRight.appendChild(renderHowToPlay());
    gamePanel.appendChild(gamePanelRight);

    body.appendChild(gamePanel);
    renderSoundOptions();
};

renderStartingPage();