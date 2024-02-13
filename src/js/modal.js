const popupBg = document.querySelector('.modal-feedback');
const popup = document.querySelector('.form-content__modal-feedback'); 
const openPopupButtons = document.querySelectorAll('.button__message');
const closePopupButton = document.querySelector('.modal-feedback__burger-cross');

const modalFeedbackHeadBg = document.querySelector('.modal-feedback');
const modalFeedbackHead = document.querySelector('.form-content__modal-feedback');
const openModalFeedbackHead = document.querySelectorAll('.header__message'); 
const closeModalFeedbackHead = document.querySelector('.modal-feedback__burger-cross');

const modalCallHeadBg = document.querySelector('.modal-call');
const modalCallHead = document.querySelector('.form-content__modal-call');
const openModalCallHead = document.querySelectorAll('.header__call'); 
const closeModalCallHead = document.querySelector('.modal-call__burger-cross');

const modalCallBg = document.querySelector('.modal-call');
const modalCall = document.querySelector('.form-content__modal-call');
const openModalCall = document.querySelectorAll('.button__call'); 
const closeModalCall = document.querySelector('.modal-feedback__burger-cross');

const menuBg = document.querySelector('.aside');
const menu = document.querySelector('.aside__main-nav');
const openMenu = document.querySelectorAll('.header__burger');
const closeMenu = document.querySelector('.aside__burger-cross');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active'); 
  })
});
closePopupButton.addEventListener('click',() => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});
document.addEventListener('click', (e) => {
  if(e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
  }
});

openModalFeedbackHead.forEach((button) => {
  button.addEventListener('click', (e) => {
      e.preventDefault();
      modalFeedbackHeadBg.classList.add('active');
      modalFeedbackHead.classList.add('active');
  })
});
closeModalFeedbackHead.addEventListener('click',() => {
  modalFeedbackHeadBg.classList.remove('active');
  modalFeedbackHead.classList.remove('active');
});
document.addEventListener('click', (e) => {
  if(e.target === modalFeedbackHeadBg) {
    modalFeedbackHeadBg.classList.remove('active');
    modalFeedbackHead.classList.remove('active');
  }
});

openModalCallHead.forEach((button) => {
  button.addEventListener('click', (e) => {
      e.preventDefault();
      modalCallHeadBg.classList.add('active');
      modalCallHead.classList.add('active');
  })
});
closeModalCallHead.addEventListener('click',() => {
  modalCallHeadBg.classList.remove('active');
  modalCallHead.classList.remove('active');
});
document.addEventListener('click', (e) => {
  if(e.target === modalCallHeadBg) {
    modalCallHeadBg.classList.remove('active');
    modalCallHead.classList.remove('active');
  }
});

openModalCall.forEach((button) => {
  button.addEventListener('click', (e) => {
      e.preventDefault();
      modalCallBg.classList.add('active');
      modalCall.classList.add('active');
  })
});
closeModalCall.addEventListener('click',() => {
  modalCallBg.classList.remove('active');
  modalCall.classList.remove('active');
});
document.addEventListener('click', (e) => {
  if(e.target === modalCallBg) {
      modalCallBg.classList.remove('active');
      modalCall.classList.remove('active');
  }
});

openMenu.forEach((button) => {
  button.addEventListener('click', (e) => { 
      e.preventDefault(); 
      menuBg.classList.add('active'); 
      menu.classList.add('active'); 
  })
});
closeMenu.addEventListener('click',() => { 
  menuBg.classList.remove('active'); 
  menu.classList.remove('active'); 
});
document.addEventListener('click', (e) => {
  if(e.target === menuBg) { 
      menuBg.classList.remove('active');
      menu.classList.remove('active'); 
  }
});