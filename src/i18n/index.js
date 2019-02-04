/* react-intl imports */
import { addLocaleData } from "react-intl";

/* Import basic support for another locale if needed
   ('en' is included by default) */
import enLocaleData from "react-intl/locale-data/en";
import faLocaleData from "react-intl/locale-data/fa";

export const localeData = [
  enLocaleData,
  faLocaleData
];

export const addAppLocaleData = () =>
  localeData.forEach(locale => addLocaleData(locale));
