

function generateFibonacci() {
    let result = document.getElementById("result");
    result.textContent = ""; // Clear previous results

    let limit = prompt("Enter the limit for Fibonacci series:");
    limit = parseInt(limit);

    let fibArray = [0, 1];

    for (let i = 2; i < limit; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    result.textContent = "Fibonacci Series: " + fibArray.join(", ");
}
