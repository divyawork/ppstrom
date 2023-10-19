// script.js

// Function to display a message when the button is clicked
function displayMessage() {
    document.getElementById("outputMessage").innerHTML = "Hello, World!";
}

// Adding an event listener to the button
document.getElementById("myButton").addEventListener("click", displayMessage);