// self-invoking anonymous function
(function() {
	"use strict";
	// Local scope vars (elements)
	var slider, submit, display, list, reset;

	/*
	* Fibonacci Sequence (http://en.wikipedia.org/wiki/Fibonacci_number)
	*
	* The Fibonacci Sequence is a sequence of numbers where each subsequent number
	* is the sum of the previous two.
	*
	* The function below takes in a number n and returns the Fibonacci sequence to
	* the nth number.
	*/

	function fibonacci(n) {
		var i, sequence = [1, 1]; // We start our sequence at [1, 1]
		for (i = 1; i < n; i++)
			sequence.push(sequence[i] + sequence[i - 1]);
		return sequence;
	}

	// initialize
	function init() {
		// Grab elements
		slider = document.getElementById("slider");
		submit = document.getElementById("submit");
		display = document.getElementById("display");
		list = document.getElementById("list");
		reset = document.getElementById("reset");
		// display change in value on input changed
		slider.addEventListener("input", updateNum, false);
		// print Fibonacci Sequence
		submit.addEventListener("click", printSequence, false);
		// reset Fibonacci Sequence
		reset.addEventListener("click", removePrevious, false);
		// set inital display value
		slider.value=27;
		updateNum();
	}

	// Display the Fibonacci sequence
	function printSequence(e) {
		var i, textNode, sequence;
		// prevent default submit behavior
		e.preventDefault();
		// remove any previous sequence elements
		removePrevious();
		// Get Fibonacci sequence
		sequence = fibonacci(slider.value);
		// Create child <li>'s
		sequence.forEach(function(i, idx) {
			var li = document.createElement("li");
			// insert next Fibonacci sequence element
			li.appendChild(document.createTextNode(i));
			list.appendChild(li);
			setTimeout(function() {
				li.classList.add("animation","bordered");
				}, (idx + 1) * 100);
			});
	}


	// Update the slider value
	function updateNum() {
		display.innerHTML = slider.value;
	}

	// Removes all child <li> elements
	function removePrevious(e) {
		if(e)
			e.preventDefault();
		while (list.firstChild)
			list.removeChild(list.firstChild);
	}

	// add event listener for page load
	window.addEventListener("load", init, false);

})();