
// Select elements
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle nav visibility on click
menuBtn.addEventListener('click', () => {
navLinks.classList.toggle('show');
});
