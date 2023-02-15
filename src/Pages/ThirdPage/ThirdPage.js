import React, {useEffect, useState} from 'react'
import './style.css'
import {motion, useAnimationControls} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Vitiligo from '../../Assets/Images/Vitiligo.webp'
import Woman from '../../Assets/Images/woman.png'
import Typewriter from 'typewriter-effect'
import MoreBtn from '../../Components/MoreBtn/MoreBtn'

const backgroundVariants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: 1, delayChildren: 0.2, staggerChildren: 0.1}
    },
    hidden: {
        opacity: 0,
        x: 100
    }
}

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

const smallText = 'Хар бир инсоннинг узига хос тери ранги бўлади. Теримиздаги рангларни пигментлар туфайли оламиз. Меланоасит билан биргаликда теримиз ўзига хос равишда рангга эга бўлади. Витилиго эса бу пигментларни ўлдириб, теримизда оқ келиб чиқишига сабаб бўлувчи бир тери касаллигидир. Витилиго тананинг хужайралар билан келиша олмаган дермотологик ходисадир. Витилиго халқ орасида 1-1,5% инсонларда учрайди. Кўпинча кўл, юз, бўйин ва базиларида жинсий аъзоларда пайдо булади. Витилигога чалинган одам халқ орасида ўзини рухий жиҳатдан ёмон хис қилади...'


function ThirdPage() {
    const [startTyping, setStartTyping] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const backgroundAnimation = useAnimationControls()
    const {ref, inView} = useInView({threshold: 0.5})

    useEffect(() => {
        if (inView) {
            backgroundAnimation.start('visible')
            setTimeout(() => {
                setStartTyping(true)
            }, 1000)
            setTimeout(() => {
                setShowBtn(true)
            }, 9800)
        } else {
            backgroundAnimation.start('hidden')
            setStartTyping(false)
            setShowBtn(false)
            document.querySelector('.moreBtn').classList.remove('animateFromLeft')
        }
    }, [backgroundAnimation, inView])
    return (
        <section ref={ref} className={'secondSection position-relative h-100'}>
            <motion.div className={'position-absolute w-100 h-100 overflow-hidden d-flex'} style={{zIndex: 6}}>
                <div className="overlayText px-5 align-self-center">
                    <motion.h1 animate={backgroundAnimation}
                               initial="hidden"
                               custom={1}
                               variants={headerVariant}
                               className={`text-light mb-4 thirdSectionTitle ${inView ? 'thirdSectionTitleAnimate' : ''}`}>Витилиго
                        ўзи <span>нима?</span>
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
                        <MoreBtn linkName={'Batafsil'} linkPath={'/articles/1'} color={'secondary'}
                                 classes={`mt-3 moreBtn ${showBtn ? 'animateFromLeft' : ''}`}/>
                    </motion.div>
                </div>
                <div
                    className="secondSection_rightSide d-flex align-items-center justify-content-center position-relative">
                    <img
                        src={Woman} alt="woman" style={{width: '95%'}}
                        className={`pe-none ${inView ? 'scaleImg' : ''}`} loading={'lazy'}/>
                </div>
            </motion.div>
            <motion.div
                animate={backgroundAnimation}
                initial="hidden"
                variants={backgroundVariants}
                className={`backgroundImageCover position-absolute w-100 h-100 overflow-hidden ${inView ? 'animateBackgroundImageCover' : ''}`}>
                <img src={Vitiligo} alt="Allavitti vitaligo"/>
            </motion.div>
        </section>
    )
}

export default ThirdPage