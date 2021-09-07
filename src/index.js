// import './sass/main.scss';
import './sass/styles.css';
import fetchCountries from './fetchCountries.js';
import makeCountry from './templates/country.hbs';
import makeCountries from './templates/countries.hbs';
import refs from './refs.js';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
// import { debounce } from 'lodash';

const debounce = require('lodash.debounce');
// import { debounce } from lodash;

// console.log(refs);
// console.log(makeCountries);
// console.log(fetchCountries);
// console.log(debounce);

// error({ text: 'eror!' });

refs.inputRef.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const countryName = e.target.value;
  fetchCountries(countryName)
    .then(chekValue)
    .catch(err => error({ text: 'Not found!' }));
}

const makeMarkup = (markup = '') => {
  refs.listRef.innerHTML = markup;
};

const chekValue = countryName => {
  if (countryName.length === 1) {
    return makeMarkup(makeCountry(countryName));
  }

  if (countryName.length >= 2 && countryName.length <= 10) {
    return makeMarkup(makeCountries(countryName));
  }

  if (countryName.length > 10) {
    makeMarkup();
    return error({ text: 'Too many matches found. Please enter a more specific query!' });
  }
};
