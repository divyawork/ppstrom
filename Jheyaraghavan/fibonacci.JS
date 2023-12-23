function generateFibonacci() {
  var termsInput = document.getElementById("terms");
  var terms = parseInt(termsInput.value);

  if (isNaN(terms) || terms <= 0) {
    alert("Please enter a valid positive type your number.");
    return;
  }

  var series = [0, 1];

  for (var i = 2; i < terms; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  document.getElementById("result").innerText = series.join(", ");
}
