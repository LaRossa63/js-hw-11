import { ref, API_URL } from './refElement';
import {
  showOutputList,
  hideOutputList,
  showOutputCountry,
  hideOutputCountry,
} from './setStateOutput';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const sendRequestForGetCountries = async value => {
  const response = await fetch(
    `${API_URL}/name/${value}?fields=name,languages,capital,population,flag`
  );

  if (!response.ok) {
    return false;
  }

  return response.json();
};

export const printError = text => {
  Notify.failure(text, 500);
};

export const clearList = () => {
  hideOutputList();
  hideOutputCountry();
};

export const outputList = countries => {
  showOutputList();

  const li = countries.map(country => {
    return `<li class="header__container-li">${country.name}</li>`;
  });

  ref.outputList.insertAdjacentHTML('beforeend', li.join(''));
};

export const outputCountry = country => {
  showOutputCountry();

  const information = `
  <div class="container__box-text">Name: ${country.name}</div>
  <div class="container__box-text">Capital: ${country.capital}</div>
  <div class="container__box-text">Population: ${country.population}</div>

  <div class="container__box-text">Language: </div>
  <ul class="container__box-ul">
    ${Object.values(country.languages)
      .map(language => {
        return `<li class="container__box-li">${language.name}</li>`;
      })
      .join('')} 
  </ul>

  <img class="container__box-img" src="${country.flag}" alt="${country.name}">

  `;

  ref.outputCountry.insertAdjacentHTML('beforeend', information);
};
