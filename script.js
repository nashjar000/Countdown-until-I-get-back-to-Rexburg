// Function to set the theme based on user's system settings
function setThemeFromSystem() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark-mode', prefersDarkMode);
}

// Function to toggle dark/light mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Event listener for the dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('change', toggleDarkMode);

// Check if dark mode is enabled in local storage
const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
if (isDarkModeEnabled) {
    document.body.classList.add('dark-mode');
} else {
    setThemeFromSystem();
}

// Set the target date (January 8, 2023)
const targetDate = new Date("2024-01-08T00:00:00Z").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        document.getElementById("countdown").innerHTML = "Jared is back!";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
