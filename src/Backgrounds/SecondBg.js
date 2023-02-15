import React from 'react'
import ParticlesBg from 'particles-bg'

function SecondBg() {
    return (
        <div className={'balls-wrapper overflow-hidden w-100 h-100 position-absolute'}>
            <ParticlesBg type="cobweb" color={'#528A80'}/>
        </div>
    )
}

export default SecondBg