//predefined tetris pieces
const pieces = [
    {
        name: 'I',
        position: [{
            y: "0",
            x: "3"
        },
        {
            y: "0",
            x: "4"
        },
        {
            y: "0",
            x: "5"
        },
        {
            y: "0",
            x: "6"
        }],
        color: 'turquoise'
    },
    {
        name: 'J',
        position: [{
            y: "0",
            x: "4"
        },
        {
            y: "1",
            x: "4"
        },
        {
            y: "1",
            x: "5"
        },
        {
            y: "1",
            x: "6"
        }],
        color: 'blue'
    },
    {
        name: 'L',
        position: [{
            y: "1",
            x: "4"
        },
        {
            y: "1",
            x: "5"
        },
        {
            y: "1",
            x: "6"
        },
        {
            y: "0",
            x: "6"
        }],
        color: 'orange'
    },
    {
        name: 'O',
        position: [{
            y: "1",
            x: "4"
        },
        {
            y: "1",
            x: "5"
        },
        {
            y: "0",
            x: "4"
        },
        {
            y: "0",
            x: "5"
        }],
        color: 'yellow'
    },
    {
        name: 'S',
        position: [{
            y: "0",
            x: "4"
        },
        {
            y: "0",
            x: "5"
        },
        {
            y: "1",
            x: "3"
        },
        {
            y: "1",
            x: "4"
        }],
        color: 'green'
    },
    {
        name: 'T',
        position: [{
            y: "0",
            x: "5"
        },
        {
            y: "1",
            x: "4"
        },
        {
            y: "1",
            x: "5"
        },
        {
            y: "1",
            x: "6"
        }],
        color: 'purple'
    },
    {
        name: 'Z',
        position: [{
            y: "0",
            x: "3"
        },
        {
            y: "0",
            x: "4"
        },
        {
            y: "1",
            x: "4"
        },
        {
            y: "1",
            x: "5"
        }],
        color: 'turquoise'
    }
]


//needed values

let activePos = []
let nextPiece = {};
let intervalId = ""
let round = 0;
let gameOver = true
let interval = 0
let currentColor = 'green'


// functions

const startInterval = () => {
    if (round < 10) { interval = 600 }
    else if (round < 20) { interval = 400 }
    else if (round < 30) { interval = 200 }
    else if (round >= 40) { interval = 100 }
    intervalId = window.setInterval(moveDownAuto, interval);
}

const quitInterval = () => { clearInterval(intervalId) }

const randPiece = () => {
    nextPiece = JSON.parse(JSON.stringify(pieces[Math.floor(Math.random() * 7)]));
}

const newPiece = function (piece = nextPiece.position) {
    for (box of piece) {
        console.log(`newPos: y: ${this.box.y}, x: ${this.box.x}`)
        activePos.push(this.box)
        document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = activePos.color;
    };
    currentColor = nextPiece.color;
    round++;
    startInterval();
}

const solidifyPieces = (piece = activePos) => {
    for (box of piece) {
        document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = "";
        document.querySelector(`#y${this.box.y}x${this.box.x}`).classList.add('filled');
    }
    quitInterval();
    activePos = [];
    randPiece();
    let gameOverCheck = document.querySelectorAll('.gameOverCheck')
}


// const startGame


const moveDown = (piece = activePos) => {
    let validate = true
    for (box of piece) {
        if (parseInt(this.box.y) >= 20 || document.querySelector(`#y${parseInt(this.box.y) + 1}x${this.box.x}`).classList.contains('filled')) {
            validate = false
        }
    }
    if (validate) {
        for (box of piece) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'black';
            let newY = parseInt(this.box.y) + 1;
            this.box.y = newY.toString();
            console.log(`moveDown: y: ${this.box.y}, x: ${this.box.x}`)
        }
        for (box of piece) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = currentColor;
        }
    }
}

const moveDownAuto = (piece = activePos) => {
    let validate = true
    for (box of piece) {
        if (parseInt(this.box.y) >= 20 || document.querySelector(`#y${parseInt(this.box.y) + 1}x${this.box.x}`).classList.contains('filled')) {
            validate = false
            solidifyPieces()
        }
    }
    if (validate) {
        for (box of piece) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'black';
            let newY = parseInt(this.box.y) + 1;
            this.box.y = newY.toString();
            console.log(`moveDown: y: ${this.box.y}, x: ${this.box.x}`)
        }
        for (box of piece) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = currentColor;
        }
    }
    else if (!validate) { newPiece() }
}


const moveDownComplete = () => {
    while (activePos) {
        moveDownAuto()
    }
}


const moveLeft = () => {
    let validate = true
    for (box of activePos) {
        if (parseInt(this.box.x) <= 0 || document.querySelector(`#y${this.box.y}x${parseInt(this.box.x) - 1}`).classList.contains('filled')) {
            validate = false
        }
    }
    if (validate) {
        for (box of activePos) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'black';
            let newX = parseInt(this.box.x) - 1;
            this.box.x = newX.toString();
            console.log(`moveLeft: y: ${this.box.y}, x: ${this.box.x}`)
        }
        for (box of activePos) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = currentColor;
        }
    }
}

const moveRight = () => {
    let validate = true
    for (box of activePos) {
        if (parseInt(this.box.x) >= 9 || document.querySelector(`#y${this.box.y}x${parseInt(this.box.x) + 1}`).classList.contains('filled')) {
            validate = false
        }
    }
    if (validate) {
        for (box of activePos) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'black';
            let newX = parseInt(this.box.x) + 1;
            this.box.x = newX.toString();
            console.log(`moveRight: y: ${this.box.y}, x: ${this.box.x}`)
        }
        for (box of activePos) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = currentColor;
        }
    }
}



// run functions

randPiece()





// event listeners

const keys = document.querySelector('body');
keys.addEventListener('keydown', function (e) {

    if (e.key == "ArrowLeft") { moveLeft() }
    else if (e.key == "ArrowRight") { moveRight() }
    else if (e.key == "ArrowDown") { moveDown() }
    else if (e.key.toLowerCase() == "q") { clearInterval(intervalId) }
})

const upBtn = document.querySelector('#upBtn');
// upBtn.addEventListener('click', )

const leftBtn = document.querySelector('#leftBtn');
leftBtn.addEventListener('click', moveLeft)

const downBtn = document.querySelector('#downBtn');
downBtn.addEventListener('click', moveDown)

const rightBtn = document.querySelector('#rightBtn');
rightBtn.addEventListener('click', moveRight)

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', function () { newPiece() })