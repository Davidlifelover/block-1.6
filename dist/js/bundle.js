!function(e){var t={};function c(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=t,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t,c){e.exports=c(1)},function(e,t,c){"use strict";c.r(t);c(2),c(3),c(4),c(5)},function(e,t,c){},function(e,t){var c=document.querySelector(".modal-feedback"),n=document.querySelector(".form-content__modal-feedback"),r=document.querySelectorAll(".button__message"),o=document.querySelector(".modal-feedback__burger-cross"),a=document.querySelector(".modal-feedback"),i=document.querySelector(".form-content__modal-feedback"),s=document.querySelectorAll(".header__message"),l=document.querySelector(".modal-feedback__burger-cross"),d=document.querySelector(".modal-call"),u=document.querySelector(".form-content__modal-call"),v=document.querySelectorAll(".header__call"),m=document.querySelector(".modal-call__burger-cross"),f=document.querySelector(".modal-call"),L=document.querySelector(".form-content__modal-call"),_=document.querySelectorAll(".button__call"),y=document.querySelector(".modal-feedback__burger-cross"),b=document.querySelector(".aside"),S=document.querySelector(".aside__main-nav"),p=document.querySelectorAll(".header__burger"),g=document.querySelector(".aside__burger-cross");r.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),c.classList.add("active"),n.classList.add("active")}))})),o.addEventListener("click",(function(){c.classList.remove("active"),n.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===c&&(c.classList.remove("active"),n.classList.remove("active"))})),s.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),a.classList.add("active"),i.classList.add("active")}))})),l.addEventListener("click",(function(){a.classList.remove("active"),i.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===a&&(a.classList.remove("active"),i.classList.remove("active"))})),v.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),d.classList.add("active"),u.classList.add("active")}))})),m.addEventListener("click",(function(){d.classList.remove("active"),u.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===d&&(d.classList.remove("active"),u.classList.remove("active"))})),_.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),f.classList.add("active"),L.classList.add("active")}))})),y.addEventListener("click",(function(){f.classList.remove("active"),L.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===f&&(f.classList.remove("active"),L.classList.remove("active"))})),p.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),b.classList.add("active"),S.classList.add("active")}))})),g.addEventListener("click",(function(){b.classList.remove("active"),S.classList.remove("active")})),document.addEventListener("click",(function(e){e.target===b&&(b.classList.remove("active"),S.classList.remove("active"))}))},function(e,t){new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{enabled:!0,slidesPerView:"auto",spaceBetween:16},770:{enabled:!1,slidesPerView:"auto",spaceBetween:0}}})},function(e,t){var c=document.querySelector(".section__text"),n=document.querySelector(".brand__list"),r=document.querySelector(".section__img"),o=!0;c.addEventListener("click",(function(){o?(n.classList.add("visible"),o=!1,c.innerHTML="Скрыть",r.style="transform: rotate(180deg)"):(n.classList.remove("visible"),o=!0,c.innerHTML="Показать все",r.style="transform: rotate(0deg)")}));var a=document.querySelector(".section-card__text"),i=document.querySelector(".card__list"),s=document.querySelector(".section-card__img"),l=!0;a.addEventListener("click",(function(){l?(i.classList.add("visible"),l=!1,a.innerHTML="Скрыть",s.style="transform: rotate(180deg)"):(i.classList.remove("visible"),l=!0,a.innerHTML="Показать все",s.style="transform: rotate(0deg)")}))}]);
//# sourceMappingURL=bundle.js.map