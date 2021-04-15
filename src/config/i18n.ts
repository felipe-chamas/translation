import i18n from 'i18next'
import Backend from 'i18next-chained-backend'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    react: {
      useSuspense: false
    },
    lng: 'en',
    // fallbackLng: 'en',
    // whitelist: ['en'],
    ns: ['translation', 'override'],
    fallbackNS: 'translation',
    load: 'all',
    interpolation: {
      escapeValue: false
    },
    backend: {
      backends: [HttpApi],
      backendOptions: [
        {
          loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
        }
      ]
    }
  })
