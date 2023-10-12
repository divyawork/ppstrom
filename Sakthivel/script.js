const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King, Jr." },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const showButton = document.getElementById("show-button");

showButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.textContent = randomQuote.text;
    author.textContent = `— ${randomQuote.author}`;
});
