<<<<<<< HEAD
// This is a comment in JavaScript

// Variables
let name = "John";
let age = 30;

// Functions
function greet() {
  console.log("Hello, " + name + "!");
}

function calculateBirthYear() {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  return birthYear;
}

// Calling functions
greet();
const birthYear = calculateBirthYear();
console.log("You were born in " + birthYear + ".");
=======
// JavaScript within an HTML document
<script>
    function greet() {
        alert("Hello, World!");
    }
</script>

// External JavaScript file (script.js)
// script.js
function greet() {
    alert("Hello, World!");
}
>>>>>>> main
