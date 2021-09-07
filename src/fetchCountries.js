import { error } from '@pnotify/core';

const fetchCountries = searchQuery => {
  const URL_COUNTRIES_BASE = 'https://restcountries.eu/rest/v2/name';
  return fetch(`${URL_COUNTRIES_BASE}/${searchQuery}`)
    .then(res => res.json())
    .then(data => {
      if (data.status === 404) {
        return Promise.reject('Not found');
      }
      return data;
    })
    .catch(err => error({ text: 'Not found!' }));
};

export default fetchCountries;
