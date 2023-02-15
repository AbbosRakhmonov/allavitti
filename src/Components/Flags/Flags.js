import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import './style.css'
function Flags() {
  

  return (
    <MDBDropdown>
    <MDBDropdownToggle color='secondary'>Tilni Tanlang</MDBDropdownToggle>
    <MDBDropdownMenu>
      <MDBDropdownItem>
         <a className="dropdown-item" href="#"><i className="flag-japan flag"></i>日本語</a>
      </MDBDropdownItem>
      <MDBDropdownItem>
        <a className="dropdown-item" href="#"><i className="flag-germany flag"></i>Deutsch</a>
      </MDBDropdownItem>
      <MDBDropdownItem>
        <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
  );


  
}

export default Flags;