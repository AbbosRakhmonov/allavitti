import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { BsFillCheckCircleFill } from "react-icons/bs";
import './style.css'
function MainBottom({nameBtn}){
    return(
        <MDBBtn className="main-btn-style">
            {nameBtn}
            <BsFillCheckCircleFill className="main-btn-icon" size={`1.25rem`}/>
        </MDBBtn>
    )
}

export default MainBottom;