const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');

const toggleMenu = () => {
    menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
};

menuBtn.addEventListener('click', () => toggleMenu());

menuItems.forEach(item => {
    item.addEventListener('click', () => toggleMenu())
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};