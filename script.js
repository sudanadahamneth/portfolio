// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved user preference in localStorage
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
updateToggleIcon(currentTheme);

themeToggleBtn.addEventListener('click', () => {
    let theme = htmlElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateToggleIcon('light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateToggleIcon('dark');
    }
});

function updateToggleIcon(theme) {
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun'; // Show sun icon when in dark mode (click to go light)
    } else {
        icon.className = 'fas fa-moon'; // Show moon icon when in light mode (click to go dark)
    }
}

// Function to toggle expandable academic results
function toggleDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle('show');
    
    const card = element.closest('.card');
    const btn = card.querySelector('.expand-btn');
    
    if (element.classList.contains('show')) {
        btn.textContent = 'Hide Results ▲';
    } else {
        btn.textContent = 'View Full Results ▼';
    }
}