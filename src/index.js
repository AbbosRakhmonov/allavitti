import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import store from './App/store'
import {Provider} from 'react-redux'
import Login from './Pages/Login/Login'
import PrivateRoute from './PrivateRoute'
import Admin from './Pages/Admin/Admin'

const App = lazy(() => import('./App'))
const Articles = lazy(() => import('./Pages/Articles/Articles'))

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
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="articles" element={<Articles/>}/>
                    <Route path="articles/:id" element={<Articles/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path="dashboard/*" element={<Admin/>}/>
                    </Route>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </Provider>
        </Suspense>
    </BrowserRouter>
)

