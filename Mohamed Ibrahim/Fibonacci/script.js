// Get the elements from the html document
var input = document.getElementById("input");
var submit = document.getElementById("submit");
var clear = document.getElementById("clear");
var output = document.getElementById("output");

// Add an event listener to the submit button
submit.addEventListener("click", function () {
  // Call the calculate function
  calculate();
});

// Add an event listener to the clear button
clear.addEventListener("click", function () {
  // Clear the input and output fields
  input.value = "";
  output.innerHTML = "";
  // Hide the output border
  output.style.border = "none";
});

// Add an event listener to the input field
input.addEventListener("keyup", function (event) {
  // Check if the enter key was pressed
  if (event.keyCode === 13) {
    // Call the calculate function
    calculate();
  }
  // Check if the c key was pressed
  if (event.keyCode === 67) {
    // Call the clear function
    clear();
  }
});

// Define a function to calculate and display the Fibonacci series
function calculate() {
  // Clear the output div
  output.innerHTML = "";
  // Show the output border
  output.style.border = "2px solid yellow";
  // Get the input value
  var n = parseInt(input.value);
  // Validate the input
  if (isNaN(n) || n < 1) {
    output.innerHTML = "Please enter a positive integer.";
    return;
  }
  // Initialize the Fibonacci variables
  var a = 0; // First term
  var b = 1; // Second term
  var c; // Next term
  var steps = 0; // Number of steps
  var total = 0; // Total of the series
  // Loop until the nth term is reached
  while (steps < n) {
    // Display the current term
    output.innerHTML += a + "<br>";
    // Calculate the next term
    c = a + b;
    // Update the Fibonacci variables
    a = b;
    b = c;
    // Increment the steps
    steps++;
    // Add the current term to the total
    total += a;
  }
  // Display the final message
  output.innerHTML +=
    "The Fibonacci series of " + n + " terms is shown above.<br>";
  output.innerHTML +=
    "<span id='total'>The total of the Fibonacci series is " +
    total +
    ".</span>"; // This is the new span element to display the total message in green color
}

// Define a function to clear the input and output fields
function clear() {
  // Clear the input and output fields
  input.value = "";
  output.innerHTML = "";
  // Hide the output border
  output.style.border = "none";
}
