// get the elements from the html file
var input = document.getElementById("input");
var submit = document.getElementById("submit");
var clear = document.getElementById("clear");
var result = document.getElementById("result");

// define a function to calculate the Fibonacci series
function fibonacci(n) {
    // initialize an array to store the series
    var series = [];
    // loop from 0 to n
    for (var i = 0; i <= n; i++) {
        // if i is 0 or 1, push 1 to the series
        if (i == 0 || i == 1) {
            series.push(1);
        } else {
            // otherwise, push the sum of the previous two numbers to the series
            series.push(series[i - 1] + series[i - 2]);
        }
    }
    // return the series
    return series;
}

// define a function to display the result
function displayResult() {
    // get the value of the input
    var n = input.value;
    // check if the input is a positive integer
    if (n > 0 && n % 1 == 0) {
        // calculate the Fibonacci series
        var series = fibonacci(n);
        // calculate the total sum of the series
        var sum = series.reduce((a, b) => a + b, 0);
        // create a string to store the output
        var output = "";
        // loop through the series
        for (var i = 0; i < series.length; i++) {
            // add the current number and a comma to the output
            output += series[i] + ", ";
        }
        // remove the last comma and space from the output
        output = output.slice(0, -2);
        // add a line break and the sum to the output
        output += "\nTotal: " + sum;
        // show the result box
        result.style.display = "block";
        // set the result box's content to the output
        result.textContent = output;
    } else {
        // if the input is not a positive integer, alert the user
        alert("Please enter a positive integer.");
    }
}

// define a function to clear the input and output
function clearResult() {
    // clear the input value
    input.value = "";
    // hide the result box
    result.style.display = "none";
    // clear the result box's content
    result.textContent = "";
}

// add an event listener to the submit button
submit.addEventListener("click", displayResult);

// add an event listener to the clear button
clear.addEventListener("click", clearResult);
