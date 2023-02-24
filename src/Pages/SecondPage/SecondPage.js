import React, {useEffect, useState} from 'react'
import './style.css'
import Signet from '../../Assets/Images/pechatred.png'
import {motion, useAnimationControls} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Typewriter from 'typewriter-effect'
import MoreBtn from './../../Components/MoreBtn/MoreBtn'
import SecondBg from '../../Backgrounds/SecondBg'
import {useTranslation, Trans} from 'react-i18next'
import DetectScreenSize from '../../Hooks/DetectScreenSize'

const headerVariant = {
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: custom * 0.2 },
  }),
  hidden: {
    x: 100,
    opacity: 0,
  },
};

const AnimateBg = {
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: custom * 0.2 },
  }),
  hidden: {
    x: -100,
    opacity: 0,
  },
};

function SecondPage() {
  const { t } = useTranslation();
  const [startTyping, setStartTyping] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const animate = useAnimationControls();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { isMobile, isTablet } = DetectScreenSize();
  const smallText = t("second_title_desktop");
  const smallTextForMobile = t("second_title_mobile");
  const smallTextForTablet = t("second_title_tablet");
  useEffect(() => {
    if (inView) {
      animate.start("visible");
      setTimeout(() => {
        setStartTyping(true);
      }, 1000);
      setTimeout(
        () => {
          setShowBtn(true);
        },
        isMobile ? 4000 : isTablet ? 7000 : 9800
      );
    } else {
      animate.start("hidden");
      setStartTyping(false);
      setShowBtn(false);
      document.querySelectorAll(".moreBtn").forEach((btn) => {
        btn.classList.remove("animateFromLeft");
      });
    }
  }, [animate, inView, isMobile]);

  return (
    <div className="diagnosis" id="bg" ref={ref}>
      <SecondBg />
      <div className={`second-bg ${inView ? "second-bg-animate" : ""}`}></div>
      <div className="row2">
        <div className="diagnosis-img">
          <motion.div
            animate={animate}
            initial="hidden"
            custom={1}
            variants={AnimateBg}
            className="paper-signet"
          >
            <img src={Signet} />
          </motion.div>
        </div>
        <div className="allavitti-text">
          <div className="head-text">
            <motion.h1
              animate={animate}
              initial="hidden"
              custom={1}
              variants={headerVariant}
              className={`diagnosisTitle mb-4 ${
                inView ? "fifthTitleAnimate" : ""
              }`}
            >
              <Trans i18nKey="second_page_h1">
                <span>Витилиго</span> ташхиси қандай қўйилади?
              </Trans>
              
              {/* Vitiligo qanday kasallik <span>turi</span> */}
            </motion.h1>
            <motion.div
              animate={animate}
              initial="hidden"
              custom={2}
              variants={headerVariant}
            >
              {/* inView show after 3 second */}
              {startTyping && (
                <Typewriter
                  options={{
                    delay: 0.2,
                    wrapperClassName: "text-white secondaryText",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        isMobile
                          ? smallTextForMobile
                          : isTablet
                          ? smallTextForTablet
                          : smallText
                      )
                      .callFunction((state) => {
                        // turn off animation
                        state.elements.cursor.style.animation = "none";
                        // hide cursor
                        state.elements.cursor.style.display = "none";
                      })
                      .start();
                  }}
                />
              )}
            </motion.div>
            <MoreBtn
              linkName={t("second_page_btn")}
              linkPath={"/articles/3"}
              classes={`mt-3 moreBtn text-light bg-lightDanger ${
                showBtn ? "animateFromLeft" : ""
              }`}
              color=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
