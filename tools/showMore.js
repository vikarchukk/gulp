// ---------- show more ----------

const btnName = document.querySelector('.name__btn');
const cardsName = document.querySelectorAll('.name__item');

btnName.addEventListener('click', function() {
  for(let card of cardsName) {
    card.style.display = 'flex'
  }
  btnName.style.display = 'none';
});

// ---------- /show more ----------

// scss media for item cards

// @media (max-width: 1242px) {
//   &:not(:nth-child(-n + 6)) {
//     display: none;
//   }
// }

// @media (max-width: 941px) {
//   &:not(:nth-child(-n + 4)) {
//     display: none;
//   }
// }

// @media (max-width: 615px) {
//   &:not(:nth-child(-n + 3)) {
//     display: none;
//   }
// }