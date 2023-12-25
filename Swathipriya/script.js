const tabs = document.querySelectorAll('.tab');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        tabs.forEach(tab => tab.style.display = 'none');
        tabs[index].style.display = 'block';
    });
});