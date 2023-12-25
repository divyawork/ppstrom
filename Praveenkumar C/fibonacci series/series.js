function generateFibonacci() {
    const numInput = document.getElementById('numInput').value;
    
    if (!numInput || numInput <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    const resultDiv = document.getElementById('fibonacciResult');
    resultDiv.innerHTML = '';

    let fibSeries = [0, 1];
    let sum = 1; // Initialize sum with the second Fibonacci number (1)

    for (let i = 2; i < numInput; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
        sum += fibSeries[i];
    }

    resultDiv.innerHTML = `Fibonacci Series: ${fibSeries.join(', ')}<br>Sum of Fibonacci Series: ${sum}`;
}

function clearResult() {
    document.getElementById('numInput').value = '';
    document.getElementById('fibonacciResult').innerHTML = '';
}
