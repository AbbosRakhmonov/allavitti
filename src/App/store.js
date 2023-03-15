import {configureStore} from '@reduxjs/toolkit'
import LoginSlice from '../Pages/Login/loginSlice'
import ArticlesSlice from '../Pages/Admin/articlesSlice'
import ProductsSlice from '../Pages/Admin/productsSlice'
import NavbarSlice from '../Pages/Navbar/navbarSlice'

export default configureStore({
    reducer: {
        auth: LoginSlice,
        articles: ArticlesSlice,
        products: ProductsSlice,
        language: NavbarSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
})

