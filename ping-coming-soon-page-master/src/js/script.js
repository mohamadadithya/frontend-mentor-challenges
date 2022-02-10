const form = document.querySelector('.form')
const input = form.querySelector('.form__input')
const errorFeedback = form.querySelector('.form__error')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(input.value <= 0) {
        input.classList.add('error')
        errorFeedback.style.display = 'block'
    } else {
        input.classList.remove('error')
        errorFeedback.style.display = 'none'
    }
})