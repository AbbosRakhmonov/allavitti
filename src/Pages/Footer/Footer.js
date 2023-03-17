import React, {useEffect, useState} from 'react'
import {MdEmail, MdPhone} from 'react-icons/md'
import {FaTelegram, FaYoutube} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HashLink} from 'react-router-hash-link'
import './style.css'
import Img1 from '../../Assets/Images/treated/1.jpg'
import Img2 from '../../Assets/Images/treated/2.jpg'
import Img3 from '../../Assets/Images/treated/3.jpg'
import Img4 from '../../Assets/Images/treated/4.jpg'
import Img5 from '../../Assets/Images/treated/5.jpg'
import Img6 from '../../Assets/Images/treated/6.jpg'
import Img7 from '../../Assets/Images/treated/7.jpg'
import Img8 from '../../Assets/Images/treated/8.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {filter, map, uniqueId} from 'lodash'
import {Link} from 'react-router-dom'

function Footer() {
  const [currentArticles, setCurrentArticles] = useState([])
  const {articles} = useSelector(state => state.articles)
  const {language} = useSelector(state => state.language)
  const {t} = useTranslation()

  useEffect(() => {
    AOS.init()
  }, [])
  useEffect(() => {
    if (articles.length > 0) {
      const filtered = filter(articles, (article) => {
        return article.title[language].trim() !== ''
      })
      const res = map(filtered, (article) => {
        return {
          id: article._id,
          title: article.title[language],
          text: article.description[language]
        }
      })
      setCurrentArticles(res.slice(0, 3))
    }
  }, [articles, language])
  let data = [
    {
      id: 1,
      imgSrc: Img1
    },
    {
      id: 2,
      imgSrc: Img2
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
                     +998 94 653 48 84    
                  </li>
                  <li>
                    <MdEmail className="foot-icons" />
                    allavitticream@gmail.com
                  </li>
                </ul>
                <ul className='second-ul-foot'>
                  <li>
                    <HashLink smooth to="https://t.me/turkiye_saliha" className="teleg">
                      <FaTelegram size={`1.25rem`}/>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="https://youtube.com/@allavitti_cream" className="yout">
                      <FaYoutube size={`1.25rem`}/>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="https://instagram.com/allavitti_vitiligo_cream?igshid=YmMyMTA2M2Y=" className="insta">
                      <AiOutlineInstagram size={`1.25rem`}/>
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
                    <HashLink smooth to="#main" className="foot-link">
                      {t('link_home')}
                    </HashLink>
                  </li>
                  <li>
                    <Link to="/articles" className="foot-link">
                      {t('link_articles')}
                    </Link>
                  </li>
                  {
                    map(currentArticles, (item) => <li key={uniqueId('link__')}>
                      <Link to={'/articles/' + item.id} className="foot-link">
                        {item.title}
                      </Link>
                    </li>)
                  }
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
