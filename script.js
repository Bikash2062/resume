// Select Elements
const themeToggle = document.getElementById('theme-toggle');
const printBtn = document.getElementById('print-btn');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check Local Storage for Theme Preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Toggle Dark/Light Mode
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Toggle Icon
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Print Functionality
printBtn.addEventListener('click', () => {
    window.print();
});