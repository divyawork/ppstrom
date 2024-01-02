let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.textContent = "0";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = "Error";
    }
}

// Create buttons dynamically
const buttonValues = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '=', '/'];
const buttons = document.querySelector(".buttons");

buttonValues.forEach((value) => {
    const button = document.createElement("button");
    button.textContent = value;
    button.className = "button";
    button.addEventListener("click", () => {
        if (value === "=") {
            calculateResult();
        } else if (value === "C") {
            clearDisplay();
        } else {
            appendToDisplay(value);
        }
    });
    buttons.appendChild(button);
});
