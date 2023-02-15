import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = lazy(() => import('./App'))
const Articles = lazy(() => import('./Pages/Articles/Articles'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="/articles/:id" element={<Articles/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </Suspense>
    </BrowserRouter>
)

