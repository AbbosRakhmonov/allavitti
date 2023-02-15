import React from 'react'
import {Link} from 'react-router-dom'
import {MDBBtn} from 'mdb-react-ui-kit'

function MoreBtn({linkPath, linkName, classes = '', color = 'primary'}) {
    return (
        <Link to={linkPath}>
            <MDBBtn className={classes} color={color}>
                {linkName}
            </MDBBtn>
        </Link>
    )
}

export default MoreBtn