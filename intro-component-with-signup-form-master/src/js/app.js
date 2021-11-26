const loginForm = document.querySelector('.login-form')
const inputWrapper = document.querySelectorAll('.input-wrapper')
const inputs = document.querySelectorAll('input')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Empty Validation
    inputs.forEach((input, i) => {
        if(input.value.length <= 0) {
            inputWrapper[i].classList.add('error')
            const errorFeedback = inputWrapper[i].querySelector('.error-feedback')
            errorFeedback.innerText = `${input.placeholder} cannot be empty`
        } else {
            inputWrapper[i].classList.remove('error')
        }
    });

    validateEmail(inputs[2])
})

const validateEmail = (input) => {
    const VALID_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(input.value.match(VALID_REGEX)) {
        inputWrapper[2].classList.remove('error')
    } else {
        inputWrapper[2].classList.add('error')
        const errorFeedback = inputWrapper[2].querySelector('.error-feedback')
        errorFeedback.innerText = (input.value.length <= 0) ? `${input.placeholder} cannot be empty` : 'Looks like this is not an email'
    }
}