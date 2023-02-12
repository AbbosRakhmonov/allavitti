import {forwardRef, useRef} from 'react'

const SnapParent = forwardRef(({...props}, ref) => (
    <div ref={ref} {...props} className="snap-parent-y-mandatory">
        {props.children}
    </div>
))
const Container = ({children}) => {
    const ref = useRef()
    return (
        <div
            style={{
                position: 'relative'
            }}
        >
            <SnapParent
                ref={ref}
                style={{
                    position: 'absolute'
                }}
            >
                {children}
            </SnapParent>
        </div>
    )
}

export default Container