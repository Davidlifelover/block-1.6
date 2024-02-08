new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, 

breakpoints: {
    320: {
        enabled: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
    },
    770: {
        enabled: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
    },
    }
    });