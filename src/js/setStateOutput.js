import { ref } from './refElement';

export const showOutputList = () => {
  ref.outputList.style.display = 'block';
};

export const hideOutputList = () => {
  ref.outputList.innerHTML = '';
  ref.outputList.style.display = 'none';
};

export const showOutputCountry = () => {
  ref.outputCountry.style.display = 'block';
};

export const hideOutputCountry = () => {
  ref.outputCountry.innerHTML = '';
  ref.outputCountry.style.display = 'none';
};
