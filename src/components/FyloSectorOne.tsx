import React, { FC, useState } from 'react';
//Bootstrap
import { Container, Image, Row, Col, Form, Button } from 'react-bootstrap';

interface FyloSectorOneProps {
    head: string,
    par: string,
    img: string,
}

const FyloSectorOne: FC<FyloSectorOneProps> = ({ head, par, img }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
    };
    
    return(
        <Container fluid className='cs-bg-image mt-5 py-5 px-5'>
            <Row className='mb-5 pb-5'>
                <Col lg={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }} className='d-flex flex-column justify-content-center pe-5 gap-2 text-lg-start text-center'>
                    <h1 className='cs-fw-700 cs-fc-blue-2'>{head}</h1>
                    <p className='cs-fc-blue-2'>{par}</p>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='cs-form d-flex flex-lg-row flex-column gap-4'>
                        <Form.Control 
                            placeholder='Enter your email...'
                            type='email'
                            className='border-2 rounded-1 shadow-sm cs-transition'
                            required 
                        />
                        <Form.Control.Feedback type="invalid" className='cs-warning'>Please check youe email</Form.Control.Feedback>
                        <Button type='submit' className='cs-transition cs-btn border-0 shadow-sm cs-w rounded-1 cs-fw-700'>Get Started</Button>
                    </Form>
                </Col>
                <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
                    <Image fluid src={img} alt='illustration' />
                </Col>
            </Row>
        </Container>
    );
}

export default FyloSectorOne;