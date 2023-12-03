let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function performBackspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function undo() {
    currentInput = previousInput.slice(0, -1);
    display.value = previousInput;
  }

// Listen for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Allow digits, operators, Enter key, and backspace
    if (/[0-9+\-*/= Backspace \n\b]/.test(key)) {
        event.preventDefault();

        if (key === 'Enter') {
            calculateResult();
            return;
        } 
        else if (key === 'Backspace') {
            performBackspace();
            return;
        }
        else if (key === 'Escape') {
            clearDisplay();
            return;
        }
        else if (key === 'Delete') {
            performBackspace();
            return;
        }
        else if (key === 'z') {
            undo();
            return;              
        }

        appendValue(key);
    }
});
