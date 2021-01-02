const hamburger = document.getElementById('hamburger');
const navItems = document.getElementById('nav-items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navItems.classList.toggle('show');
});