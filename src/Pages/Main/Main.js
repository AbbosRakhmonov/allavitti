import React from 'react'
import Navbar from '../Navbar/Navbar'
import MainBottom from '../../Components/MainBottom/MainBottom'
import SwiperImg from '../SwiperImg/SwiperImg'
import './style.css'
import {useTranslation} from 'react-i18next'

function Main() {
    const {t} = useTranslation();

    return (
        <>
            <Navbar/>
            <div className="main" id={'#main'}>
                <div className="pattern-left-box main-pattern-left" data-aos="fade-up"></div>
                <div className="pattern-right-box main-pattern-right" data-aos="fade-up"></div>
                <div className="main-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-12 col-first-6 order-2 order-md-1">
                            <div className="main-left-box">
                                <div className="text">
                                    <h2 data-aos="fade-up">
                                        {t('welcome_to_react')}
                                    </h2>
                                    <p data-aos="fade-up">
                                        {t('main_p_text')}
                                    </p>
                                    <ul data-aos="fade-up">
                                        <li>
                                            <p>{t('main_ul_li_1')}</p>
                                        </li>
                                        <li>
                                            <p>{t('main_ul_li_2')}</p>
                                        </li>
                                        <li>
                                            <p>{t('main_ul_li_3')}</p>
                                        </li>
                                    </ul>
                                    <div className="more-btn-padding" data-aos="fade-up">
                                        <MainBottom nameBtn={t('first_page_btn')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-12 col-second-6 swiper-col-style order-1 order-md-2"
                             data-aos="fade-up">
                            <SwiperImg/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;