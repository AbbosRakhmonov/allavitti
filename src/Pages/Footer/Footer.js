import React, { useState, useEffect } from "react";
import Logo from "./../../assets/images/foot-logo.png";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import {useInView} from 'react-intersection-observer'
import { Link } from "react-router-dom";
import "./style.css";
import Img1 from "../../assets/images/treated/dav1.png";
import Img2 from "../../assets/images/treated/dav2.png";
import Img3 from "../../assets/images/treated/dav3.png";
import Img4 from "../../assets/images/treated/dav4.png";
import Img5 from "../../assets/images/treated/dav5.png";
import Img6 from "../../assets/images/treated/dav6.png";
import Img7 from "../../assets/images/treated/dav7.png";
import Img8 from "../../assets/images/treated/dav8.png";
import { IoClose } from "react-icons/io5";
import {motion, useAnimationControls} from 'framer-motion'
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

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  useEffect(() => {
    if (inView) {
        animate.start('visible')
    } else {
        animate.start('hidden')
    }
}, [animate, inView])

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <IoClose className="img-close" onClick={() => setModel(false)} />
      </div>
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
                  203, Envato Labs, Behind Alis Steet, Melbourne, Australia.
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
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link to="/" className="foot-link">
                      Витилиго ўзи нима?
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="foot-link">
                      Витилиго ташхиси қандай қўйилади?
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="foot-link">
                      Витилиго қандай касаллик тури
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="foot-link">
                      Витилиго ташхиси қандай қўйилади?
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="foot-link">
                      Витилиго қандай касаллик тури
                    </Link>
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
                <h4>Our Results</h4>
                <div className="row">
                  {data?.map((item, index) => {
                    return (
                      <div
                        className="col-3 pics"
                        key={index}
                        onClick={() => getImg(item.imgSrc)}
                      >
                        <img src={item.imgSrc} style={{ width: "100%" }} />
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
