import { ref } from './refElement';
import {
  sendRequestForGetCountries,
  printError,
  outputList,
  outputCountry,
  clearList,
} from './utils';

export const handleChangeInput = async event => {
  const response = await sendRequestForGetCountries(event.target.value);

  clearList();

  if (!response) {
    printError('Ошибка 404');
    return;
  }

  if (response.length >= 10) {
    printError('необходимо сделать запрос более специфичным');
    return;
  }

  if (response.length === 1) {
    outputCountry(response[0]);
    return;
  }

  outputList(response);
};
