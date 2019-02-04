import { createSelector } from 'reselect';
// selector
const getSelectedLocale = (state) => state.appStore.selectedLocale;
// reselect function
export const isSelectedLocaleDefault = createSelector(
  [ getSelectedLocale ],
  (selectedLocale) => selectedLocale.default
);