/* 
const lodeCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};
lodeCountries();

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById('countries');
  countries.forEach((country) => {
    console.log(country.name);
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.innerText = `Common Name: ${country.name.common}`;
    div.appendChild(h3);
    const p = document.createElement('p');
    p.innerText = `Official Name: ${country.name.official}`;
    div.appendChild(p);

    // main div append
    countriesDiv.appendChild(div);
  });
};
*/

const lodeCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};
lodeCountries();

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById('countries');
  countries.forEach((country) => {
    console.log(country);
    const div = document.createElement('div');
    div.className = 'col-md-4';
    const h4 = document.createElement('h4');
    h4.innerText = `Name: ${country.name.common}`;
    div.appendChild(h4);
    const p = document.createElement('p');
    p.innerText = `Official Name: ${country.name.official}`;
    div.appendChild(p);
    // console.log(country);
    // main append
    countriesDiv.appendChild(div);
  });
};
