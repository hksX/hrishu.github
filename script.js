const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "The best way to predict the future is to create it. – Abraham Lincoln",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Initial quote load
generateQuote();

