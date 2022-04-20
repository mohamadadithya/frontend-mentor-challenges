const menuButton = document.getElementById('menu-btn');
const navbarMenu = document.getElementById('navbar-menu');
const dropdownLinks = document.querySelectorAll('.dropdown');
const dropdowns = document.querySelectorAll('.navbar__list__item__dropdown');

menuButton.addEventListener('click', function() {
    navbarMenu.classList.toggle('opened');
    this.classList.toggle('opened');
    let icon = this.querySelector('.menu-icon');

    if(this.classList.contains('opened')) {
        icon.src = '/images/icon-close-menu.svg';
    } else {
        icon.src = '/images/icon-menu.svg';
    }
});

dropdownLinks.forEach((dropdown, index) => {
    dropdown.addEventListener('click', function() {
        this.classList.toggle('opened');
        dropdowns[index].classList.toggle('opened');
        let icon = this.querySelector('.icon');

        if(this.classList.contains('opened')) {
            icon.src = '/images/icon-arrow-up.svg';
        } else {
            icon.src = '/images/icon-arrow-down.svg';

        }
    });
})