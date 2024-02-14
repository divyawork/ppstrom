document.addEventListener("DOMContentLoaded", function() {
    const fibonacciContainer = document.getElementById("fibonacci-container");
    const fibonacciOutput = document.getElementById("fibonacci-output");
    const startCheckbox = document.getElementById("startCheckbox");
    const startNumberInput = document.getElementById("startNumberInput");

    function generateFibonacciSeries(start, n) {
        let fibSeries = [];
        for (let i = 0; i < n; i++) {
            fibSeries.push(fibonacci(start + i));
        }
        return fibSeries;
    }

    function fibonacci(num) {
        return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
    }

    function updateFibonacciOutput(start, n) {
        const fibSeries = generateFibonacciSeries(start, n);
        fibonacciOutput.textContent = fibSeries.join(', ');
    }

    function changeBackgroundColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        fibonacciContainer.style.backgroundColor = randomColor;
    }

    // Event listener for checkbox state change
    startCheckbox.addEventListener("change", function() {
        startNumberInput.disabled = !startCheckbox.checked;
        if (startCheckbox.checked) {
            updateFibonacciOutput(Number(startNumberInput.value), numberOfTerms);
        } else {
            updateFibonacciOutput(0, numberOfTerms);
        }
        changeBackgroundColor();
    });

    // Event listener for input change
    startNumberInput.addEventListener("input", function() {
        if (startCheckbox.checked) {
            updateFibonacciOutput(Number(startNumberInput.value), numberOfTerms);
            changeBackgroundColor();
        }
    });

    // Display Fibonacci series with changing background color
    const numberOfTerms = 10; // Change this to the desired number of Fibonacci terms
    updateFibonacciOutput(0, numberOfTerms);
    changeBackgroundColor();

    // You can add event listeners or other functionality as needed
});
