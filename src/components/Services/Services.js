import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json').then(res => res.json()).then(service => setServices(service))
    }, [])


   return (
      <div>
         <Container>
             <div className='text-center my-5'>
                 <h2 className='fs-1 fw-bolder text-primary'>Our Services</h2>
                 <p className='lead'>Choose the one you like to get started</p>
             </div>
            <Row className='gap-5 justify-content-center px-2' >
              {
                //   showing only the first 4 services
                  services.slice(0,4).map(service => <Service key={service.id} service={service} />)
              }
            </Row>
         </Container>
      </div>
   );
};

export default Services;
