import React, { FC, useState } from 'react';
//Bootstrap
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

interface FyloSectorThreeProps {
    head: string,
    par: string,
}

const FyloSectorThree: FC<FyloSectorThreeProps> = ({ head, par }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
    };
    
    return (
        <Container fluid className='cs-bg-blue-2 text-white p-5'>
            <Row className='mt-3'>
                <Col lg={6} xs={12} className='text-lg-start text-center pe-lg-5 pe-0'>
                    <h3 className='h4 cs-fw-700'>{head}</h3>
                    <p className='cs-fs-7 mt-3 pe-lg-5'>{par}</p>
                </Col>
                <Col lg={6} xs={12} className='px-5'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column'>
                        <Form.Control 
                            placeholder='Enter your email...'
                            type='email'
                            className='border-2 py-2 rounded-1 shadow-sm cs-transition'
                            required 
                        />
                        <Form.Control.Feedback type="invalid" className='text-white'>Please check youe email</Form.Control.Feedback>
                        <Button type='submit' className='cs-transition cs-btn border-0 shadow-sm cs-w rounded-1 cs-fw-700 mt-3 py-2'>Get Started</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default FyloSectorThree;