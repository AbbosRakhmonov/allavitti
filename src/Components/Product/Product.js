import React from 'react'
import './style.css'
import {IoIosEye, IoIosHeart} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import {useTranslation} from 'react-i18next'

function Product({product, inView}) {
    const {t} = useTranslation();
    const {name, price, image, description} = product
    return (
        <div className={`productCard ${inView ? 'animateProductCard' : ''}`}>
            <div className="cardTop">
                <Zoom>
                    <img className={'frontImg'} src={image} alt={name}/>
                </Zoom>
                <h3 className={'productName'}>{name}</h3>
                <p className={'productDescription'}>{description}</p>
            </div>
            <div className="cardBottom">
                <div className="priceAndBtn">
                    <p className={'productPrice'}>{price.toLocaleString()} $</p>
                    <Link to={'https://t.me/abbosbekraxmonov'} target={'_blank'} className={'btn btn-primary buyBtn'}>
                        <span className="button-text">{t('product_btn')}</span>
                        <span className="phone-number">+998 99 753-64-54</span>
                    </Link>
                </div>
                <div className="watchesAndLikes">
                    <p className={'watches'}><IoIosEye color={'#00658a'}/> 15 000 {t('product_view')}</p>
                    <p className={'likes'}><IoIosHeart color={'#de1b33'}/> 1000 {t('product_like')}</p>
                </div>
            </div>
        </div>
    )
}

export default Product