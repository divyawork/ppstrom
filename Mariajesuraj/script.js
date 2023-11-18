// Get the current hour
const currentHour = new Date().getHours();

// Function to set greeting based on time
function setGreeting() {
    let greeting = '';
    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    // Set the greeting in the marquee element
    const marquee = document.querySelector('.banner marquee');
    marquee.innerHTML = `<h1>${greeting}, I am Maria Jesuraj</h1>`;
}

// Call the function to set greeting
setGreeting();
