import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {motion, useAnimationControls} from 'framer-motion'

const initialVariants = {
    visible: {
        opacity: 1,
        transition: {duration: 1, delayChildren: 0.2, staggerChildren: 0.1}
    },
    hidden: {
        opacity: 0
    }
}

function Section({full, children, variants = initialVariants}) {
    const animation = useAnimationControls()
    const [ref, inView] = useInView({threshold: 0.75})
    useEffect(() => {
        if (inView) {
            animation.start('visible')
        } else {
            animation.start('hidden')
        }
    }, [animation, inView])


    return (
        <motion.div
            className={`snap-child-start section-wrapper`}
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={variants}
            style={{
                marginTop: 2,
                marginBottom: 2,
                height: full ? '100vh' : 'auto',
                width: '100%'
            }}
        >
            {children}
        </motion.div>
    )
}

export default Section
