const menuToggle = document.querySelector('.custom-menu-toggle');
const nav = document.querySelector('.custom-nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuToggle.classList.toggle('active');
});