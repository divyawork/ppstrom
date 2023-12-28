const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    output = evaluateExpression(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    clearDisplay();
  } else if (btnValue === "DEL") {
    deleteLastCharacter();
  } else {
    handleInput(btnValue);
  }

  display.value = output;
};

const evaluateExpression = (expression) => {
  try {
    const result = Function(`'use strict'; return (${expression})`)();
    return String(result);
  } catch (error) {
    return "Error";
  }
};

const clearDisplay = () => {
  output = "";
};

const deleteLastCharacter = () => {
  output = output.slice(0, -1);
};

const handleInput = (btnValue) => {
  if (output === "" && specialChars.includes(btnValue)) return;
  output += btnValue;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

// Add keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "%", "*", "/", "-", "+", "=", "Enter", "Backspace"];
  
  if (validKeys.includes(key)) {
    e.preventDefault(); // prevent the default action of the key press

    if (key === "Enter") {
      calculate("=");
    } else if (key === "Backspace") {
      calculate("DEL");
    } else {
      calculate(key);
    }
  }
});
