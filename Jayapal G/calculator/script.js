let expression = '';

function appendToDisplay(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}
