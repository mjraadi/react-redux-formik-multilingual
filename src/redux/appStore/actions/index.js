import TYPES from './../types';

export const changeLocale = ( locale ) => {
  return {
    type: TYPES.CHANGE_LOCALE,
    payload: locale,
  };
};