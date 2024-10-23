import React, { FC } from 'react';
//Bootstrap
import { Container, Nav, Navbar, Image } from 'react-bootstrap';

interface FyloNavbarProps {
    logoImg: string,
}

const FyloNavbar: FC<FyloNavbarProps> = ({ logoImg }) => {
    return(
        <Navbar expand='lg' fixed='top' data-aos="fade-down" className='mt-4 mx-5'>
            <Container fluid className=''>
                <Navbar.Brand href='#home'><Image fluid src={logoImg} alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='shadow-none border-0 cs-toggle' />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end text-center cs-fw-700'>
                    <Nav.Link className='cs-link cs-fc-blue cs-transition me-lg-4 my-1'>Features</Nav.Link>
                    <Nav.Link className='cs-link cs-fc-blue cs-transition mx-lg-4 my-1'>Team</Nav.Link>
                    <Nav.Link className='cs-link cs-fc-blue cs-transition ms-lg-4 my-1'>Sign In</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default FyloNavbar;