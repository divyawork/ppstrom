let currentInput = '';
let previousInput = '';
let operation = '';

function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function setOperation(operator) {
  if (currentInput !== '') {
    if (previousInput !== '') {
      calculate();
    }
    previousInput = currentInput;
    currentInput = '';
    operation = operator;
  }
}

function calculate() {
  let result;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  if (!isNaN(num1) && !isNaN(num2)) {
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        break;
    }

    currentInput = result.toString();
    previousInput = '';
    operation = '';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput || '0';
}