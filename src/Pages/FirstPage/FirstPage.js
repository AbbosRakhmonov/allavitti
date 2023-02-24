import React from 'react'
import './style.css'
import Navbar from '../Navbar/Navbar'
// import MoreBtn from '../../Components/MoreBtn/MoreBtn'
import { useTranslation } from "react-i18next";
import { MDBBtn } from 'mdb-react-ui-kit';
import { IoArrowDownSharp } from "react-icons/io5";
import ScrollBtn from '../../Components/ScrollDownBtn/ScrollBtn';
function FirstPage() {

    const {t} = useTranslation();

    return (
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
  );
}

export default FirstPage
