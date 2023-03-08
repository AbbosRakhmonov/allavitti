import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import './style.css'
function GeneralBtn(){
    return(
        <div className="d-grid gap-2">
        <MDBBtn className="general-btn-style">Bizning Maxsulotlarimiz</MDBBtn>
    </div>
    )
}

export default GeneralBtn;