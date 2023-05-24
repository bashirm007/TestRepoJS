

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const container = document.getElementById('container')
const close = document.getElementById('close');
const modal = document.getElementById('modal');


close.addEventListener('click', () => {
  modal.className = 'none';
})

const getCocktail = async () => {
  try {
    const value = input.value;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const drinks = data.drinks;
    drinks.map(drink => showCocktails(drink))
  } catch (error) {
    console.log(error);
  }
};

const showCocktails = someDrink => {
  const card = document.createElement('div');
  card.addEventListener('click', () => {
    modal.className = 'modal';
  })
  const name = document.createElement('h1');
  name.innerText = someDrink.strDrink;
  card.appendChild(name);
  container.appendChild(card);
};

btn.addEventListener('click', () => {
  container.innerHTML = '';
  getCocktail();
});

