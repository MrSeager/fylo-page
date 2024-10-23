import React, { FC } from 'react';
//Bootstrap
import { Container, Image, Row, Col, Button, Card } from 'react-bootstrap';
//Icons
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

interface FyloSectorTwoProps {
    head: string,
    par_1: string,
    par_2: string,
    par_3: string,
    pers_name: string,
    pers_job: string,
    img: string,
    avatarImg: string,
}

const FyloSectorTwo: FC<FyloSectorTwoProps> = ({ head, par_1, par_2, par_3, pers_name, pers_job, img, avatarImg }) => {
    return (
        <Container fluid className='cs-bg-blue p-5'>
            <Row className='mb-5'>
                <Col data-aos="fade-right" lg={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }} className='d-flex flex-column align-items-lg-start align-items-center justify-content-center pe-lg-5 pe-0 gap-2 text-start'>
                    <h2 className='cs-fw-700 cs-fc-blue-2'>{head}</h2>
                    <p className='cs-fc-blue-2'>{par_1}</p>
                    <p className='cs-fc-blue-2'>{par_2}</p>
                    <Button className='cs-btn-2 cs-transition cs-fc-cyan bg-transparent border-2 rounded-0 px-0'>See how Fylo works <FaCircleArrowRight /></Button>
                    <Card className='border-0 shadow-sm cs-fc-blue-2 p-3 cs-w-2 mt-3'>
                        <Card.Body>
                            <Card.Title><FaQuoteLeft /></Card.Title>
                            <Card.Text>{par_3}</Card.Text>
                        </Card.Body>
                        <Card.Footer className='border-0 bg-transparent'>
                            <Row className=''>
                                <Col sm={2} xs={3} className='d-flex flex-column align-items-start justify-content-center'>
                                    <Image fluid roundedCircle src={avatarImg} alt='avatar' className='' />
                                </Col>
                                <Col sm={10} xs={9} className='d-flex flex-column align-items-start justify-content-center'>
                                    <h3 className='cs-fw-700 h6 m-0'>{pers_name}</h3>
                                    <p className='cs-fs-7 m-0'>{pers_job}</p>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col data-aos="fade-left" lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }} className='mb-lg-0 mb-5'>
                    <Image fluid src={img} alt='illustration' />
                </Col>
            </Row>
        </Container>
    );
}

export default FyloSectorTwo;