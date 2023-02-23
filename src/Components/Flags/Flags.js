import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import './style.css'
import i18next from 'i18next';
import cookie from 'js-cookie';
import uzbIcon from './../../assets/images/flags/uzb.png';
import engIcon from './../../assets/images/flags/usa.png';
import rusIcon from './../../assets/images/flags/rus.png';
import turkIcon from './../../assets/images/flags/tr.png';
import { useTranslation } from "react-i18next";
const language = [
  {
   code : 'uz',
   name: "Uzbek",
   country_code : 'tc',
   country_img: uzbIcon
  },
  {
   code : 'en',
   name: "English",
   country_code : 'gb',
   country_img: engIcon
  },
  {
   code : 'ru',
   name: "Русский",
   country_code : 'mc',
   country_img: rusIcon
  },
  {
   code : 'tr',
   name: "Türkiye",
   country_code : 'th',
   country_img: turkIcon
  }
]
function Flags() {
  const {t} = useTranslation();
   const currentLanguageCode = cookie.get('i18next') || 'en'
  return (
    <MDBDropdown>
    <MDBDropdownToggle color='secondary'>{t('drop_toggle_name')}</MDBDropdownToggle>
    <MDBDropdownMenu className='dropdown-menu-style'>
      {
        language.map(({code, name, country_code, country_img})=> (
          <MDBDropdownItem key={country_code}>
            <button className={`dropdown-item dropdown-btn-style ${code === currentLanguageCode ? 'dropdown-item-active' : ""}`} onClick={()=> i18next.changeLanguage(code)}><img src={country_img}/>{name}</button>
         </MDBDropdownItem>
        ))
      }
    </MDBDropdownMenu>
  </MDBDropdown>
  );


  
}

export default Flags;