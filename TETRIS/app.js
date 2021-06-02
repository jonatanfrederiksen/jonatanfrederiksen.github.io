//predefined tetris pieces
const pieces = [
    {
        name: 'I',
        position: [
            [{
                y: "-1",
                x: "3"
            },
            {
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "-1",
                x: "6"
            }],

            [{
                y: "-3",
                x: "4"
            },
            {
                y: "-2",
                x: "4"
            },
            {
                y: "-1",
                x: "4"
            },
            {
                y: "0",
                x: "4"
            }]
        ],
        color: '#FFE0FF',
        img: "url('img/I.png')"

    },
    {
        name: 'J',
        position: [
            [{
                y: "-2",
                x: "5"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "0",
                x: "5"
            },
            {
                y: "-2",
                x: "6"
            }],


            [{
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "-1",
                x: "6"
            },
            {
                y: "0",
                x: "6"
            }],


            [{
                y: "-2",
                x: "5"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "0",
                x: "5"
            },
            {
                y: "0",
                x: "4"
            }],


            [{
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "-1",
                x: "6"
            },
            {
                y: "-2",
                x: "4"
            }]
        ],
        color: '#D3FFFD',
        img: "url('img/J.png')"
    },
    {
        name: 'L',
        position: [
            [{
                y: "-2",
                x: "4"
            },
            {
                y: "-1",
                x: "4"
            },
            {
                y: "0",
                x: "4"
            },
            {
                y: "0",
                x: "5"
            }],


            [{
                y: "-1",
                x: "3"
            },
            {
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "0",
                x: "3"
            }],


            [{
                y: "-2",
                x: "4"
            },
            {
                y: "-1",
                x: "4"
            },
            {
                y: "0",
                x: "4"
            },
            {
                y: "-2",
                x: "3"
            }],


            [{
                y: "-1",
                x: "3"
            },
            {
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "-2",
                x: "5"
            }]
        ],
        color: '#FFC78E',
        img: "url('img/L.png')"
    },
    {
        name: 'O',
        position: [
            [{
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "0",
                x: "4"
            },
            {
                y: "0",
                x: "5"
            }]
        ],
        color: '#FEFFB2',
        img: "url('img/O.png')"
    },
    {
        name: 'S',
        position: [
            [{
                y: "-1",
                x: "5"
            },
            {
                y: "-1",
                x: "6"
            },
            {
                y: "0",
                x: "4"
            },
            {
                y: "0",
                x: "5"
            }],


            [{
                y: "-1",
                x: "5"
            },
            {
                y: "-1",
                x: "6"
            },
            {
                y: "-2",
                x: "5"
            },
            {
                y: "0",
                x: "6"
            }],
        ],
        color: '#CAFFC9',
        img: "url('img/S.png')"
    },
    {
        name: 'T',
        position: [
            [{
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "0",
                x: "4"
            },
            {
                y: "-2",
                x: "4"
            }],


            [{
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "0",
                x: "4"
            },
            {
                y: "-1",
                x: "3"
            }],


            [{
                y: "-1",
                x: "4"
            },
            {
                y: "0",
                x: "4"
            },
            {
                y: "-1",
                x: "3"
            },
            {
                y: "-2",
                x: "4"
            }],


            [{
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "-1",
                x: "3"
            },
            {
                y: "-2",
                x: "4"
            }]

        ],
        color: '#D8D7FF',
        img: "url('img/T.png')"
    },
    {
        name: 'Z',
        position: [
            [{
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "0",
                x: "5"
            },
            {
                y: "0",
                x: "6"
            }],


            [{
                y: "-1",
                x: "4"
            },
            {
                y: "-1",
                x: "5"
            },
            {
                y: "-2",
                x: "5"
            },
            {
                y: "0",
                x: "4"
            }]

        ],
        color: '#FFB0B1',
        img: "url('img/Z.png')"
    }
]


//needed values

let activePos = [];
let nextPiece = {};
let currentPiece = {};

let pieceToHold = {};
let heldPiece = {};
let firstHold = true;
let allowHold = true;

let intervalId = "";
let round = 0;
let level = 0;

const levelDisp = document.querySelector('#level span')
let gameOver = true;

// let interval = 0;
// let currentColor = 'green';
let activeRotationCount = "";


// manual functions

const moveDownNew = () => {
    let validate = true
    for (box of activePos[activeRotationCount]) {
        if (parseInt(this.box.y) >= 20 || document.querySelector(`#y${parseInt(this.box.y) + 1}x${this.box.x}`).classList.contains('filled')) {
            validate = false;
        }
    }
    if (validate) {

        for (piece of activePos) {
            for (box of piece) {
                this.box.y = (parseInt(this.box.y) + 1).toString();
            }
        }
        printOnScreen()
    }
}

const rotatePiece = () => {
    let validate = true;
    let runForOne = true;
    let pushX = 0;
    let potentialRotation = (activeRotationCount + 1) % activePos.length
    for (box of activePos[potentialRotation]) {
        if (parseInt(this.box.x) >= 10 || parseInt(this.box.x) < 0 || document.querySelector(`#y${this.box.y}x${parseInt(this.box.x)}`).classList.contains('filled')) {
            validate = false;
            if (parseInt(this.box.x) >= 10 && nextPiece.name === "I" && (parseInt(this.box.x) - 2) >= 9 && !(document.querySelector(`#y${this.box.y}x${parseInt(this.box.x) - 2}`).classList.contains('filled'))) {
                pushX = -2;
                runForOne = false;
            }
            else if (parseInt(this.box.x) >= 10 && runForOne && (parseInt(this.box.x) - 1) >= 9 && !(document.querySelector(`#y${this.box.y}x${parseInt(this.box.x) - 1}`).classList.contains('filled'))) {
                pushX = -1;
            }
            else if (parseInt(this.box.x) <= 0 && parseInt(this.box.x) + 1 <= 0 && !(document.querySelector(`#y${this.box.y}x${parseInt(this.box.x) + 1}`).classList.contains('filled'))) {
                pushX = +1;
            }
        }
    }
    if (validate) {
        activeRotationCount = (activeRotationCount + 1) % activePos.length
        printOnScreen()
    }
    else if (pushX === -1) {
        moveLeftNew()
        rotatePiece()
    }
    else if (pushX === -2) {
        moveLeftNew()
        moveLeftNew()
        rotatePiece()
    }
    else if (pushX === +1) {
        moveRightNew()
        rotatePiece()
    }
}

const moveLeftNew = () => {
    let validate = true
    for (box of activePos[activeRotationCount]) {
        if (parseInt(this.box.x) <= 0 || document.querySelector(`#y${this.box.y}x${parseInt(this.box.x) - 1}`).classList.contains('filled')) {
            validate = false;
        }
    }
    if (validate) {
        for (piece of activePos) {
            for (box of piece) {
                this.box.x = (parseInt(this.box.x) - 1).toString();
            }
        }
        printOnScreen()
    }
}

const moveRightNew = () => {
    let validate = true
    for (box of activePos[activeRotationCount]) {
        if (parseInt(this.box.x) >= 9 || document.querySelector(`#y${this.box.y}x${parseInt(this.box.x) + 1}`).classList.contains('filled')) {
            validate = false;
        }
    }
    if (validate) {
        for (piece of activePos) {
            for (box of piece) {
                this.box.x = (parseInt(this.box.x) + 1).toString();
            }
        }
        printOnScreen()
    }
}

const holdPiece = () => {
    if (allowHold) {
        let removeFrom = document.querySelectorAll('.active')
        if (removeFrom[0]) {
            for (box of removeFrom) {
                box.style.backgroundColor = '';
                box.classList.remove('active')
            }
        }

        if (!firstHold) {
            heldPiece = JSON.parse(JSON.stringify(pieceToHold));
        }
        pieceToHold = JSON.parse(JSON.stringify(currentPiece));
        document.querySelector('#hold').style.backgroundImage = pieceToHold.img;
        if (!firstHold) {
            newPieceNew(heldPiece)

        }
        else {
            newPieceNew()
        }
        allowHold = false;

        firstHold = false;


    }
}





// }



// automatic functions

const startGame = () => {
    let startBtn = document.querySelector('#startBtn span')
    if (gameOver && startBtn.innerText == "reset") {
        resetGame()
        document.querySelector('#startBtn span').innerText = "start";
    }
    else if (gameOver) {
        gameOver = false;
        startBtn.innerText = "pause";
        randPiece()
        newPieceNew();
    }
    else if (startBtn.innerText == "pause") {
        document.querySelector('#startBtn span').innerText = "start";
        pauseGame()
    }
    else if (startBtn.innerText == "start") {
        document.querySelector('#startBtn span').innerText = "pause";
        startInterval()
    }
}

const pauseGame = () => {
    quitInterval();
    document.querySelector('#startBtn span').innerText = "start";
}

const resetGame = () => {
    let allFilled = document.querySelectorAll('.filled');
    for (box of allFilled) {
        box.classList.remove('filled')
    }
    let allActive = document.querySelectorAll('.active');
    for (box of allActive) {
        box.classList.remove('active')
    }

    document.querySelector('#hold').style.backgroundImage = "";
    document.querySelector('#upNext').style.backgroundImage = "";


    let activePos = [];
    let nextPiece = {};
    let currentPiece = {};
    let pieceToHold = {};
    let heldPiece = {};
    let firstHold = true;
    let allowHold = true;
    let intervalId = "";
    let round = 0;
    let level = 0;
    levelDisp.innerText = level;
    let activeRotationCount = "";


}

const newPieceNew = (masterPiece = nextPiece) => {
    solidifyPiecesNew()
    isGameOver();
    if (!gameOver) {
        activeRotationCount = 0;
        for (piece of masterPiece.position) {
            activePos.push(piece)
        }
        currentColor = masterPiece.color;
    }
    round++;
    currentPiece = JSON.parse(JSON.stringify(nextPiece));
    if (allowHold) { randPiece(); }
    displayUpNext();
    startInterval()
}

const displayUpNext = () => {
    document.querySelector('#upNext').style.backgroundImage = nextPiece.img
}


const printOnScreen = (pieces = activePos) => {
    let removeFrom = document.querySelectorAll('.active')
    if (removeFrom[0]) {
        for (box of removeFrom) {
            box.style.backgroundColor = '';
            box.classList.remove('active')
        }
    }

    let pieceToPrint = pieces[activeRotationCount]
    for (box of pieceToPrint) {
        thisBox = document.querySelector(`#y${this.box.y}x${this.box.x}`)
        thisBox.style.backgroundColor = currentColor;
        thisBox.classList.add('active')
    }
}

const moveDownAutoNew = () => {
    let validate = true
    for (box of activePos[activeRotationCount]) {
        if (parseInt(this.box.y) >= 20 || document.querySelector(`#y${parseInt(this.box.y) + 1}x${this.box.x}`).classList.contains('filled')) {
            validate = false
            solidifyPiecesNew()
        }
    }
    if (validate) {
        moveDownNew()
    }
    else if (!validate) { newPieceNew() }
}

const solidifyPiecesNew = () => {
    let removeFrom = document.querySelectorAll('.active')
    if (removeFrom[0]) {
        for (box of removeFrom) {
            box.classList.remove('active')
            box.style.backgroundColor = "";
            box.classList.add('filled')
        }
    }
    quitInterval();
    activePos = [];
    allowHold = true;
    clearLines();
}

const isGameOver = () => {
    let gameOverCheck = document.querySelectorAll('.gameOverCheck')
    for (box of gameOverCheck) {
        if (box.classList.contains('filled')) {
            gameOver = true;
            console.log('game is over');
            document.querySelector('#startBtn span').innerText = "reset"
            throw new Error("dude u game is done");
        }
    }
}

const startInterval = () => {
    if (level < 5) { interval = 600 }
    else if (level < 10) { interval = 560 }
    else if (level < 15) { interval = 520 }
    else if (level < 20) { interval = 480 }
    else if (level < 25) { interval = 440 }
    else if (level < 30) { interval = 400 }
    else if (level < 35) { interval = 360 }
    else if (level < 40) { interval = 320 }
    else if (level < 45) { interval = 280 }
    else if (level < 50) { interval = 240 }
    else if (level < 55) { interval = 220 }
    else if (level < 60) { interval = 200 }
    else if (level < 65) { interval = 180 }
    else if (level < 70) { interval = 160 }
    else if (level < 75) { interval = 150 }
    else if (level < 80) { interval = 140 }
    else if (level < 85) { interval = 130 }
    else if (level < 90) { interval = 120 }
    else if (level < 95) { interval = 110 }
    else { interval = 100 }
    intervalId = window.setInterval(moveDownAutoNew, interval);
}

const quitInterval = () => {
    clearInterval(intervalId)
}

const randPiece = (a = Math.floor(Math.random() * 7)) => {
    nextPiece = JSON.parse(JSON.stringify(pieces[a]));
}

const levelUp = () => {
    level++;
    levelDisp.innerText = level;
}

const clearLine = (filledBoxes) => {
    for (box of filledBoxes) {
        box.classList.remove('filled')
    }
    levelUp()
}

const shiftDown = (allFilledBoxes) => {
    let newCoordinates = []
    for (box of allFilledBoxes) {
        box.classList.remove('filled');
        let newY = (parseInt(box.id.slice(1)) + 1).toString();
        let newX = (parseInt(box.id.slice(box.id.indexOf('x') + 1))).toString();
        let boxToFill = document.querySelector(`#y${newY}x${newX} `);
        newCoordinates.push(boxToFill)
    }
    for (box of newCoordinates) {
        box.classList.add('filled');
    }
}

const clearLines = () => {
    let rowsArr = ['y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'y8', 'y9', 'y10', 'y11', 'y12', 'y13', 'y14', 'y15', 'y16', 'y17', 'y18', 'y19', 'y20'].reverse();
    let linesToShiftDown = []

    for (let a = 0; a < 20; a++) {
        let activeRow = rowsArr.shift()
        let filledBoxes = document.querySelectorAll(`#${activeRow} .filled`);

        if (filledBoxes.length >= 10) {
            linesToShiftDown.unshift(activeRow);
            clearLine(filledBoxes);

            let allFilledBoxes = [];
            for (row of rowsArr) {
                let lineOfFilledBoxes = (document.querySelectorAll(`#${row} .filled`));
                for (box of lineOfFilledBoxes) {
                    allFilledBoxes.push(box)
                }
            }
            shiftDown(allFilledBoxes);
        }

    }
}




// // for (row of rowsArr) {
// //     let filledBoxesInside = document.querySelectorAll(`#${row} .filled`);
// //     for (let i = 0; i < filledBoxesInside.length; i++) {
// //         filledBoxesInside[i].classList.remove('filled')
// //         let newY = (parseInt(row.slice(1)) + 1).toString();
// //         let newX = (parseInt(filledBoxesInside[i].id.slice(filledBoxesInside[i].id.indexOf('x') + 1))).toString();
// //         let boxToFill = document.querySelector(`#y${newY}x${newX} `)
// //         boxToFill.classList.add('filled')

// //         // boxToFill.classlist.add('filled')
// //     }
// // }



//             //     for (box of filledBoxesInside) {
//             //         box.classList.remove('filled')
//             //         let y = (parseInt(box.id.slice(1, box.id.indexOf("x"))) + 1).toString()
//             //         let x = (parseInt(box.id.slice(box.id.indexOf('x') + 1))).toString()
//             //         let boxToFill = document.querySelector(`y${ y } x${ x } `)
//             //         boxToFill.classlist.add('filled')
//             //     }
//             // }




//             // row plus one
//             // parseInt(box.id.slice(1,box.id.indexOf("x")))+1
//             // parseInt(box.id.slice(box.id.indexOf('x')+1))


//             // for (line of rowsArr) {
//             //     let boxes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//             //     for (box of boxes) {
//             //         filledBox = document.querySelector(`#${ line } x${ box } .filled`);
//             //         console.log(filledBox)
//             //         // filledBox.classList.remove('filled')
//             //         // document.querySelector(`#y${ line + 1 } x${ box } `).classList.add('filled')
//             //     }
//             // }
//         }
//     }
// }



// {
//     let boxes = document.querySelectorAll(`#${ row } .box`)
//     let filledCount = 0;
//     for (box of boxes) {
//         console.log(this.box.classList)
//         if (this.box.classList.contains('filled'))
//     }
// }



// SWIPE CONTROLS

let swipeControl = false;
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('game');

gestureZone.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);

const toggleBtn = document.querySelector('#swipeToggler');

const toggleSwipeControls = () => {
    if (!swipeControl) {
        swipeControl = true;
        toggleBtn.style.backgroundColor = 'hsl(195, 100%, 25%)'
        toggleBtn.style.boxShadow = '0px 0px 30px 3px rgba(196,240,255,0.5)';

    }
    else {
        swipeControl = false;
        toggleBtn.style.boxShadow = ''
        toggleBtn.style.backgroundColor = 'hsl(195, 100%, 17%)';

    }
}

// hand gesture function calls
let handleGesture = () => {
    if (swipeControl == true && touchendX <= touchstartX && (Math.abs(touchstartX - touchendX)) > 15 && (Math.abs(touchstartX - touchendX)) >= (Math.abs(touchendY - touchstartY))) {
        console.log('Swiped left');
        moveLeftNew();
        console.log(Math.abs(touchstartX - touchendX))
    }

    if (swipeControl == true && touchendX >= touchstartX && (Math.abs(touchstartX - touchendX)) > 15 && (Math.abs(touchstartX - touchendX)) >= (Math.abs(touchendY - touchstartY))) {
        console.log('Swiped right');
        moveRightNew();
    }

    if (swipeControl == true && touchendY <= touchstartY && (Math.abs(touchendY - touchstartY)) > 15 && (Math.abs(touchstartX - touchendX)) <= (Math.abs(touchendY - touchstartY))) {
        console.log('Swiped up');
        holdPiece();
    }

    if (swipeControl == true && touchendY >= touchstartY && (Math.abs(touchendY - touchstartY)) > 15 && (Math.abs(touchstartX - touchendX)) <= (Math.abs(touchendY - touchstartY))) {
        console.log('Swiped down');
        moveDownNew();
    }

    if (swipeControl == true && touchendY === touchstartY) {
        console.log('Tap');
        if (gameOver) { startGame() }
        else { rotatePiece(); }
    }
}

//automatically enable when loaded on small screen
if (window.innerWidth < 600) { toggleSwipeControls() }


























// event listeners

const keys = document.querySelector('body');
keys.addEventListener('keydown', function (e) {

    if (e.key == "ArrowLeft") { moveLeftNew() }
    else if (e.key == "Enter") { startGame() }
    else if (e.key == "ArrowRight") { moveRightNew() }
    else if (e.key == "ArrowDown") { moveDownNew() }
    else if (e.key == "ArrowUp") { rotatePiece() }
    else if (e.key == "ArrowUp") { rotatePiece() }
    else if (e.key.toLowerCase() == "c") { holdPiece() }
    else if (e.key.toLowerCase() == "q") { clearInterval(intervalId) }
})

const upBtn = document.querySelector('#upBtn');
upBtn.addEventListener('click', rotatePiece);

const leftBtn = document.querySelector('#leftBtn');
leftBtn.addEventListener('click', moveLeftNew);

const downBtn = document.querySelector('#downBtn');
downBtn.addEventListener('click', function () { moveDownNew() });

const rightBtn = document.querySelector('#rightBtn');
rightBtn.addEventListener('click', moveRightNew);

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', function () { startGame() });

// toggleButton defined in swipe section
toggleBtn.addEventListener('click', toggleSwipeControls);



















// functions


// const newPiece = function (piece = nextPiece.position) {
//     isGameOver()
//     if (!gameOver) {
//         for (box of piece) {
//             console.log(`newPos: y: ${ this.box.y }, x: ${ this.box.x } `)
//             activePos.push(this.box)
//             document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = activePos.color;
//         };
//         currentColor = nextPiece.color;
//         round++;
//         startInterval();
//     }
// }

// let removeFrom = document.querySelectorAll('.active')

// if (removeFrom[0]) {
//     for (box of removeFrom) {
//         box.style.backgroundColor = 'black';
//         box.classList.remove('active')
//     }
// }

// let pieceToPrint = pieces[activeRotationCount]
// for (box of pieceToPrint) {
//     console.log(this)
//     thisBox = document.querySelector(`#y${ this.box.y } x${ this.box.x } `)
//     thisBox.style.backgroundColor = currentColor;
//     thisBox.classList.add('active')
// }











// const solidifyPieces = (piece = activePos) => {
//     for (box of piece) {
//         document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = "";
//         document.querySelector(`#y${ this.box.y } x${ this.box.x } `).classList.add('filled');
//     }
//     quitInterval();
//     activePos = [];
//     isGameOver();
//     randPiece();
// }



// const moveDown = (piece = activePos) => {
//     let validate = true
//     for (box of piece) {
//         if (parseInt(this.box.y) >= 20 || document.querySelector(`#y${ parseInt(this.box.y) + 1 } x${ this.box.x } `).classList.contains('filled')) {
//             validate = false
//         }
//     }
//     if (validate) {
//         for (box of piece) {
//             document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = 'black';
//             let newY = parseInt(this.box.y) + 1;
//             this.box.y = newY.toString();
//         }
//         for (box of piece) {
//             document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = currentColor;
//         }
//     }
// }

// const moveDownAuto = (piece = activePos) => {
//     let validate = true
//     for (box of piece) {
//         if (parseInt(this.box.y) >= 20 || document.querySelector(`#y${ parseInt(this.box.y) + 1 } x${ this.box.x } `).classList.contains('filled')) {
//             validate = false
//             solidifyPieces()
//         }
//     }
//     if (validate) {
//         for (box of piece) {
//             document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = 'black';
//             let newY = parseInt(this.box.y) + 1;
//             this.box.y = newY.toString();
//         }
//         for (box of piece) {
//             document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = currentColor;
//         }
//     }
//     else if (!validate) { newPiece() }
// }




// const moveDownComplete = () => {
//     while (activePos) {
//         moveDownAuto()
//     }
// }


// const moveLeft = () => {
//     let validate = true
//     for (box of activePos) {
//         if (parseInt(this.box.x) <= 0 || document.querySelector(`#y${ this.box.y } x${ parseInt(this.box.x) - 1 } `).classList.contains('filled')) {
//             validate = false
//         }
//     }
//     if (validate) {
//         for (box of activePos) {
//             document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = 'black';
//             let newX = parseInt(this.box.x) - 1;
//             this.box.x = newX.toString();
//             console.log(`moveLeft: y: ${ this.box.y }, x: ${ this.box.x } `)
//         }
//         for (box of activePos) {
//             document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = currentColor;
//         }
//     }
// }

// const moveRight = () => {
//     let validate = true
//     for (box of activePos) {
//         if (parseInt(this.box.x) >= 9 || document.querySelector(`#y${ this.box.y } x${ parseInt(this.box.x) + 1 } `).classList.contains('filled')) {
//             validate = false
//         }
//     }
//     if (validate) {
//         for (box of activePos) {
//             document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = 'black';
//             let newX = parseInt(this.box.x) + 1;
//             this.box.x = newX.toString();
//             console.log(`moveRight: y: ${ this.box.y }, x: ${ this.box.x } `)
//         }
//         for (box of activePos) {
//             document.querySelector(`#y${ this.box.y } x${ this.box.x } `).style.backgroundColor = currentColor;
//         }
//     }
// }



