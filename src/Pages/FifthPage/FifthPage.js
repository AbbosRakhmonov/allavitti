import React, {useEffect, useState} from 'react'
import './style.css'
import SecondBg from '../../Backgrounds/SecondBg'
import {motion, useAnimationControls} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Typewriter from 'typewriter-effect'
import MoreBtn from '../../Components/MoreBtn/MoreBtn'

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

const smallText = 'Ўлкамизда хам кўп учрайдиган тери касаллиги терига ранг берувчи пигментларни йўк бўлиши сабабли учрайдиган тери касаллигидир.\n' +
    'Халок булган пигментлар терига ранг бермаганлиги сабабли пес каби ок доғлар юзага келиб чикади.Баъзида бу доғлар нуқта шаклида, баъзида эса тангадек катталикка эга бўлиши мумкин. Vitiligo бир тери касаллиги булиб, Guatr ва бошқа бир касалликларга ўхшаш бир кўриниши бор. Шунинг учун ҳам...'

function FifthPage() {
    const [startTyping, setStartTyping] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const animate = useAnimationControls()
    const {ref, inView} = useInView({threshold: 0.5})
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
        <section ref={ref} className={'position-relative h-100 fifthSection'}>
            <SecondBg/>
            <div className={`fifth-bg ${inView ? 'fifth-bg-animate' : ''}`}></div>
            <div className={`circle-right ${inView ? 'animate-circle' : ''}`}></div>
            <div className={`circle-overlay ${inView ? 'animate-circle-overlay' : ''}`}></div>
            <div className={'fifthSection_content'}>
                <div className="overlayText px-5 align-self-center">
                    <motion.h1 animate={animate}
                               initial="hidden"
                               custom={1}
                               variants={headerVariant}
                               className={`fifthTitle mb-4 ${inView ? 'fifthTitleAnimate' : ''}`}>
                        <span>Витилиго</span> қандай касаллик тури?
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
                    <MoreBtn linkName={'Batafsil'} linkPath={'/articles/4'}
                             classes={`mt-3 moreBtn text-light bg-lightDark ${showBtn ? 'animateFromLeft' : ''}`}/>
                </div>
            </div>
        </section>
    )
}

export default FifthPage