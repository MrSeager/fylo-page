import React, { FC } from 'react';
//Components
import './FyloPageStyle.css';
import FyloNavbar from './FyloNavbar.tsx';
import FyloSectorOne from './FyloSectorOne.tsx';
import FyloSectorTwo from './FyloSectorTwo.tsx';
import FyloSectorThree from './FyloSectorThree.tsx';
import FyloFooter from './FyloFooter.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import LogoImg from '../images/logo.svg';
import ImgSecOne from '../images/illustration-1.svg';
import ImgSecTwo from '../images/illustration-2.svg';
import ImgAvatar from '../images/avatar-testimonial.jpg';

const FyloPage: FC = () => {
    const lineProps = {
        head_1: 'All your files in one secure location, accessible anywhere.',
        par_1: "Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.",
    
        head_2: 'Stay productive, wherever you are',
        par_2_1: "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
        par_2_2: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!",
        par_2_3: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        pers_name: 'Kyle Burton',
        pers_job: 'Founder & CEO, Huddle',

        head_3: 'Get early access today',
        par_3: "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.",
    
        phone: 'Phone: +1-543-123-4567',
        email: 'example@fylo.com',
    }

    AOS.init();

    return (
        <Container fluid className='min-vh-100 pt-5 px-0'>
            <FyloNavbar
                logoImg={LogoImg} />
            <FyloSectorOne
                head={lineProps.head_1}
                par={lineProps.par_1}
                img={ImgSecOne} />
            <FyloSectorTwo
                head={lineProps.head_2}
                par_1={lineProps.par_2_1}
                par_2={lineProps.par_2_2}
                par_3={lineProps.par_2_3}
                pers_name={lineProps.pers_name}
                pers_job={lineProps.pers_job}
                img={ImgSecTwo}
                avatarImg={ImgAvatar} />
            <FyloSectorThree
                head={lineProps.head_3}
                par={lineProps.par_3} />
            <FyloFooter
                logoImg={LogoImg}
                phone={lineProps.phone}
                email={lineProps.email} />
        </Container>
    );
}

export default FyloPage;