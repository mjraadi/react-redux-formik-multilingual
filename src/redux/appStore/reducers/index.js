import { filter } from 'lodash';
import initialState from './../state';
import TYPES from './../types';
import globalConfig from './../../../config/config.global.json';

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_LOCALE:
      if (isLocaleSupported(action.payload)) {
        const selectedLocale =
          filter(globalConfig.availableLocales, { locale: action.payload });
        return { ...state, selectedLocale: { ...selectedLocale[0] } };
      }
      break;
    default:
      return state;
  }
};

function isLocaleSupported(locale){
  const obj = filter(globalConfig.availableLocales, { locale: locale });
  return (obj.length)? true : false;
}