const burgerBtn = document.getElementById('burgerBtn');
const nav = document.querySelector('nav');

burgerBtn.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
});