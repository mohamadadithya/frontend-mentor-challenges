const radios = document.querySelectorAll('.form__input--radio')
const radioLabels = document.querySelectorAll('.form__input--label')
const customInput = document.querySelector('.form__input--custom')
const numberInputs = document.querySelectorAll('.form__input--number')
const numberInputWrappers = document.querySelectorAll('#num-wrapper')
const errorTexts = document.querySelectorAll('.form__error')
const resetButton = document.querySelector('.reset-btn')
const formEl = document.querySelector('.form')
const tipAmountEl = document.getElementById('tip-amount')
const totalEl = document.getElementById('total')

const calculateTip = () => {
    const checkedPercent = document.querySelector('input[name=percent]:checked')

    let tipPercent = customInput.value ? parseFloat(customInput.value) / 100 : parseFloat(checkedPercent.value)
    let billAmount = parseFloat(numberInputs[0].value)
    let countTipAmount = (billAmount * tipPercent) / numberInputs[1].value // Num of People
    let tipAmount = Math.round(countTipAmount * 100) / 100
    let total = (billAmount + (tipAmount * numberInputs[1].value)) / numberInputs[1].value // Num of People

    // If value in last input is empty
    if(numberInputs[0].value <= 0 || numberInputs[1].value <= 0) {
        tipAmountEl.textContent = '0.00'
        totalEl.textContent = '0.00'
        resetButton.classList.remove('enabled')
    } else {
        tipAmountEl.textContent = tipAmount.toFixed(2)
        totalEl.textContent = total.toFixed(2)
        resetButton.classList.add('enabled')
    }
}

radios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        customInput.value = ''
        radioLabels.forEach(label => {
            label.classList.remove('checked')
        })
        radioLabels[index].classList.add('checked')
    })

    radio.addEventListener('change', calculateTip)
})

customInput.addEventListener('focus', () => {
    radioLabels.forEach(label => {
        label.classList.remove('checked')
    })
    radios.forEach(radio => {
        radio.checked = false
    })
})

customInput.addEventListener('input', calculateTip)

numberInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        // Check if input value is empty, give the error feedback around the input element
        if(input.value <= 0) {
            numberInputWrappers[index].classList.add('error')
            errorTexts[index].style.opacity = 1
        } else {
            numberInputWrappers[index].classList.remove('error')
            errorTexts[index].style.opacity = 0
        }

        calculateTip()
    })
})

resetButton.addEventListener('click', () => {
    formEl.reset()
    radioLabels.forEach(label => {
        label.classList.remove('checked')
    })
    tipAmountEl.textContent = '0.00'
    totalEl.textContent = '0.00'
    resetButton.classList.remove('enabled')
})