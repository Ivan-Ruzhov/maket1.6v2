let button = document.querySelector('.side-menu__button-chat');
let buttonTwo = document.querySelector('.menu__button-chat');
let elementHidden = document.querySelector('.feedback');
let buttonClose = document.querySelector('.feedback__button-close');
button.addEventListener('click', function () {
  elementHidden.classList.remove('feedback-hidden')
});
buttonTwo.addEventListener('click', function () {
  elementHidden.classList.remove('feedback-hidden')
});
buttonClose.addEventListener('click', function () {
  elementHidden.classList.add('feedback-hidden')
});
