import React from "react";
import {Link} from 'react-router-dom'
function MoreBtn({linkPath, linkName, color}){
    return(
        <Link to={linkPath} className={`btn btn-${color}`}>{linkName}</Link>
    )
}

export default MoreBtn;