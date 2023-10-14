document.addEventListener('DOMContentLoaded', function() {
    // Get the button and paragraph elements by their IDs
    var button = document.getElementById('sampleButton');
    var text = document.getElementById('sampleText');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        text.textContent = 'The button was clicked!';
    });
});

