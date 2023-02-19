import React from 'react'
import {useMediaQuery} from 'react-responsive'

function DetectScreenSize() {
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({
        minWidth: 769,
        maxWidth: 1024
    })
    return {isMobile, isTablet}
}

export default DetectScreenSize