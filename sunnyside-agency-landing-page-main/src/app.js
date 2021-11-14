const navLinks = document.querySelector('.nav-links')
const menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show')
})