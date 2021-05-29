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

let activePos = [];
let nextPiece = [];
let intervalId = ""
let round = 0;


// functions

const startInterval = () => {
    intervalId = window.setInterval(moveDownAuto, 1000);
}

const quitInterval = () => { clearInterval(intervalId) }

const randPiece = () => {
    const type = Math.floor(Math.random() * 7)
    nextPiece = pieces[type].position
}

const newPiece = function (piece = pieces[3].position) {
    for (box of piece) {
        console.log(`newPos: y: ${this.box.y}, x: ${this.box.x}`)
        activePos.push(this.box)
        document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'green';
    };
    startInterval();
}

const solidifyPieces = (piece = activePos) => {
    for (box of piece) {
        document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = "";
        document.querySelector(`#y${this.box.y}x${this.box.x}`).classList.add('filled');
    }
    activePos = [];
}

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
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'green';
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
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'green';
        }
    }
}

const moveLeft = (piece = activePos) => {
    let validate = true
    for (box of piece) {
        if (parseInt(this.box.x) <= 0) {
            validate = false
        }
    }
    if (validate) {
        for (box of piece) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'black';
            let newX = parseInt(this.box.x) - 1;
            this.box.x = newX.toString();
            console.log(`moveLeft: y: ${this.box.y}, x: ${this.box.x}`)
        }
        for (box of piece) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'green';
        }
    }
}

const moveRight = (piece = activePos) => {
    let validate = true
    for (box of piece) {
        if (parseInt(this.box.x) >= 9) {
            validate = false
        }
    }
    if (validate) {
        for (box of piece) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'black';
            let newX = parseInt(this.box.x) + 1;
            this.box.x = newX.toString();
            console.log(`moveRight: y: ${this.box.y}, x: ${this.box.x}`)
        }
        for (box of piece) {
            document.querySelector(`#y${this.box.y}x${this.box.x}`).style.backgroundColor = 'green';
        }
    }
}



// run functions

randPiece()





// event listeners

const button = document.querySelector('button');
button.addEventListener('click', function () { newPiece() })

const keys = document.querySelector('body');
keys.addEventListener('keydown', function (e) {

    if (e.key == "ArrowLeft") { moveLeft() }
    else if (e.key == "ArrowRight") { moveRight() }
    else if (e.key == "ArrowDown") { moveDown() }
    else if (e.key.toLowerCase() == "q") { clearInterval(intervalId) }
})
