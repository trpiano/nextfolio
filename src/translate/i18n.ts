import i18next from 'i18next'

import { messages } from '.'

i18next
    .init({
        debug: false,
        fallbackLng: 'enUs',
        resources: messages
    })

export { i18next }