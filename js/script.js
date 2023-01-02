// menu
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

// smooth scroll
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

// modals
// btns
const flatsBtn = document.getElementById("flats");
const housesBtn = document.getElementById("houses");
const officesBtn = document.getElementById("offices");
const industrialsBtn = document.getElementById("industrials");
const requestBtn = document.getElementById("requestBtn");
const projectBtn = document.getElementById("sendProject");

// modal windows
const flatsModal = document.getElementById("flatsModal");
const housesModal = document.getElementById("housesModal");
const officesModal = document.getElementById("officesModal");
const industrialsModal = document.getElementById("industrialsModal");
const requestModal = document.getElementById("requestModal");
const projectModal = document.getElementById("projectModal");

// open modals
flatsBtn.onclick = () => flatsModal.style.display = "flex";
housesBtn.onclick = () => housesModal.style.display = "flex";
officesBtn.onclick = () => officesModal.style.display = "flex";
industrialsBtn.onclick = () => industrialsModal.style.display = "flex";
requestBtn.onclick = () => {
    requestModal.style.display = "flex";
    toggleMenu();
};
projectBtn.onclick = () => projectModal.style.display = "flex";

// close modals by click on x
const flatsClose = document.getElementById("flatsClose");
const housesClose = document.getElementById("housesClose");
const officesClose = document.getElementById("officesClose");
const industrialsClose = document.getElementById("industrialsClose");
const requestClose = document.getElementById("requestClose");
const projectClose = document.getElementById("projectClose");

flatsClose.onclick = () => flatsModal.style.display = "none";
housesClose.onclick = () => housesModal.style.display = "none";
officesClose.onclick = () => officesModal.style.display = "none";
industrialsClose.onclick = () => industrialsModal.style.display = "none";
requestClose.onclick = () => requestModal.style.display = "none";
projectClose.onclick = () => projectModal.style.display = "none";

// close on outside modal click
window.onclick = e => {
  if (e.target == flatsModal || 
    e.target == housesModal || 
    e.target == officesModal || 
    e.target == industrialsModal || 
    e.target == requestModal ||
    e.target == projectModal) {
    flatsModal.style.display = "none";
    housesModal.style.display = "none";
    officesModal.style.display = "none";
    industrialsModal.style.display = "none";
    requestModal.style.display = "none";
    projectModal.style.display = "none";
  }
};

// photo gallery
lightGallery(document.getElementById('lightgalleryFlats')); 
lightGallery(document.getElementById('lightgalleryHouses')); 
lightGallery(document.getElementById('lightgalleryOffices')); 
lightGallery(document.getElementById('lightgalleryIndustrials')); 
