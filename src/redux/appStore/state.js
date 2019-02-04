import globalConfig from './../../config/config.global.json';
import { filter } from 'lodash';

function getDefaultLocale(){
  const defaultLocale = 
    filter(globalConfig.availableLocales, { default: true });
  return (defaultLocale.length)? defaultLocale[0] : null;
}

const state = {
  selectedLocale: getDefaultLocale(),
};
export default state;
