import React, {useEffect, useState} from 'react'
import './style.css'
import {motion, useAnimationControls} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Woman from '../../Assets/Images/woman.png'
import Typewriter from 'typewriter-effect'
import MoreBtn from '../../Components/MoreBtn/MoreBtn'
import DetectScreenSize from '../../Hooks/DetectScreenSize'
import {Trans, useTranslation} from 'react-i18next'

const headerVariant = {
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

function ThirdPage() {
    const {t} = useTranslation();
    const [startTyping, setStartTyping] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const backgroundAnimation = useAnimationControls()
    const {ref, inView} = useInView({threshold: 0.5})
    const {isMobile, isTablet} = DetectScreenSize()

    const smallText = t('third_title_desktop')

    useEffect(() => {
        if (inView) {
            backgroundAnimation.start('visible')
            setTimeout(() => {
                setStartTyping(true)
            }, 1000)
            setTimeout(() => {
                setShowBtn(true)
            }, isMobile ? 4000 : isTablet ? 7000 : 9800)
        } else {
            backgroundAnimation.start('hidden')
            setStartTyping(false)
            setShowBtn(false)
        }
    }, [backgroundAnimation, inView, isMobile, isTablet])
    return (
        <section ref={ref} className={'secondSection position-relative h-100'} id='third_page_id'>
            <motion.div className={'topBox w-100 position-relative'} style={{zIndex: 6}}>
                <div className="overlayText px-lg-5 align-self-center">
                    <motion.h1 animate={backgroundAnimation}
                               initial="hidden"
                               custom={1}
                               variants={headerVariant}
                               className={`text-light mb-4 thirdSectionTitle ${inView ? 'thirdSectionTitleAnimate' : ''}`}>
                        <Trans i18nKey="third_page_h1">Витилиго ўзи <span>нима?</span></Trans>

                    </motion.h1>
                    <motion.div
                        animate={backgroundAnimation}
                        initial="hidden"
                        custom={2}
                        variants={headerVariant}
                    >
                        {/* inView show after 3 second */}
                        {startTyping && <Typewriter
                            options={{
                                delay: 0.2,
                                wrapperClassName: 'mute-text secondaryText'
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
                        <MoreBtn linkName={t('third_page_btn')} linkPath={'/articles/1'} color={'secondary'}
                                 classes={`mt-3 moreBtn third_color_btn ${showBtn ? 'animateFromLeft' : ''}`}/>
                    </motion.div>
                </div>
                <div
                    className="secondSection_rightSide d-flex align-items-center justify-content-center position-relative">
                    <img
                        src={Woman} alt="woman" style={{width: '95%'}}
                        className={`pe-none ${inView ? 'scaleImg' : ''}`} loading={'lazy'}/>
                </div>
            </motion.div>
        </section>
    )
}

export default ThirdPage