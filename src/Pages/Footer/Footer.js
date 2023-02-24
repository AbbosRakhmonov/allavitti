import React, {useEffect} from 'react'
import Logo from '../../Assets/Images/foot-logo.png'
import {MdEmail, MdPhone} from 'react-icons/md'
import {FaTelegram, FaYoutube} from 'react-icons/fa'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {useInView} from 'react-intersection-observer'
import {HashLink} from 'react-router-hash-link'
import './style.css'
import Img1 from '../../Assets/Images/treated/dav1.png'
import Img2 from '../../Assets/Images/treated/dav2.png'
import Img3 from '../../Assets/Images/treated/dav3.png'
import Img4 from '../../Assets/Images/treated/dav4.png'
import Img5 from '../../Assets/Images/treated/dav5.png'
import Img6 from '../../Assets/Images/treated/dav6.png'
import Img7 from '../../Assets/Images/treated/dav7.png'
import Img8 from '../../Assets/Images/treated/dav8.png'
import {motion, useAnimationControls} from 'framer-motion'
import {useTranslation} from 'react-i18next'
import Zoom from 'react-medium-image-zoom'

const footLeft = {
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {duration: 0.6, delay: custom * 0.2}
  }),
  hidden: {
      x: 100,
      opacity: 0
  }
}

const footRight = {
  visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {duration: 0.6, delay: custom * 0.2}
  }),
  hidden: {
      x: -100,
      opacity: 0
  }
}

const footCenter = {
  visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {duration: 0.6, delay: custom * 0.2}
  }),
  hidden: {
      Y: -100,
      opacity: 0
  }
}
function Footer() {
  const {t} = useTranslation();
  const animate = useAnimationControls()
  const {ref, inView} = useInView({threshold: 0.5})
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

  useEffect(() => {
    if (inView) {
        animate.start('visible')
    } else {
        animate.start('hidden')
    }
}, [animate, inView])

  return (
      <div className="footer h-100" ref={ref}>
        <div className="container">
          <div className="row">
            <motion.div
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 foot-first-col"
                animate={animate}
                initial="hidden"
                custom={1}
                variants={footLeft}
            >
              <div className="foot-first">
                <img src={Logo} alt={'allavitti.com'}/>
                <p>
                  {t('foot_text')}
                </p>
                <ul>
                  <li>
                    <MdPhone className="foot-icons"/>
                    +998 99 753 17 57
                  </li>
                  <li>
                    <MdEmail className="foot-icons" />
                    jasurbektoshev9@gmail.com
                  </li>
                </ul>
                <ul>
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
            </motion.div>
            <motion.div
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 foot-col-second"
                animate={animate}
                initial="hidden"
                custom={1}
                variants={footCenter}
            >
              <div className="foot-last">
                <h4>{t('foot_top_text_1')}</h4>
                <ul>
                  <li>
                    <HashLink smooth to="#first_page_id" className="foot-link">
                      {t('link_home')}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#product_page_id" className="foot-link">
                      {t('our_product')}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="/articles" className="foot-link">
                      {t('link_articles')}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#third_page_id" className="foot-link">
                      {t('link_first')}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#bg" className="foot-link">
                      {t('link_second')}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#fifth_page_id" className="foot-link">
                      {t('link_thirt')}
                    </HashLink>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
                animate={animate}
                initial="hidden"
                custom={1}
                variants={footRight}
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
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
            </motion.div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
