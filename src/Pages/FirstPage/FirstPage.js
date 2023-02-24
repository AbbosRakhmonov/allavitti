import React from 'react'
import './style.css'
import Navbar from '../Navbar/Navbar'
import {useTranslation} from 'react-i18next'
import ScrollBtn from './../../Components/ScrollDownBtn/ScrollBtn'
import myVideo from './../../assets/Videos/mainBg.webm'
function FirstPage() {

    const {t} = useTranslation();

    return (
        <> 
          <video autoPlay loop muted className='my-video-style'>
            <source src={myVideo} type="video/webm" />
          </video>
        <div className="main" id='first_page_id'>
            <div className="main-background">
                <div className="main-navbar">
                    <Navbar/>
                </div>
                <div className="main-text">
                    <h3>{t('welcome_to_react')}</h3>
                    <p>{t('first_page_title')}</p>
                    <ScrollBtn btnName={t('first_page_btn')}/>
                </div>
            </div>
        </div>
        </>
       
  );
}

export default FirstPage
