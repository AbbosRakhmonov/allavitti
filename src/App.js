import React, {useEffect} from 'react'
import Main from './Pages/Main/Main'
import Allavitti from './Pages/Allavitti/Allavitti'
import Products from './Pages/Products/Products'
import AboutProduct from './Pages/AboutProduct/AboutProduct'
import MoreQuestion from './Pages/MoreQuestion/MoreQuestion'
import Footer from './Pages/Footer/Footer'
import './index.css'
import {useDispatch} from 'react-redux'
import {getArticles} from './Pages/Admin/articlesSlice'
import {getProducts} from './Pages/Admin/productsSlice'
import {changeLanguage} from './Pages/Navbar/navbarSlice'
import AOS from "aos";
import 'aos/dist/aos.css'


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    useEffect(() => {
        const lang = localStorage.getItem('lang')
        if (lang) {
            dispatch(changeLanguage(lang))
        }
        dispatch(getArticles())
        dispatch(getProducts())
    }, [dispatch])
    return (
        <section>
            <Main/>
            <Allavitti/>
            <Products/>
            <AboutProduct/>
            <MoreQuestion/>
            <Footer/>
        </section>
    )
}

export default App;

