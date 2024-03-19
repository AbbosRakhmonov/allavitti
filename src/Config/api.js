import axios from 'axios'
import Store from '../App/store'
import { logOut } from '../Pages/Login/loginSlice'

const instance = axios.create({
    baseURL: '/api/v1',
    proxy: {
        host: "http://localhost",
        port: 5000
    },
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
        }
        return Promise.reject(response?.response?.data)
    }
)

export default instance
