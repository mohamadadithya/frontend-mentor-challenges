'use strict'

const timeMenus = document.querySelectorAll('.main-card__link')
const cardCurrentEls = document.querySelectorAll('.card__current')
const cardPreviousEls = document.querySelectorAll('.card__previous')

let times = []

timeMenus.forEach((menu, index) => {
    menu.addEventListener('click', () => {
        timeMenus.forEach(anotherMenu => {
            anotherMenu.classList.remove('active')
        })
        menu.classList.add('active')
        showTime(index)
    })
})

const getData = async () => {
    const response = await fetch('https://api.npoint.io/579772f65318a2172a69')
    const result = await response.json()
    const data = await result
    times.push(data)
}

getData()

const showTime = (menuIndex) => {
    let timesArray = times[0]
    let timeStatus
    if(menuIndex === 0) {
        timeStatus = 'daily'
    } else if(menuIndex === 1) {
        timeStatus = 'weekly'
    } else {
        timeStatus = 'monthly'
    }

    cardCurrentEls.forEach((element, index) => {
        element.textContent = `${timesArray[index].timeframes[timeStatus].current}hrs`
    })
    cardPreviousEls.forEach((element, index) => {
        element.textContent = `Last week - ${timesArray[index].timeframes[timeStatus].previous}hrs`
    })
}