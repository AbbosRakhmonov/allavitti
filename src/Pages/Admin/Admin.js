import React, {useEffect} from 'react'
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'
import {Route, Routes} from 'react-router-dom'
import Articles from './Articles'
import Products from './Products'
import {useDispatch} from 'react-redux'
import {getMe} from '../Login/loginSlice'
import jwt_decode from 'jwt-decode'

function Admin() {
    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem('allavittiToken')
        if (token) {
            const decoded = jwt_decode(token)
            dispatch(getMe({id: decoded.id}))
        }
    }, [dispatch])
    return (
        <section className={'min-vh-100'}>
            <AdminNavbar/>
            <div className={'container-fluid mt-2'}>
                <Routes>
                    <Route path="/*" element={<Articles/>}/>
                    <Route path="/mahsulotlar/*" element={<Products/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </div>
        </section>
    )
}

export default Admin