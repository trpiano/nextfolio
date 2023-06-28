import i18next from 'i18next'
import LanguageDetectors from 'i18next-browser-languagedetector'
import Cookies from 'js-cookie';

import { messages } from '.'

const languageDetector = new LanguageDetectors(null, {
    lookupCookie: 'i18nextLng',
});

i18next
    .use(languageDetector)
    .init({
        debug: false,
        fallbackLng: i18next.language,
        resources: messages,
        detection: {
            order: ['cookie', 'navigator'],
        },
    })


export { i18next }