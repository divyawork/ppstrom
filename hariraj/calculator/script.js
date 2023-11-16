<<<<<<< HEAD
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
=======
let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
>>>>>>> main
}

function calculateResult() {
    try {
<<<<<<< HEAD
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
=======
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
>>>>>>> main
