function generateFibonacci() {
    let number = document.getElementById("number").value;
    let fibonacci = [0, 1];
    for (let i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    document.getElementById("output").innerHTML = "The Fibonacci series for " + number + " is: " + fibonacci.join(", ");
  }
  