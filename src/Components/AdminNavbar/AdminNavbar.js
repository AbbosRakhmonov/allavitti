import React, {useEffect, useState} from 'react'
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
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from 'mdb-react-ui-kit'


function AdminNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState(1)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        //     get active link from url
        const url = window.location.pathname.split('/')
        if (url[2] === 'maxsulotlar') {
            setActiveLink(2)
        } else {
            setActiveLink(1)
        }
    }, [])
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
                            <MDBNavbarLink active={activeLink === 1} aria-current="page" href="/dashboard">
                                Maqolalar
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active={activeLink === 2}
                                           href="/dashboard/maxsulotlar">Maxsulotlar</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right={true} className={'w-auto'}>
                        <MDBDropdown group className="shadow-0">
                            <MDBDropdownToggle color="light">Action</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>Action</MDBDropdownItem>
                                <MDBDropdownItem link>Another action</MDBDropdownItem>
                                <MDBDropdownItem link>Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default AdminNavbar