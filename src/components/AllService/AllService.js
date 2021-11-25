import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Service from '../Service/Service';

const AllService = () => {
   const [services, setServices] = useState([]);

   useDocumentTitle('Services')

   useEffect(() => {
      fetch('/service.json')
         .then((res) => res.json())
         .then((service) => {
            console.log(service);
            setServices(service);
         });
   }, []);
   return (
      <section>
         <Container>
            <div className='text-center my-5'>
               <h2 className='fs-1 fw-bolder text-primary'>All Services</h2>
               <p className='lead'>Choose the one you like to get started</p>
            </div>

            <Row className='gap-5 justify-content-center px-2'>
               {services.map((service) => (
                  <Service key={service.id} service={service} />
               ))}
            </Row>
         </Container>
      </section>
   );
};

export default AllService;
