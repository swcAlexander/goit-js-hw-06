const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const ingredientsEl = document.querySelector('#ingredients');
// ingredients.forEach((ingredient) => {
//   const listEl = document.createElement('li');
//   listEl.classList.add('.item');
//   listEl.textContent = ingredient;
//   ingredientsEl.appendChild(listEl);
// });

// або:

const ingredientsEl = document.querySelector('#ingredients');
const markup = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
ingredientsEl.insertAdjacentHTML("beforeend", markup);
