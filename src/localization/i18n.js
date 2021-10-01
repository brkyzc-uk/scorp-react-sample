import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import languages from './locales';
import { DEFAULT_LANG } from "../utils/constants";

i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ...languages,
        },
        fallbackLng: DEFAULT_LANG,
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
