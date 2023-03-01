function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgraundEl = document.querySelector('.widget').parentElement;
const buttonColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');
buttonColorEl.addEventListener('click', () => {
  backgraundEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
});