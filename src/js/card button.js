const button = document.querySelector('.section__text');
const elements = document.querySelector('.brand__list');
const icon = document.querySelector('.section__img');
let hidden = true;

let show = () => {
    elements.classList.add('visible');
    hidden = false;
    button.innerHTML = 'Скрыть';
    icon.style = 'transform: rotate(180deg)'
}
let invis = () => {
    elements.classList.remove('visible');
    hidden = true;
    button.innerHTML = 'Показать все';
    icon.style = 'transform: rotate(0deg)'
}
button.addEventListener('click', () => {
    if (hidden) {
        show();
    } else {
        invis();
    }
})

const buttonCard = document.querySelector('.section-card__text');
const elementCard = document.querySelector('.card__list');
const iconCard = document.querySelector('.section-card__img');
let hidde = true;

let shows = () => {
    elementCard.classList.add('visible');
    hidde = false;
    buttonCard.innerHTML = 'Скрыть';
    iconCard.style = 'transform: rotate(180deg)'
}
let invise = () => {
    elementCard.classList.remove('visible');
    hidde = true;
    buttonCard.innerHTML = 'Показать все';
    iconCard.style = 'transform: rotate(0deg)'
}
buttonCard.addEventListener('click', () => {
    if (hidde) {
        shows();
    } else {
        invise();
    }
})

const buttonText = document.querySelector('.show-more__text');
const buttonIcon = document.querySelector('.show-more__img');
const textBlock = document.querySelector('.about__wrapper');
let hid = true;

let shov = () => {
    textBlock.classList.add('read-more')
    hid = false;
    buttonText.innerHTML = 'Скрыть';
    buttonIcon.style = 'transform: rotate(180deg)'
}
let invi = () =>  {
    textBlock.classList.remove('read-more')
    hid = true;
    buttonText.innerHTML = 'Читать далее';
    buttonIcon.style = 'transform: rotate(0deg)'
}
buttonText.addEventListener('click', () => {
    if (hid) {
        shov();
    } else {
        invi();
    }
})

