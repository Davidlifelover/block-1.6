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
/*
const btn = document.querySelector('.section__tex');
const elemen = document.querySelector('.card__list');
const ic = document.querySelector('.section__im');
let hid = true;

let sho = () => {
    console.log(elemen);
    elemen.classList.add('visible');
    hid = false;
    btn.innerHTML = 'Скрыть';
    ic.style = 'transform: rotate(180deg)'
}

let invi = () => {
    elemen.classList.remove('visible');
    hid = true;
    btn.innerHTML = 'Показать все';
    ic.style = 'transform: rotate(0deg)'
}

btn.addEventListener('click', () => {
    if (hid) {
        sho();
    } else {
        invi();
    }
})*/