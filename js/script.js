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

document.addEventListener('DOMContentLoaded', () => {
    const splide = new Splide('.splide', {
        type: 'slide',
        focus: 'center',
        perPage: 1,
        perMove: 1,
        gap: 30,
        arrows: true,
        pagination: false,
        updateOnMove: true,
        breakpoints: {
            1024: {
                perPage: 1,
                type: 'slide',
            },
        }
    });
    splide.mount();
});