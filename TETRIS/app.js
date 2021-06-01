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
        color: '#FFE0FF'
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
        color: '#D3FFFD'
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
        color: '#FFC78E'
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
        color: '#FEFFB2'
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
        color: '#CAFFC9'
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
        color: '#D8D7FF'
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
        color: '#FFB0B1'
    }
]


//needed values

let activePos = [];
let nextPiece = {};
let intervalId = "";
let round = 0;
let gameOver = false;
let interval = 0;
let currentColor = 'green';
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


// automatic functions

const startGame = () => {
    newPieceNew();
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
    startInterval()
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
    clearLines();
    isGameOver();
    randPiece();
}

const isGameOver = () => {
    let gameOverCheck = document.querySelectorAll('.gameOverCheck')
    for (box of gameOverCheck) {
        if (box.classList.contains('filled')) {
            gameover = true;
            console.log('game is over');
            throw new Error("Something went badly wrong!");
        }
    }
}

const startInterval = () => {
    if (round < 10) { interval = 600 }
    else if (round < 20) { interval = 400 }
    else if (round < 30) { interval = 200 }
    else if (round >= 40) { interval = 100 }
    intervalId = window.setInterval(moveDownAutoNew, interval);
}

const quitInterval = () => {
    clearInterval(intervalId)
}

const randPiece = (a = Math.floor(Math.random() * 7)) => {
    nextPiece = JSON.parse(JSON.stringify(pieces[a]));
}

const clearLine = (filledBoxes) => {
    for (box of filledBoxes) {
        box.classList.remove('filled')
    }
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



// run functions

randPiece()


// event listeners

const keys = document.querySelector('body');
keys.addEventListener('keydown', function (e) {

    if (e.key == "ArrowLeft") { moveLeftNew() }
    else if (e.key == "Enter") { startGame() }
    else if (e.key == "ArrowRight") { moveRightNew() }
    else if (e.key == "ArrowDown") { moveDownNew() }
    else if (e.key == "ArrowUp") { rotatePiece() }
    else if (e.key.toLowerCase() == "q") { clearInterval(intervalId) }
})

const upBtn = document.querySelector('#upBtn');
upBtn.addEventListener('click', rotatePiece)

const leftBtn = document.querySelector('#leftBtn');
leftBtn.addEventListener('click', moveLeftNew)

const downBtn = document.querySelector('#downBtn');
downBtn.addEventListener('click', function () { moveDownNew() })

const rightBtn = document.querySelector('#rightBtn');
rightBtn.addEventListener('click', moveRightNew)

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', function () { startGame() })













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



