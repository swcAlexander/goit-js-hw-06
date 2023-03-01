const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const markup = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join('');
ingredientsEl.insertAdjacentHTML('beforeend', markup);
