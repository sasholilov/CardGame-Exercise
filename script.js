'use strict';
let setCardBtn = document.querySelector('.setbtn');
let resetBtn = document.querySelector('.resetbtn');
let mainCardel = document.getElementById('maincard');
let cardEl = document.querySelectorAll('.allcards');
let messageEl = document.querySelector('.message');
console.log(cardEl);
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
let randomArr = myArr.sort(() => Math.random() - 0.5);
let selectedCard = '';
let trying = 5;
console.log(randomArr);
setCardBtn.addEventListener('click', function () {
  mainCardel.src = `images/img-${Math.trunc(Math.random() * 8) + 1}.png`;
});

resetBtn.addEventListener('click', function () {
  mainCardel.src = 'images/main-card.png';
  trying = 5;
  document.querySelector('.estimate').textContent = 'Estimate turns: 5';
  messageEl.textContent = "Let's play";
  for (let i = 0; i <= 8; i++) {
    cardEl[i].src = 'images/img-back.png';
  }
});

for (let i = 0; i <= 8; i++) {
  console.log(cardEl[i].src);
  cardEl[i].addEventListener('click', function () {
    //Да направя проверка за не избрана карта
    //if (mainCardel.src == 'image/main-card.png') {
    //  function (){
    //   removeEventListener('click')
    // }
    /// }
    cardEl[i].src = `images/img-${randomArr[i]}.png`;
    selectedCard = cardEl[i].src;
    console.log(selectedCard);
    trying = trying - 1;
    document.querySelector(
      '.estimate'
    ).textContent = `Estimate turns: ${trying}`;
    if (mainCardel.src === selectedCard && trying > 0) {
      messageEl.textContent = 'WINNER';
    } else {
      messageEl.textContent = 'THIS IS NOT THE CARD';
    }
    if (trying == 0) {
      messageEl.textContent = 'LOSER';
    }
  });
}
