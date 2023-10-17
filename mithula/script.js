// script.js
const button = document.getElementById("clickMeButton");
const output = document.getElementById("outputText");

button.addEventListener("click", function() {
    output.textContent = "Hello from JavaScript!";
});
