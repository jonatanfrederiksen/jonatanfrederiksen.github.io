const values = {
    firstVal: "",
    secondVal: "",
    activeFunc: ""
}

// top display
const display = document.querySelector('#display')

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
    else if (values.firstVal.includes(".") && num == "." && !values.activeFunc) { }
    else if (!values.firstVal) {
        values.firstVal = num.toString();
        display.innerText = values.firstVal;
    }
    else if (values.firstVal && !values.activeFunc) {
        values.firstVal = `${values.firstVal}${num}`;
        display.innerText = values.firstVal;
    }
    else if (!values.secondVal && num == 0) { }
    else if (values.secondVal.includes(".") && num == ".") { }
    else if (values.activeFunc && !values.secondVal) {
        values.secondVal = num.toString();
        display.innerText = values.secondVal;
    }
    else {
        values.secondVal = `${values.secondVal}${num}`;
        display.innerText = values.secondVal;
    }
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
const pressDot = () => { addNumToValues('.') }

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
    display.innerText = "0";
}

const resetNum = () => {
    values.firstVal = "";
    values.secondVal = "";
}

const resetSecNum = () => {
    values.secondVal = "";
}


// func functions
const del = () => {
    if (values.secondVal) {
        values.secondVal.slice(0, -1)
        display.innerText = values.secondVal;
    }
    else if (values.firstVal) {
        values.firstVal.slice(0, -1)
        display.innerText = values.firstVal;
    }
}

const plus = () => {
    values.activeFunc = (a, b) => { return a + b; }
    if (values.secondVal) { calc() }
}

const minus = () => {
    values.activeFunc = (a, b) => { return a - b }
    if (values.secondVal) { calc() }
}

const divide = () => {
    values.activeFunc = (a, b) => { return a / b; }
    if (values.secondVal) { calc() }
}

const multiply = () => {
    values.activeFunc = (a, b) => { return a * b; }
    if (values.secondVal) { calc() }
}

const calc = () => {
    if (values.secondVal) {
        let val = values.activeFunc(parseFloat(values.firstVal), parseFloat(values.secondVal));
        values.firstVal = val.toString();
        display.innerText = val;
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