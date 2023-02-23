import React, {useEffect, useState} from "react";
import "./style.css";
import Signet from './../../assets/images/pechatred.png';
import {motion, useAnimationControls} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Typewriter from 'typewriter-effect'
import MoreBtn from './../../Components/MoreBtn/MoreBtn'
import SecondBg from "../../Backgrounds/SecondBg";
import { useTranslation } from "react-i18next";

const headerVariant = {
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

const AnimateBg = {
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

function SecondPage() {
    const {t} = useTranslation();
    const [startTyping, setStartTyping] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const animate = useAnimationControls()
    const {ref, inView} = useInView({threshold: 0.5})
    const smallText = t('second_title_desktop')
    const smallTextForMobile = t('second_title_mobile')
    const smallTextForTablet = t('second_title_tablet')
    useEffect(() => {
        if (inView) {
            animate.start('visible')
            setTimeout(() => {
                setStartTyping(true)
            }, 1000)
            setTimeout(() => {
                setShowBtn(true)
            }, 7700)
        } else {
            animate.start('hidden')
            setStartTyping(false)
            setShowBtn(false)
            document.querySelectorAll('.moreBtn').forEach((btn) => {
                btn.classList.remove('animateFromLeft')
            })
        }
    }, [animate, inView])

  return (
    <div className="diagnosis" id="bg" ref={ref}>
      <SecondBg/>
      <div className="row">
      <div className="col-5 diagnosis-img">
          <motion.div 
            animate={animate}
            initial="hidden"
            custom={1}
            variants={AnimateBg}
            className="paper-signet">
              <img 
                src={Signet}
              />
          </motion.div>
        </div>
        <div className="col-7 allavitti-text">
            <div className="head-text">
            <motion.h1 animate={animate}
                               initial="hidden"
                               custom={1}
                               variants={headerVariant}
                               className={`diagnosisTitle mb-4 ${inView ? 'fifthTitleAnimate' : ''}`}>
                               {t('second_page_h1')}
                    </motion.h1>
                    <motion.div
                        animate={animate}
                        initial="hidden"
                        custom={2}
                        variants={headerVariant}
                    >
                        {/* inView show after 3 second */}
                        {startTyping && <Typewriter
                            options={{
                                delay: 0.2,
                                wrapperClassName: 'text-white secondaryText'
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString(smallText)
                                    .callFunction((state) => {
                                        // turn off animation
                                        state.elements.cursor.style.animation = 'none'
                                        // hide cursor
                                        state.elements.cursor.style.display = 'none'
                                    })
                                    .start()
                            }}
                        />}
                    </motion.div>
                    <MoreBtn linkName={t('second_page_btn')} linkPath={'/articles/3'}
                             classes={`mt-3 moreBtn text-light bg-lightDanger ${showBtn ? 'animateFromLeft' : ''}`} color=""/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;