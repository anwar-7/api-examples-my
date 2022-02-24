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
    // console.log(country);
    const div = document.createElement('div');
    div.className = 'country';
    div.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <p>Official Name: ${country.name.official}</p>
    <button onclick="lodeCountryDetails('${country.name.common}')">Details</button>
    `;
    countriesDiv.appendChild(div);
  });
};
// my work
const lodeCountryDetails = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
  const countriesDetailsDiv = document.getElementById('countries-details');
  countriesDetailsDiv.innerHTML = `
    <h5>Country Details</h5>
  <p>Population: ${country.population}</p>
  <img width="200px" src="${country.flags.png}">
    `;
};

/* 
const lodeCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCountryByName(data[0]));
};

const displayCountryByName = (country) => {
  //   console.log(country);
  const countryDiv = document.getElementById('countries-details');
  countryDiv.innerHTML = `
  <h5>Country Details</h5>
  <p>Population: ${country.population}</p>
  <img width="200px" src="${country.flags.png}">
  `;
};
 */
