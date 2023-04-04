'use strict';
let setCardBtn = document.querySelector('.setbtn');
let resetBtn = document.querySelector('.resetbtn');
let mainCardel = document.getElementById('maincard');
let cardEl = document.querySelectorAll('.allcards');
let messageEl = document.querySelector('.message');
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
let randomArr = myArr.sort(() => Math.random() - 0.5);
let selectedCard = '';
let trying = 5;
let playIng = true;

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    resetBtn.textContent = 'OK';
  }
  if (e.key === 'Escape') {
    resetBtn.textContent = 'RESET';
  }
});
setCardBtn.addEventListener('click', function () {
  mainCardel.src = `images/img-${Math.trunc(Math.random() * 8) + 1}.png`;
});

resetBtn.addEventListener('click', function (e) {
  mainCardel.src = 'images/main-card.png';
  trying = 5;
  document.querySelector('.estimate').textContent = 'Estimate turns: 5';
  messageEl.textContent = "Let's play";
  for (let i = 0; i <= 8; i++) {
    cardEl[i].src = 'images/img-back.png';
  }
});

if (playIng) {
  for (let i = 0; i <= 8; i++) {
    cardEl[i].addEventListener('click', function () {
      cardEl[i].src = `images/img-${randomArr[i]}.png`;
      selectedCard = cardEl[i].src;

      if (mainCardel.src === selectedCard && trying > 0) {
        messageEl.textContent = 'WINNER';
      } else {
        messageEl.textContent = 'THIS IS NOT THE CARD';
      }
      if (trying < 1) {
        messageEl.textContent = 'YOU LOSE TGE GAME';
        playIng = false;
      }
      trying = trying - 1;
      document.querySelector(
        '.estimate'
      ).textContent = `Estimate turns: ${trying}`;
    });
  }
}
