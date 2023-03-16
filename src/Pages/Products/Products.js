import React, {useEffect} from 'react'
import ProductComponent from '../../Components/ProductComponent/ProductComponent'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useTranslation} from 'react-i18next'
import {map, uniqueId} from 'lodash'
import {useSelector} from 'react-redux'

function Products() {
    const {products} = useSelector(state => state.products)
    const {language} = useSelector((state) => state.language)

    const {t} = useTranslation()
    
    useEffect(() => {
        AOS.init()
    }, [])
    
    return (
        <div className="products">
            <div className="pattern-left-box product-pattern-left"></div>
            <div className="pattern-right-box product-pattern-right"></div>
            <div className="pattern-left-box product-pattern-left"></div>
            <div className="pattern-right-box product-pattern-right"></div>
            <div className="pattern-center-box"></div>
            <div className="product-container">
                <div className="general-div-style" data-aos="fade-up" data-aos-duration="1000">
                    {t('our_product')}
                </div>
                <ul className="our-products">
                    {
                        map(products, (item, index) => item.description[language] &&
                            <li key={uniqueId('product_')} data-aos="fade-up"
                                data-aos-duration="1000">
                                <ProductComponent productName={item.title} productText={item.description[language]}
                                                  productImg={window.location.protocol + '//' + window.location.hostname + ':5000/uploads/' + item.image}
                                                  reverseBlok={index % 2 !== 0}/>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Products;