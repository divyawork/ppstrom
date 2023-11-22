const display = document.getElementById('display');
let currentInput = '';

function addToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculate() {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = '';
  } catch (error) {
    display.value = 'Error';
  }
}

document.querySelectorAll('.keys button').forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('data-value');
    if (buttonValue === '=') {
      calculate();
    } else if (buttonValue === 'C') {
      clearDisplay();
    } else {
      addToDisplay(buttonValue);
    }
  });
});
