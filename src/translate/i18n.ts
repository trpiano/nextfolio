import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { messages } from "."

i18next.use(LanguageDetector).init({
    lng: 'enUs',
    debug: false,
    resources: messages,
});

export { i18next }