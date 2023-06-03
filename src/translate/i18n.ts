import i18next from 'i18next'
import Backend from 'i18next-http-backend';
import LanguageDetectors from 'i18next-browser-languagedetector'

import { messages } from '.'

i18next
    .use(Backend)
    .use(LanguageDetectors)
    .init({
        debug: false,
        fallbackLng: 'ptBr',
        resources: messages
    })

export { i18next }