const firstCard = document.querySelector('.card.rating');
const secondCard = document.querySelector('.card.thank');
const ratingForm = document.getElementById('rating-form');
const ratingButtons = document.querySelectorAll('.card__list__label');
const ratingRadios = document.querySelectorAll('.card__list__radio');
const ratingValueEl = document.getElementById('rating-value');

let notyf = new Notyf({
    types: [
        {
            type: 'error',
            background: 'hsl(213, 19%, 18%)',
            dismissible: true,
            ripple: true
        }
    ]
});

let ratingValue = 0;

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ratingValue !== 0) {
        firstCard.style.display = 'none';
        secondCard.style.display = 'block';
        ratingValueEl.textContent = ratingValue;
    } else {
        notyf.open({
            type: 'error',
            message: 'Please select the rating.'
        })
    }
});

ratingRadios.forEach(radio => {
    radio.addEventListener('click', () => {
        ratingValue = radio.value;
        console.log(ratingValue)
    });
});

ratingButtons.forEach(button => {
    button.addEventListener('click', function() {
        ratingButtons.forEach(button => {
            button.classList.remove('active');
        })
        this.classList.add('active');
    });
});