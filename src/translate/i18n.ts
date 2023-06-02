import i18next from 'i18next'
import LanguageDetectors from 'i18next-browser-languagedetector'

import { messages } from '.'

i18next
    .use(LanguageDetectors)
    .init({
        debug: false,
        resources: messages
    })

export { i18next }