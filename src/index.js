import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import store from './App/store'
import {Provider} from 'react-redux'
import Router from './Router'


const root = ReactDOM.createRoot(document.getElementById('root'))
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'ru', 'tr', 'uz'],
        fallbackLng: 'uz',
        detection: {
            order: ['localStorage'],
            lookupQuerystring: 'lng',
            lookupLocalStorage: 'lang',
            caches: ['localStorage', 'cookie']
        },
        backend: {
            loadPath: './languages/locales/{{lng}}/translation.json'
        },
        react: {useSuspanse: false},
        parseHtml: true
    })
root.render(
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <Router/>
            </Provider>
        </Suspense>
    </BrowserRouter>
)

