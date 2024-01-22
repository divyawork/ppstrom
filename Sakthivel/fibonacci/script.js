// Function to generate Fibonacci series
function generateFibonacci() {
    const count = parseInt(document.getElementById('fibonacci-count').value);
  
    if (isNaN(count) || count <= 0) {
      alert('Please enter a valid count.');
      return;
    }
  
    let series = [0, 1];
  
    for (let i = 2; i < count; i++) {
      series[i] = series[i - 1] + series[i - 2];
    }
  
    document.getElementById('fibonacci-series').innerHTML = `Fibonacci Series: ${series.join(', ')}`;
  }
  
  // Function to calculate the nth Fibonacci number
  function calculateNthFibonacci() {
    const number = parseInt(document.getElementById('nth-fibonacci-number').value);
  
    if (isNaN(number) || number <= 0) {
      alert('Please enter a valid number.');
      return;
    }
  
    let a = 0, b = 1;
  
    for (let i = 2; i < number; i++) {
      let temp = a + b;
      c=a
      a = b;
      b = temp;
    }
  
    document.getElementById('nth-fibonacci').innerHTML = `The ${number}th Fibonacci Number is: ${b}`;
  }
  
  // Function to check if a number is Fibonacci
  function checkIfFibonacci() {
    const number = parseInt(document.getElementById('check-fibonacci-number').value);
  
    if (isNaN(number) || number < 0) {
      alert('Please enter a valid number.');
      return;
    }
  
    let a = 0, b = 1;
  
    while (b < number) {
      let temp = a + b;
      a = b;
      b = temp;
    }
  
    const isFibonacci = b === number;
  
    document.getElementById('fibonacci-check').innerHTML = isFibonacci
      ? `${number} is a Fibonacci number.`
      : `${number} is not a Fibonacci number.`;
  }
  
  