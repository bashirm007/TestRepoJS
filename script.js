const input = document.getElementById('country-name');
const searchBtn = document.getElementById('search');


const spanName = document.getElementById('name');
const region = document.getElementById('region');
const subregion = document.getElementById('subregion');
const capital = document.getElementById('capital');
const flag = document.getElementById('flag');


const getCountry = async (someUrl) => {
  console.log(someUrl);
  try {
    const response = await fetch(someUrl);
    const data = await response.json();
    const country = data[0];
    return country;
  } catch (error) {
    console.log('error:', error)
  }
}

searchBtn.addEventListener('click', async () => {
  const url = `https://restcountries.com/v3.1/name/${input.value}`;
  const country = await getCountry(url);
  console.log(country);
  spanName.innerText = country.name.common;
  flag.setAttribute('src', country.flags.svg);
  flag.setAttribute('alt', country.flags.alt);
})

const randomdFunc = () => {
  alert(123)
}