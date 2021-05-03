//Joshua Sells, Assignment 4, JS file.

//Here is where I define all my functions.

//This is a function to clear whatever is in the display.
function clear() {
    DISPLAY.setAttribute("value", "");
    currentInput = "";
}

//This is a function to append to the display any buttons that have been clicked.
function appendDisplay(input) {
    //this only allows one operand to be type at a time.
    if ((currentInput.includes("+") || currentInput.includes("-") || currentInput.includes("*") || currentInput.includes("/")) &&
    (input == "+" || input == "-" || input == "*" ||input == "/")) {
        return;
    }
    else {
        //adds the button that was clicked to the display box.
        currentInput = currentInput + input;
        DISPLAY.setAttribute("value", currentInput);
    }
}

//This is a function to evaluate an expression.
//After it is evaluated, I reset the currentDiplay variable back to a string to prevent errors.
function compute() {
    //checks to see if we need to add.
    if (currentInput.includes("+")) {
        var components = currentInput.split("+")
        currentInput = Number(components[0]) + Number(components[1]);
        DISPLAY.setAttribute("value", currentInput);
        currentInput = currentInput.toString();
    } 
    //checks to see if we need to subtract.
    else if (currentInput.includes("-")) {
        var components = currentInput.split("-")
        currentInput = Number(components[0]) - Number(components[1]);
        DISPLAY.setAttribute("value", currentInput);
        currentInput = currentInput.toString();
    }
    //checks to see if we need to multiply.
    else if (currentInput.includes("*")) {
        var components = currentInput.split("*")
        currentInput = Number(components[0]) * Number(components[1]);
        DISPLAY.setAttribute("value", currentInput);
        currentInput = currentInput.toString();
    }
    //checks to see if we need to divide.
    else if (currentInput.includes("/")) {
        var components = currentInput.split("/")
        currentInput = Number(components[0]) / Number(components[1]);
        DISPLAY.setAttribute("value", currentInput);
        currentInput = currentInput.toString();
    }
}

//MAIN PROGRAM

//capture all the buttons as constants.
const NUMBERS = document.getElementsByClassName("digit");
const OPERATORS = document.getElementsByClassName("operator");
const DECIMAL = document.getElementsByClassName("decimal");
const CLEAR = document.getElementsByClassName("clear");
const EQUALS = document.getElementsByClassName("equal");
const DISPLAY = document.getElementById("display");

//declare the current display in a variable.
var currentInput = DISPLAY.getAttribute("value");

//listens for the numbers to be clicked.
for (var i = 0; i < NUMBERS.length; i++) {
    NUMBERS[i].addEventListener('click', function(){ appendDisplay(this.getAttribute("value")); }, false);
}

//listens for the operators to be clicked.
for (var i = 0; i < OPERATORS.length; i++) {
    OPERATORS[i].addEventListener('click', function(){ appendDisplay(this.getAttribute("value")); }, false);
}

//listens for the clear button being clicked and implements the clear function.
CLEAR[0].addEventListener('click', clear, false);

//listens for the decimal buttom being clicked.
DECIMAL[0].addEventListener('click', function(){ appendDisplay(this.getAttribute("value")); }, false);

//listens for the equal buttom being clicked and implements the compute function.
EQUALS[0].addEventListener('click', compute, false);