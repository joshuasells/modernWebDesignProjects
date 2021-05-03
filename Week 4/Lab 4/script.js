//define functions.
        
//increment function.
function increment() {
    displayValue = Number(displayValue);
    displayValue++;
    DISPLAY.setAttribute("value", displayValue);
}
//decrement function.
function decrement() {
    displayValue = Number(displayValue);
    displayValue--;
    DISPLAY.setAttribute("value", displayValue);
}

//define variables.
const DISPLAY = document.getElementById("text-box");
const PLUS = document.getElementById("plus");
const MINUS = document.getElementById("minus");
var displayValue = DISPLAY.getAttribute("value");

//listen for each button to be clicked.
PLUS.addEventListener("click", increment, false);
MINUS.addEventListener("click", decrement, false);