import React, {useEffect} from 'react'
import {MdEmail, MdPhone} from 'react-icons/md'
import {FaTelegram, FaYoutube} from 'react-icons/fa'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {HashLink} from 'react-router-hash-link'
import './style.css';
import Img1 from '../../Assets/Images/treated/dav1.png'
import Img2 from '../../Assets/Images/treated/dav2.png'
import Img3 from '../../Assets/Images/treated/dav3.png'
import Img4 from '../../Assets/Images/treated/dav4.png'
import Img5 from '../../Assets/Images/treated/dav5.png'
import Img6 from '../../Assets/Images/treated/dav6.png'
import Img7 from '../../Assets/Images/treated/dav7.png'
import Img8 from '../../Assets/Images/treated/dav8.png'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useTranslation} from 'react-i18next'

function Footer() {
  const {t} = useTranslation();

  useEffect(() => {
    AOS.init();
  }, [])
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
  ];

  return (
      <div className="footer h-100">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 foot-first-col"
              data-aos="fade-up" data-aos-duration="1000"
            >
              <div className="foot-first">
                 <h2>Allavitti.com</h2>
                <p>
                {t('foot_text')}
                </p>
                <ul className='first-ul-foot'>
                  <li>
                    <MdPhone className="foot-icons"/>
                    +998 99 753 17 57
                  </li>
                  <li>
                    <MdEmail className="foot-icons" />
                    jasurbektoshev9@gmail.com
                  </li>
                </ul>
                <ul className='second-ul-foot'>
                  <li>
                    <HashLink smooth to="#" className="teleg">
                      <FaTelegram size={`1.25rem`}/>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#" className="yout">
                      <FaYoutube size={`1.25rem`}/>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#" className="insta">
                      <AiOutlineInstagram size={`1.25rem`}/>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#" className="face">
                      <AiOutlineFacebook size={`1.25rem`}/>
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
            <div
             className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 foot-col-second"
             data-aos="fade-up" data-aos-duration="1000"
            >
              <div className="foot-last">
                <h4> {t('foot_top_text_1')}</h4>
                <ul>
                  <li>
                    <HashLink smooth to="#first_page_id" className="foot-link">
                      Bosh Sahifa
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#product_page_id" className="foot-link">
                      Maxsulotlarimiz
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="/articles" className="foot-link">
                      Maqolallar
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#third_page_id" className="foot-link">
                        Витилиго ўзи нима?
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#bg" className="foot-link">
                    Витилиго ташхиси қандай қўйилади?
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#fifth_page_id" className="foot-link">
                        Витилиго қандай касаллик тури?
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
            <div
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="foot-thirt">
                <h4>{t('foot_top_text_2')}</h4>
                <div className="row">
                  {data?.map((item, index) => {
                    return (<div
                        className=" col-3 pics"
                        key={index}
                    >
                      <Zoom>
                        <img src={item.imgSrc} className={'footImgZoom'} alt={'natijalar'}/>
                      </Zoom>
                    </div>)
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
