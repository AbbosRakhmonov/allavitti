import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { BsFillCheckCircleFill } from "react-icons/bs";
import './style.css'
function MainBottom(){
    return(
        <MDBBtn className="main-btn-style">
            Batafsil
            <BsFillCheckCircleFill className="main-btn-icon" size={`1.25rem`}/>
        </MDBBtn>
    )
}

export default MainBottom;