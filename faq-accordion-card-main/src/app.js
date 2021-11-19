const accordionButtons = document.querySelectorAll('.accordion__state')

accordionButtons.forEach((accordion) => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active')

        const arrowDownIcon = this.querySelector('.arrow-down-icon')

        let panel = this.nextElementSibling
        if(panel.style.display === 'block') {
            panel.style.display = 'none'
            arrowDownIcon.style.transform = 'rotate(0)'
        } else {
            panel.style.display = 'block'
            arrowDownIcon.style.transform = 'rotate(180deg)'
        }
    })
})