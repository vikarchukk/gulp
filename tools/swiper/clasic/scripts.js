const slider = document.querySelector('.swiper');

let swiper = new Swiper(slider, {

  // скільки слайдів показувати по стандарті 1 можна змінити 2, 3...
  // доповнення верхнього рядка тут не можна писати ширину
  // якщо вказати 'auto' - тут потрібно вписати ширину блоку
  slidesPerView: 'auto',

  spaceBetween: 10,
  loop: true,

  // bullets - кружечки / fraction - цифри / progressbar 
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // по скільки слайдів переключити тут наприклад по три слайда при натискані кнопки
  // slidesPerGroup: 3,

  // при натискані на елемент свайперу, 
  // свайпер починає скролити цей елемент на місце активного елемента
  slideToClickedSlide: true,

  // головний слайд (активний) буде стояти по центру
  centeredSlides: true,

  // автоплеєр
  autoplay: {
    delay: 3000,
  },

  // media запроси для слайдера
  breakpoints: {
    // <><> <---> 320px

    // 320px <---> 700px
    320: {
      spaceBetween: 3,
    },

    // 700px <---> 1200px
    700: {
      spaceBetween: 13,
    },

    // 1200px <---> <><>
    1200: {
      spaceBetween: 10,
    }
  }

});