// This is a JavaScript comment

// Define a function
function greet(name) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, world!");
  }
}

// Call the function
greet("Alice");
greet("Bob");
greet(); // This will use the default "Hello, world!"

// Create an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello: function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  },
};

// Call a method on the object
person.sayHello();

// Use a conditional statement
const temperature = 25;
if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20) {
  console.log("It's a nice day.");
} else {
  console.log("It's a cold day.");
}

// Create an array
const fruits = ["apple", "banana", "cherry"];

// Loop through the array
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Use a modern for...of loop
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}
