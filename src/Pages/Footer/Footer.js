import React, {useEffect} from 'react'
import Logo from '../../Assets/Images/foot-logo.png'
import {MdEmail, MdPhone} from 'react-icons/md'
import {FaTelegram, FaYoutube} from 'react-icons/fa'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {useInView} from 'react-intersection-observer'
import {Link} from 'react-router-dom'
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

  // const [model, setModel] = useState(false);
  // const [tempImgSrc, setTempImgSrc] = useState("");

  // const getImg = (imgSrc) => {
  //   setTempImgSrc(imgSrc);
  //   setModel(true);
  // };

  useEffect(() => {
    if (inView) {
        animate.start('visible')
    } else {
        animate.start('hidden')
    }
}, [animate, inView])

  return (
    <>
      {/* <div className={model ? "model open" : "model"} id='foot_page_id'>
        <img src={tempImgSrc} />
        <IoClose className="img-close" onClick={() => setModel(false)} />
      </div> */}
      <div className="footer" ref={ref}>
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
                <img src={Logo} />
                <p>
                   {t('foot_text')}
                </p>
                <ul>
                  <li>
                    <MdPhone className="foot-icons" />
                    +998 99 753 17 57
                  </li>
                  <li>
                    <MdEmail className="foot-icons" />
                    jasurbektoshev9@gmail.com
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#" className="teleg">
                      <FaTelegram size={`1.25rem`} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="yout">
                      <FaYoutube size={`1.25rem`} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="insta">
                      <AiOutlineInstagram size={`1.25rem`} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="face">
                      <AiOutlineFacebook size={`1.25rem`} />
                    </a>
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
                    <a href="#first_page_id" className="foot-link">
                      {t('link_home')}
                    </a>
                  </li>
                  <li>
                    <a href="#product_page_id" className="foot-link">
                      {t('our_product')}
                    </a>
                  </li>
                  <li>
                    <Link to="/articles" className="foot-link">
                      {t('link_articles')}
                    </Link>
                  </li>
                  <li>
                    <a href="#third_page_id" className="foot-link">
                      {t('link_first')}
                    </a>
                  </li>
                  <li>
                    <a href="#bg" className="foot-link">
                      {t('link_second')}
                    </a>
                  </li>
                  <li>
                     <a href="#fifth_page_id" className="foot-link">
                       {t('link_thirt')}
                    </a>
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
                    return (
                      <div
                        className=" col-3 pics"
                        key={index}
                        // onClick={() => getImg(item.imgSrc)}
                      >
                        <Zoom>
                           <img src={item.imgSrc} className={'footImgZoom'} />
                        </Zoom>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
