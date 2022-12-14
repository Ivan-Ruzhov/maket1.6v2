const button = document.querySelector('.side-menu__button-chat');
const buttonTwo = document.querySelector('.menu__button-chat');
const elementHidden = document.querySelector('.feedback');
const buttonClose = document.querySelector('.feedback__button-close');
button.addEventListener('click', function () {
  elementHidden.classList.remove('feedback-hidden')
});
buttonTwo.addEventListener('click', function () {
  elementHidden.classList.remove('feedback-hidden')
});
buttonClose.addEventListener('click', function () {
  elementHidden.classList.add('feedback-hidden')
});
