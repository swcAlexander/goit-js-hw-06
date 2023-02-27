
const categoriesEl = document.querySelectorAll('.item');
let numberOfCategories = 0;
categoriesEl.forEach(number => {
    numberOfCategories += 1;
    const itemsEl = number.querySelectorAll('.item li');
});
console.log('Number of categories:', numberOfCategories);


console.log(categoriesEl);
console.log(itemsEl);