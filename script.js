'use strict';

const btnEl = document.querySelector('.btn-shufle');
const currentCard = document.querySelectorAll('.cards');
const btnReset = document.querySelector('.btn-reset');
console.log(currentCard);
for (let i = 0; i < currentCard.length; i++) {
  currentCard[i].addEventListener('click', function () {
    currentCard[i].src = `images/img-${Math.trunc(Math.random() * 8) + 1}.png`;
    console.log('clicked card');
  });
}

let rnd = 0;
console.log(rnd);
btnEl.addEventListener('click', function () {
  const cards = document.querySelectorAll('.cards');
  for (let i = 0; i < cards.length; i++) {
    rnd = Math.trunc(Math.random() * 8) + 1;
    cards[i].src = `images/img-${rnd}.png`;
  }
});

btnReset.addEventListener('click', function () {
  for (let i = 0; i < currentCard.length; i++) {
    currentCard[i].src = 'images/img-back.png';
  }
});
