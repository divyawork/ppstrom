document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operator = "";
    let firstOperand = null;

    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick(event) {
        const buttonText = event.target.innerText;

        if (isNumber(buttonText) || buttonText === ".") {
            handleNumberClick(buttonText);
        } else if (isOperator(buttonText)) {
            handleOperatorClick(buttonText);
        } else if (buttonText === "=") {
            handleEqualClick();
        } else if (buttonText === "C") {
            handleClearClick();
        }
    }

    function isNumber(value) {
        return !isNaN(value) && value !== ".";
    }

    function isOperator(value) {
        return ["+", "-", "*", "/"].includes(value);
    }

    function handleNumberClick(value) {
        currentInput += value;
        updateDisplay();
    }

    function handleOperatorClick(value) {
        if (currentInput !== "") {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
                operator = value;
                currentInput = "";
            } else {
                handleEqualClick();
                operator = value;
            }
        }
    }

    function handleEqualClick() {
        if (currentInput !== "") {
            const secondOperand = parseFloat(currentInput);
            switch (operator) {
                case "+":
                    currentInput = (firstOperand + secondOperand).toString();
                    break;
                case "-":
                    currentInput = (firstOperand - secondOperand).toString();
                    break;
                case "*":
                    currentInput = (firstOperand * secondOperand).toString();
                    break;
                case "/":
                    if (secondOperand !== 0) {
                        currentInput = (firstOperand / secondOperand).toString();
                    } else {
                        currentInput = "Error";
                    }
                    break;
                default:
                    break;
            }

            operator = "";
            firstOperand = null;
            updateDisplay();
        }
    }

    function handleClearClick() {
        currentInput = "";
        operator = "";
        firstOperand = null;
        updateDisplay();
    }

    function updateDisplay() {
        display.innerText = currentInput;
    }
});
