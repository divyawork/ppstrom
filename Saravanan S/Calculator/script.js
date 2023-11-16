let displayValue = '';

function appendValue(val) {
  displayValue += val;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = String(result);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
