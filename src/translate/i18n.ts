import i18next from 'i18next'

import { messages } from '.'

i18next
    .init({
        debug: false,
        fallbackLng: 'ptBr',
        resources: messages
    })

export { i18next }