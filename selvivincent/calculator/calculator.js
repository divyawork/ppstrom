document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  let currentVal = '';
  let firstVal = null;
  let operator = null;

  document.querySelector('.keys').addEventListener('click', function(event) {
    const element = event.target;
    const value = element.dataset.value;

    if (!element.matches('button')) return;

    if (value === 'C') {
      clearDisplay();
    } else if (value === '=') {
      calculate();
    } else if (value === '+/-') {
      negate();
    } else if (value === '!') {
      factorial();
    } else if ('+-*/^'.includes(value)) {
      handleOperator(value);
    } else {
      currentVal += value;
      display.value = currentVal;
    }
  });

  function clearDisplay() {
    currentVal = '';
    firstVal = null;
    operator = null;
    display.value = '';
  }

  function calculate() {
    if (operator && currentVal !== '') {
      const secondVal = parseFloat(currentVal);
      switch (operator) {
        case '+':
          currentVal = firstVal + secondVal;
          break;
        case '-':
          currentVal = firstVal - secondVal;
          break;
        case '*':
          currentVal = firstVal * secondVal;
          break;
        case '/':
          currentVal = firstVal / secondVal;
          break;
        case '^':
          currentVal = Math.pow(firstVal, secondVal);
          break;
      }
      display.value = currentVal;
      firstVal = parseFloat(currentVal);
      operator = null;
    }
  }

  function handleOperator(value) {
    if (currentVal !== '') {
      if (firstVal === null) {
        firstVal = parseFloat(currentVal);
      } else {
        calculate();
      }
      operator = value;
      currentVal = '';
    }
  }

  function negate() {
    if (currentVal !== '') {
      currentVal = -parseFloat(currentVal);
      display.value = currentVal;
    }
  }

  function factorial() {
    if (currentVal !== '') {
      const num = parseInt(currentVal);
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      currentVal = result;
      display.value = currentVal;
    }
  }
});
