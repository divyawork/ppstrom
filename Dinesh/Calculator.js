document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners and calculator logic here

  // Function to append value to the display
  function appendToDisplay(value) {
      document.getElementById('display').value += value;
  }

  // Function to clear the display
  function clearDisplay() {
      document.getElementById('display').value = '';
  }

  // Function to calculate and display the result
  function calculate() {
      var result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
  }

  // Create calculator buttons dynamically
  var buttons = ['C', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'];

  var calculatorContainer = document.getElementById('calculator-container');

  buttons.forEach(function (buttonValue) {
      var button = document.createElement('button');
      button.textContent = buttonValue;

      // Assign appropriate functions to buttons
      if (buttonValue === 'C') {
          button.addEventListener('click', clearDisplay);
      } else if (buttonValue === '=') {
          button.className = 'equal';
          button.addEventListener('click', calculate);
      } else {
          if (!isNaN(buttonValue) || buttonValue === '.') {
              button.addEventListener('click', function () {
                  appendToDisplay(buttonValue);
              });
          } else {
              button.className = 'operator';
              button.addEventListener('click', function () {
                  appendToDisplay(buttonValue);
              });
          }
      }

      calculatorContainer.appendChild(button);
  });
});
