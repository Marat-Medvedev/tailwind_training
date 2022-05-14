const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('hamburger-menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});