const categoriesEl = document.querySelectorAll('.item');
let numberOfCategories = 0;
categoriesEl.forEach((number) => {
  numberOfCategories += 1;
  const itemsEl = number.querySelectorAll('.item li');
  const categoryEl = number.querySelector('.item h2').textContent;
  let numberOfitems = 0;
  itemsEl.forEach((item) => {
    numberOfitems += 1;
  });
  console.log('Category:', categoryEl);
  console.log('Elements:', numberOfitems);
});
console.log('Number of categories:', numberOfCategories);
