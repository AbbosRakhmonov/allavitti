import React, {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'
import Admin from './Pages/Admin/Admin'
import PrivateRoute from './PrivateRoute'
import Login from './Pages/Login/Login'

const App = lazy(() => import('./App'))
const Articles = lazy(() => import('./Pages/Articles/Articles'))

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/articles/:id" element={<Articles/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path="/dashboard/*" element={<Admin/>}/>
            </Route>
            <Route path="*" element={<div>404</div>}/>
        </Routes>
    )
}

export default Router