!function(e){var t={};function c(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=t,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t,c){e.exports=c(1)},function(e,t,c){"use strict";c.r(t);c(2),c(3),c(4),c(5)},function(e,t,c){},function(e,t){var c=document.querySelector(".modal-feedback"),r=document.querySelector(".form-content__modal-feedback"),n=document.querySelectorAll(".button__message"),o=document.querySelector(".modal-feedback__burger-cross"),a=document.querySelector(".modal-feedback"),i=document.querySelector(".form-content__modal-feedback"),s=document.querySelectorAll(".header__message"),l=document.querySelector(".modal-feedback__burger-cross"),d=document.querySelector(".modal-call"),u=document.querySelector(".form-content__modal-call"),m=document.querySelectorAll(".header__call"),v=document.querySelector(".modal-call__burger-cross"),f=document.querySelector(".modal-call"),L=document.querySelector(".form-content__modal-call"),_=document.querySelectorAll(".button__call"),y=document.querySelector(".modal-feedback__burger-cross"),b=document.querySelector(".aside"),S=document.querySelector(".aside__main-nav"),p=document.querySelectorAll(".header__burger"),g=document.querySelector(".aside__burger-cross");n.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),c.classList.add("active"),r.classList.add("active")}))})),o.addEventListener("click",(function(){c.classList.remove("active"),r.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===c&&(c.classList.remove("active"),r.classList.remove("active"))})),s.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),a.classList.add("active"),i.classList.add("active")}))})),l.addEventListener("click",(function(){a.classList.remove("active"),i.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===a&&(a.classList.remove("active"),i.classList.remove("active"))})),m.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),d.classList.add("active"),u.classList.add("active")}))})),v.addEventListener("click",(function(){d.classList.remove("active"),u.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===d&&(d.classList.remove("active"),u.classList.remove("active"))})),_.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),f.classList.add("active"),L.classList.add("active")}))})),y.addEventListener("click",(function(){f.classList.remove("active"),L.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===f&&(f.classList.remove("active"),L.classList.remove("active"))})),p.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),b.classList.add("active"),S.classList.add("active")}))})),g.addEventListener("click",(function(){b.classList.remove("active"),S.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===b&&(b.classList.remove("active"),S.classList.remove("active"))}))},function(e,t){new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{enabled:!0,slidesPerView:"auto",spaceBetween:16},770:{enabled:!1,slidesPerView:"auto",spaceBetween:0}}})},function(e,t){var c=document.querySelector(".section__text"),r=document.querySelector(".brand__list"),n=document.querySelector(".section__img"),o=!0;c.addEventListener("click",(function(){o?(r.classList.add("visible"),o=!1,c.innerHTML="Скрыть",n.style="transform: rotate(180deg)"):(r.classList.remove("visible"),o=!0,c.innerHTML="Показать все",n.style="transform: rotate(0deg)")}));var a=document.querySelector(".section-card__text"),i=document.querySelector(".card__list"),s=document.querySelector(".section-card__img"),l=!0;a.addEventListener("click",(function(){l?(i.classList.add("visible"),l=!1,a.innerHTML="Скрыть",s.style="transform: rotate(180deg)"):(i.classList.remove("visible"),l=!0,a.innerHTML="Показать все",s.style="transform: rotate(0deg)")}));var d=document.querySelector(".show-more__text"),u=document.querySelector(".show-more__img"),m=document.querySelector(".about__wrapper"),v=!0;d.addEventListener("click",(function(){v?(m.classList.add("read-more"),v=!1,d.innerHTML="Скрыть",u.style="transform: rotate(180deg)"):(m.classList.remove("read-more"),v=!0,d.innerHTML="Читать далее",u.style="transform: rotate(0deg)")}))}]);
//# sourceMappingURL=bundle.js.map