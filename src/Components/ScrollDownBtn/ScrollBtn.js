import React from "react";
import './style.css'
function ScrollBtn({btnName}){
    return(
        <a href="#" className="scroll-btn">
            {btnName}
        </a>
    )
}

export default ScrollBtn;