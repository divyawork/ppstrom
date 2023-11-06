let displayValue = '';
let operator = '';
let prevValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function appendOperator(value) {
    if (operator) {
        calculateResult();
    }
    operator = value;
    prevValue = displayValue;
    displayValue = '';
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    prevValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (prevValue && operator && displayValue) {
        const num1 = parseFloat(prevValue);
        const num2 = parseFloat(displayValue);
        switch (operator) {
            case '+':
                displayValue = num1 + num2;
                break;
            case '-':
                displayValue = num1 - num2;
                break;
            case '*':
                displayValue = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    displayValue = num1 / num2;
                } else {
                    displayValue = 'Error';
                }
                break;
        }
        operator = '';
        prevValue = '';
        document.getElementById('display').value = displayValue;
    }
}
