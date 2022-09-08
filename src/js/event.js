import { ref } from './refElement';
import { handleChangeInput, handleClickList } from './handle';
import debounce from 'lodash.debounce';

ref.input.addEventListener('input', debounce(handleChangeInput, 500));
ref.outputList.addEventListener('click', handleClickList);
