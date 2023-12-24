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
    displayValue += ` ${operator} `;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    prevValue = '';
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    if (prevValue && operator && displayValue) {
        const expression = prevValue + ' ' + operator + ' ' + displayValue.split(' ').pop();
        try {
            displayValue = eval(expression);
            operator = '';
            prevValue = '';
            document.getElementById('display').value = displayValue;
        } catch (error) {
            displayValue = 'Error';
            operator = '';
            prevValue = '';
            document.getElementById('display').value = displayValue;
        }
    }
}

function calculatePercentage() {
    displayValue = eval(displayValue) / 100;
    document.getElementById('display').value = displayValue;
}
