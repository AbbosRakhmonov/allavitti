import axios from 'axios'
import Store from '../App/store'
import {logOut} from '../Pages/Login/loginSlice'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('allavittiToken')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    (response) => response,
    (response) => {
        // if (response.code === 'ERR_NETWORK') {
        //     Store.dispatch(logOut('Интернет билан боғлиқ муаммо мавжуд'))
        // }
        if (response.response.status === 401) {
            Store.dispatch(logOut('Авторизация устарела'))
            window.location = '/login'
        }
        return Promise.reject(response?.response?.data)
    }
)

export default instance
