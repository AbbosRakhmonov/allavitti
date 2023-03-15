import React, {useState} from 'react'
import {
    MDBCollapse,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarNav,
    MDBNavbarToggler
} from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logOut} from '../../Pages/Login/loginSlice'


function AdminNavbar() {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    const exit = () => {
        dispatch(logOut())
        window.location.href = '/'
    }
    return (
        <MDBNavbar expand="lg" light bgColor="light">
            <MDBContainer fluid>
                <MDBNavbarBrand href="#">Allavitti</MDBNavbarBrand>
                <MDBNavbarToggler
                    type="button"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleCollapse}
                >
                    <MDBIcon icon="bars" fas/>
                </MDBNavbarToggler>
                <MDBCollapse navbar show={isOpen}>
                    <MDBNavbarNav left={true} className={'w-auto'}>
                        <MDBNavbarItem>
                            <Link to={'/dashboard'} className={`nav-link`}>
                                Maqolalar
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to={'/dashboard/mahsulotlar'}
                                  className={`nav-link`}>
                                Mahsulotlar
                            </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right={true} className={'w-auto'}>
                        <MDBDropdown group className="shadow-0">
                            <MDBDropdownToggle color="light">
                                {user ?
                                    <img
                                        crossOrigin="anonymous"
                                        src={window.location.protocol + '//' + window.location.hostname + ':5000/uploads/' + user.avatar}
                                        alt={user.name} height={25} className={'rounded-circle'}/> :
                                    <MDBIcon icon="user" fas/>}
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link onClick={exit}>
                                    {/*    mdb icon door*/}
                                    <MDBIcon icon="door-open" fas/> Chiqish
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default AdminNavbar