const button = document.querySelector('.card-advice__button');
const diceIcon = button.querySelector('.card-advice__button__dice');
const adviceEl = document.querySelector('.card-advice__content');
const adviceIDEl = document.querySelector('.card-advice__id span')

button.addEventListener('click', () => {
    diceIcon.classList.add('active');
    getAdvice();
})

const getAdvice = async () => {
    const url = `https://api.adviceslip.com/advice`;
    const response = await fetch(url);
    const result = await response.json();
    const data = await result;
    showAdvice(data.slip)
    setTimeout(() => {
        diceIcon.classList.remove('active')
    }, 1000);
}

const showAdvice = (data) => {
    adviceEl.textContent = `"${data.advice}"`
    adviceIDEl.textContent = data.id
}