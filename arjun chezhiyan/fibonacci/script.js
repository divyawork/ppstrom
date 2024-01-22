function generateFibonacciSeries() {
    var numInput = document.getElementById('num-input');
    var resultElement = document.getElementById('result');

    var length = parseInt(numInput.value);

    if (isNaN(length) || length < 1) {
        resultElement.textContent = 'Please enter a valid length.';
    } else {
        var series = generateSeries(length);
        resultElement.textContent = 'Fibonacci Series: ' + series.join(', ');
    }
}

function generateSeries(length) {
    var series = [0, 1];

    for (var i = 2; i < length; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }

    return series;
}
