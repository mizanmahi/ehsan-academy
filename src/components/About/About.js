import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import aboutImage from '../../media/aboutImage.png';

const About = () => {

   useDocumentTitle('About us')

   return (
      <section className='my-5 py-5'>
         <Container>
            <Row className='align-items-center'>
               <Col className='text-start'>
                  <h1 className='text-primary fw-bolder border-bottom d-inline-block pb-2 border-primary'>
                     About Us
                  </h1>
                  <p className='py-4 lead'>
                     Ehsan Academy of Dhaka in Bangladesh is an international
                     Islamic academy in its Goal and Bangladeshi in affiliation.
                     It identified the objectives as follows: To convey the
                     eternal message of Islam to the world through da wah,
                     university education and graduate studies. <br /> To  inculcate the
                     Islamic spirit, develop and deepen practical religiosity in
                     the life of the individual and society, based on dedication
                     worship to Allah Alone and specifying follower-ship to the
                     Messenger of Allah, peace be upon him. To prepare
                     scientific research, translate and publish them, and
                     encourage such in the areas of Islamic and Arabic Sciences
                     in particular, and other branches of science and human
                     knowledge needed by the Muslim community in general.
                  </p>
                  <Button variat='primary'>Learn More</Button>
               </Col>
               <Col>
                  <img src={aboutImage} alt='' />
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default About;
