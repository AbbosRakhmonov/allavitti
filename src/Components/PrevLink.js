import React from 'react'
import {MDBBtn} from 'mdb-react-ui-kit'
import {useNavigate} from 'react-router-dom'

function PrevLink() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (<MDBBtn className="me-1" color="secondary" onClick={goBack}>
        <i className="fas fa-arrow-left me-1"/>
        Ortga qaytish
    </MDBBtn>)
}

export default PrevLink