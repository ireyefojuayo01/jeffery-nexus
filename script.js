const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.getElementById('primary-nav');

function setMenu(open) {
    menuToggle.classList.toggle('active', open);
    navbar.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open);
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuToggle.addEventListener('click', () => {
    setMenu(!navbar.classList.contains('open'));
});

// Close the menu when a link is tapped
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

// Close the menu with the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
});

// Reset the menu when the window grows back to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 860) setMenu(false);
});