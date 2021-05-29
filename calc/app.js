const values = {
    firstVal: "",
    secondVal: "",
    calcSecond: "",
    activeFunc: ""
}

// top display
const display = document.querySelector('#display')



//display updates
const addToDisplay = (a) => {
    display.innerText = `${display.innerText},`;
}

const updateDisplay = (num) => {
    newValue = Number(parseFloat(num).toFixed(2)).toLocaleString('da');
    display.innerText = newValue;
}

// number buttons 
const zero = document.getElementById('0')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const dot = document.getElementById('dot')

// add to values
const addNumToValues = (num) => {
    if (!values.firstVal && num == 0) { }
    else if (!values.firstVal) {
        values.firstVal = num.toString();
        updateDisplay(values.firstVal);
    }
    else if (values.firstVal && !values.activeFunc) {
        values.firstVal = `${values.firstVal}${num}`;
        updateDisplay(values.firstVal);
    }
    else if (!values.secondVal && num == 0) { }
    else if (values.activeFunc && !values.secondVal) {
        values.secondVal = num.toString();
        updateDisplay(values.secondVal);
    }
    else {
        values.secondVal = `${values.secondVal}${num}`;
        updateDisplay(values.secondVal);
    }
}


//remove active button state
const removeToggle = (btn) => {
    plusBtn.classList.remove("toggle");
    minusBtn.classList.remove("toggle");
    multiplyBtn.classList.remove("toggle");
    divideBtn.classList.remove("toggle");
}


// pressing functions
const pressZero = () => { addNumToValues(0) }
const pressOne = () => { addNumToValues(1) }
const pressTwo = () => { addNumToValues(2) }
const pressThree = () => { addNumToValues(3) }
const pressFour = () => { addNumToValues(4) }
const pressFive = () => { addNumToValues(5) }
const pressSix = () => { addNumToValues(6) }
const pressSeven = () => { addNumToValues(7) }
const pressEight = () => { addNumToValues(8) }
const pressNine = () => { addNumToValues(9) }

const pressDot = () => {
    if (values.firstVal.includes(".") && !values.activeFunc) { }
    else if (!values.activeFunc) {
        values.firstVal = `${values.firstVal}.`;
        addToDisplay(".")
    }
    else if (values.secondVal.includes(".")) { }
    else if (values.activeFunc) {
        values.secondVal = `${values.secondVal}.`;
        addToDisplay(".")
    }
}

// number eventlisteners
zero.addEventListener('click', pressZero)
one.addEventListener('click', pressOne)
two.addEventListener('click', pressTwo)
three.addEventListener('click', pressThree)
four.addEventListener('click', pressFour)
five.addEventListener('click', pressFive)
six.addEventListener('click', pressSix)
seven.addEventListener('click', pressSeven)
eight.addEventListener('click', pressEight)
nine.addEventListener('click', pressNine)
dot.addEventListener('click', pressDot)

// look for keypresses.


//reset functions
const resetAll = () => {
    values.firstVal = "";
    values.secondVal = "";
    values.activeFunc = "";
    updateDisplay(0);;
    removeToggle();
}

const resetSecNum = () => {
    values.secondVal = "";
}


// func functions
const del = () => {
    if (values.secondVal.length == 1) {
        values.secondVal = "0";
        updateDisplay(values.secondVal);
    }
    else if (values.secondVal) {
        values.secondVal = values.secondVal.slice(0, -1);
        updateDisplay(values.secondVal);
    }
    if (values.firstVal.length == 1) {
        values.firstVal = "0";
        updateDisplay(values.firstVal);
    }
    else if (values.firstVal) {
        values.firstVal = values.firstVal.slice(0, -1);
        updateDisplay(values.firstVal);
    }
}

const colorHighlight = (btnToChange) => {
    let btns = ['plus', 'minus', 'divide', 'multiply']
    let btn = btns.splice(btns.indexOf(btnToChange), 1).toString();
    document.querySelector(`#${btn}`).classList.add('buttonHighlight')
    for (btn of btns) {
        document.querySelector(`#${btn}`).classList.remove('buttonHighlight')

    }
}


const plus = () => {
    values.activeFunc = (a, b) => { return a + b; };
    removeToggle();
    plusBtn.classList.add('toggle')
    if (values.secondVal) { calc() };
    colorHighlight('plus')
}

const minus = () => {
    values.activeFunc = (a, b) => { return a - b }
    removeToggle();
    minusBtn.classList.add('toggle')
    if (values.secondVal) { calc() }
    colorHighlight('minus')
}

const divide = () => {
    values.activeFunc = (a, b) => { return a / b; }
    removeToggle();
    divideBtn.classList.add('toggle')
    if (values.secondVal) { calc() }
    colorHighlight('divide')
}

const multiply = () => {
    values.activeFunc = (a, b) => { return a * b; }
    removeToggle();
    multiplyBtn.classList.add('toggle')
    if (values.secondVal) { calc() }
    colorHighlight('multiply')
}

const calc = () => {
    if (values.secondVal) {
        values.calcSecond = values.secondVal;
        resetSecNum();
    };
    if (values.calcSecond) {
        let val = values.activeFunc(parseFloat(values.firstVal), parseFloat(values.calcSecond));
        values.firstVal = val.toString();
        updateDisplay(val);
    }
}


// func buttons
const delBtn = document.getElementById('del')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')
const resetBtn = document.getElementById('reset')
const calcBtn = document.getElementById('calc')


//func buttons eventlisteners
delBtn.addEventListener('click', del)

plusBtn.addEventListener('click', plus)
plusBtn.addEventListener('click', resetSecNum)

minusBtn.addEventListener('click', minus)
minusBtn.addEventListener('click', resetSecNum)

divideBtn.addEventListener('click', divide)
divideBtn.addEventListener('click', resetSecNum)

multiplyBtn.addEventListener('click', multiply)
multiplyBtn.addEventListener('click', resetSecNum)

resetBtn.addEventListener('click', resetAll)

calcBtn.addEventListener('click', calc)



const keys = document.querySelector('body');
keys.addEventListener('keydown', function (e) {

    if (e.key == "0") { pressZero() }
    else if (e.key == "1") { pressOne() }
    else if (e.key == "2") { pressTwo() }
    else if (e.key == "3") { pressThree() }
    else if (e.key == "4") { pressFour() }
    else if (e.key == "5") { pressFive() }
    else if (e.key == "6") { pressSix() }
    else if (e.key == "7") { pressSeven() }
    else if (e.key == "8") { pressEight() }
    else if (e.key == "9") { pressNine() }
    else if (e.key == ".") { pressDot() }
    else if (e.key == ",") { pressDot() }
    else if (e.key == "+") { plus() }
    else if (e.key == "-") { minus() }
    else if (e.key == "*") { multiply() }
    else if (e.key == "/") { divide() }
    else if (e.key == "Enter") { calc() }
    else if (e.key == "Backspace") { del() }
    else if (e.key == "c") { resetAll() }
})
