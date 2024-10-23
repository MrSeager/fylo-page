import React, { FC, useState } from 'react';
//Bootstrap
import { Container, Row, Col, Image, Button, ButtonGroup } from 'react-bootstrap';
//Icons
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface FyloFooterProps {
    logoImg: string,
    phone: string,
    email: string,
}

const FyloFooter: FC<FyloFooterProps> = ({ logoImg, phone, email }) => {
    return (
        <Container fluid className='p-5 cs-bg-blue-3 text-white'>
            <Row>
                <Col xs={12} className='mb-3'>
                    <Image src={logoImg} alt='logo' className='cs-img h-75' />
                </Col>
                <Col lg={4} xs={12} className='mb-3'>
                    <Container fluid className='p-0 mb-2 d-flex flex-row align-items-end justify-content-start'>
                        <h4 className='p-0 m-0'><BiSolidPhoneCall className='me-2' /></h4>
                        <p className='p-0 m-0'>{phone}</p>
                    </Container>
                    <Container fluid className='p-0 d-flex flex-row align-items-end justify-content-start'>
                        <h4 className='p-0 m-0'><IoIosMail className='me-2' /></h4>
                        <p className='p-0 m-0'>{email}</p>
                    </Container>
                </Col>
                <Col lg={2} xs={12} className='mt-lg-2 mt-3 d-flex flex-column align-items-start jastify-content-start gap-3'>
                    <Button className='cs-btn-3 cs-transition border-0 bg-transparent p-0'>About Us</Button>
                    <Button className='cs-btn-3 cs-transition border-0 bg-transparent p-0'>Jobs</Button>
                    <Button className='cs-btn-3 cs-transition border-0 bg-transparent p-0'>Press</Button>
                    <Button className='cs-btn-3 cs-transition border-0 bg-transparent p-0'>Blog</Button>
                </Col>
                <Col lg={3} xs={12} className='mt-lg-2 mt-3 d-flex flex-column align-items-start jastify-content-start gap-3'>
                    <Button className='cs-btn-3 cs-transition border-0 bg-transparent p-0'>Contact Us</Button>
                    <Button className='cs-btn-3 cs-transition border-0 bg-transparent p-0'>Terms</Button>
                    <Button className='cs-btn-3 cs-transition border-0 bg-transparent p-0'>Privacy</Button>
                </Col>
                <Col lg={3} xs={12} className='d-flex flex-row justify-content-lg-start justify-content-center align-items-start mt-l-0 mt-3'>
                    <ButtonGroup className='gap-3'>
                        <Button className='cs-btn-4 cs-transition border-white p-2 bg-transparent rounded-circle d-flex flex-column align-items-center justify-content-center'><FaFacebookF /></Button>
                        <Button className='cs-btn-4 cs-transition border-white p-2 bg-transparent rounded-circle d-flex flex-column align-items-center justify-content-center'><FaTwitter /></Button>
                        <Button className='cs-btn-4 cs-transition border-white p-2 bg-transparent rounded-circle d-flex flex-column align-items-center justify-content-center'><FaInstagram /></Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default FyloFooter;