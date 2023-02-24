import React, {useEffect, useState} from 'react'
import './style.css'
import SecondBg from '../../Backgrounds/SecondBg'
import {motion, useAnimationControls} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
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

function FifthPage() {
    const {t} = useTranslation();
    const smallText = t('fifth_title_desktop')
    const smallTextForMobile = t('fifth_title_mobile')
    const [startTyping, setStartTyping] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const animate = useAnimationControls()
    const {ref, inView} = useInView({threshold: 0.5})
    const {isMobile} = DetectScreenSize()
    useEffect(() => {
        if (inView) {
            animate.start('visible')
            setTimeout(() => {
                setStartTyping(true)
            }, 1000)
            setTimeout(() => {
                setShowBtn(true)
            }, isMobile ? 4000 : 7700)
        } else {
            animate.start('hidden')
            setStartTyping(false)
            setShowBtn(false)
        }
    }, [animate, inView, isMobile])
    return (
        <section ref={ref} className={'position-relative h-100 fifthSection'} id='fifth_page_id'>
            <SecondBg/>
            <div className={`fifth-bg ${inView ? 'fifth-bg-animate' : ''}`}></div>
             <div className={`circle-right ${inView ? 'animate-circle' : ''}`}></div>
            <div className={`circle-overlay ${inView ? 'animate-circle-overlay' : ''}`}></div>
            <div className={'fifthSection_content'}>
                <div className="overlayText px-lg-5 align-self-center">
               
                    <motion.h1 animate={animate}
                               initial="hidden"
                               custom={1}
                               variants={headerVariant}
                               className={`fifthTitle mb-4 ${inView ? 'fifthTitleAnimate' : ''}`}>         
                             <Trans>{t('fifth_page_h1')}</Trans>  
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
                                wrapperClassName: 'text-orange secondaryText'
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString(isMobile ? smallTextForMobile : smallText)
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
                    <MoreBtn linkName={t('fifth_page_btn')} linkPath={'/articles/4'}
                             classes={`mt-3 moreBtn text-light bg-lightDark ${showBtn ? 'animateFromLeft' : ''}`}/>
                </div>
            </div>
        </section>
    )
}

export default FifthPage