const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equal");

let operation = null;

function appendNumber(number){
    if (number === "." && currDisplay.innerText.includes(".")) 
        return;
    currDisplay.innerText += number;
}

function chooseOperation (operand){
    if (currDisplay.innerText === "") return;
    if (prevDisplay.innerText !== "") {
        compute(operation);
    }
    operation = operand;
    prevDisplay.innerText = currDisplay.innerText + " " + operation;
    currDisplay.innerText = "";
}

function clearDisplay(){
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
    operation = null;
}

function compute(operand){
    let result;
    const prevValue = parseFloat(prevDisplay.innerText);
    const currValue = parseFloat(currDisplay.innerText);
    if (isNaN(prevValue) || isNaN(currValue)) return;
    switch (operand) {
        case "+":
            result = prevValue + currValue;
            break;
        case "-":
            result = prevValue - currValue;
            break;
        case "*":
            result = prevValue * currValue;
            break;
        case "/":
            result = prevValue / currValue;
            break;
        default:
            return;
    }
    currDisplay.innerText = result;
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.innerText);
    });
});

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        chooseOperation(operand.innerText);
    });
});

clearButton.addEventListener("click", () => {
    clearDisplay();
});

equalsButton.addEventListener("click", () => {
    compute(operation);
    prevDisplay.innerText = "";
    operation = null;
});

deleteButton.addEventListener("click", () => {
    currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});
