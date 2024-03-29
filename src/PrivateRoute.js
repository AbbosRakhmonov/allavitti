import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn) || localStorage.getItem('allavittiToken')

    return (
        isLoggedIn ? <Outlet/> : <Navigate to="login" replace={true}/>
    )
}

export default PrivateRoute