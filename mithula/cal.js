// JavaScript code
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let pendingInput = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value >= "0" && value <= "9" || value === ".") {
            currentInput += value;
        } else if (value === "C") {
            currentInput = "";
            pendingInput = "";
            operator = "";
        } else if (value === "=") {
            if (operator && pendingInput) {
                currentInput = operate(parseFloat(pendingInput), parseFloat(currentInput), operator);
                pendingInput = "";
                operator = "";
            }
        } else {
            if (operator && pendingInput) {
                currentInput = operate(parseFloat(pendingInput), parseFloat(currentInput), operator);
                pendingInput = currentInput;
                operator = value;
            } else {
                pendingInput = currentInput;
                operator = value;
                currentInput = "";
            }
        }

        display.value = currentInput;
    });
});

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return (a + b).toString();
        case "-":
            return (a - b).toString();
        case "*":
            return (a * b).toString();
        case "/":
            if (b === 0) {
                return "Error";
            }
            return (a / b).toString();
        default:
            return b.toString();
    }
}
