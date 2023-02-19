const slider = document.querySelector('.swiper');

let swiper = new Swiper(slider, {

  slidesPerView: 3,
  centeredSlides: true,

  spaceBetween: 50,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});