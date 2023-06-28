import { messages as englishMessages } from './languages/pt-br'
import { messages as portugueseMessages } from './languages/en-us'

const messages = {
    ...portugueseMessages,
    ...englishMessages,
}

export { messages }