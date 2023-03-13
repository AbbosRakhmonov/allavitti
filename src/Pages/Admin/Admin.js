import React from 'react'
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'
import {Route, Routes} from 'react-router-dom'

function Admin() {
    return (
        <section id={'admin-panel'}>
            <AdminNavbar/>
            <div className={'mt-2'}>
                <Routes>
                    <Route path="/" element={<div>Hello</div>}/>
                    <Route path="/maxsulotlar" element={<div>Hello World</div>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </div>
        </section>
    )
}

export default Admin