import React from 'react'
import AboutProductImg from './../../Assets/Images/bargliopa.jpg'
import './style.css'
import {useTranslation} from 'react-i18next'

function AboutProduct() {
    const {t} = useTranslation();

    return (
        <div className="about-product-style">
            <div className="pattern-left-box about-pattern-left"></div>
            <div className="pattern-right-box about-pattern-right"></div>
            <div className="about-product-container">
                <div className="general-div-style" data-aos="fade-up" data-aos-duration="1000">
                    <span>{t('about_product_head_text2')}</span>
                </div>
                <div className="row about-box">
                    <div className="col-xl-3 col-lg-3 col-12 order-2 order-lg-1 about-left-text">
                        <ul data-aos="fade-up" data-aos-duration="1000">
                            <li><span></span> {t('about_ul_li1')}</li>
                            <li><span></span> {t('about_ul_li2')}</li>
                            <li><span></span> {t('about_ul_li3')}</li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-10 col-12 order-1 order-lg-2 about-center-img"
                         data-aos="fade-up" data-aos-duration="1000">
                        <img src={AboutProductImg} alt={'allavitti krem dori tabletka'}/>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-12 order-3 about-right-text">
                        <ul data-aos="fade-up" data-aos-duration="1000">
                            <li><span></span> {t('about_ul_li4')}</li>
                            <li><span></span> {t('about_ul_li5')}</li>
                            <li><span></span> {t('about_ul_li6')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutProduct