document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('themeSelector');
    const savedTheme = localStorage.getItem('siteTheme') || 'dark';

    // Apply saved theme
    document.body.classList.add(`${savedTheme}-theme`);
    if (selector) selector.value = savedTheme;

    // Change theme on selection
    selector?.addEventListener('change', () => {
        const currentTheme = selector.value;
        document.body.className = ''; // Clear previous theme
        document.body.classList.add(`${currentTheme}-theme`); // Apply new theme
        localStorage.setItem('siteTheme', currentTheme); // Save the selected theme
    });
});
