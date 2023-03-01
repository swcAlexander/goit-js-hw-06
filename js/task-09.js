
const backgraundEl = document.querySelector('body');
const buttonColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');
buttonColorEl.addEventListener('click', () => {
  backgraundEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}