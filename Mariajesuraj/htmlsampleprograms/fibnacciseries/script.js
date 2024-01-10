document.getElementById("fibgenerate").addEventListener("click", function(){
    var fibinput = document.getElementById("fib");
      var fibresult = document.getElementById("result");
      var fiblistresult = document.getElementById("fib-demolist");
  var reg = new RegExp('^[0-9]+$');
      if(fibinput.value == "" || Number.isInteger(fibinput.value))
      {
          fibresult.innerHTML = "<strong>Please Enter the Number</strong>";
          fibinput.focus();
          return false;
      }
      fibresult.innerHTML = "Generated Fibonacci Results for " +fibinput.value;
      var f1 = 0;
      var f2 = 1;
      result = '<li>'+f1+'</li>';
      for(i=0; i < fibinput.value; i++ )
      {
          res = f1 + f2; 
          f1 = f2;
          f2 =  res;
          result += '<li>'+f1+'</li>';
      }
      fiblistresult.innerHTML = result;

      function calculateFinancialSeries() {
    const termInput = document.getElementById('termInput');
    const resultOutput = document.getElementById('resultOutput');
    resultOutput.innerHTML = ''; // Clear previous output

    let n = parseInt(termInput.value);

    if (!isNaN(n) && n >= 0) {
        const nthTerm = calculateNthTerm(n);
        resultOutput.textContent = `The ${n}th term of the financial series is: ${nthTerm}`;
    } else {
        alert('Please enter a valid non-negative number.');
    }
}

function calculateNthTerm(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prevTerm = 0;
    let currentTerm = 1;

    for (let i = 2; i <= n; i++) {
        const temp = currentTerm;
        currentTerm += prevTerm;
        prevTerm = temp;
    }

    return currentTerm;
}


}
);