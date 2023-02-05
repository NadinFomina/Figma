new Swiper('.swiper-container')
// JS файл
new Swiper('.swiper-container', {
    // Вывод стрелок навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },

})