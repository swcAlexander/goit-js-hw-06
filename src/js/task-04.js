// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValueEl = document.querySelector('#value');
const decrementEl = counterValueEl.previousSibling;
const incrementEl = counterValueEl.nextSibling;

let counterValue = counterValueEl.textContent;
decrementEl.addEventListener('click', onDecrementClick);
incrementEl.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counterValueEl.textContent = counterValue -= 1;
}
function onIncrementClick() {
    counterValueEl.textContent = counterValue += 1;
}
   



