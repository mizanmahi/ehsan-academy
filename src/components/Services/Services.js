import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json').then(res => res.json()).then(service => setServices(service))
    }, [])


   return (
      <div>
         <div className='container-lg'>
             <div className='text-center my-5'>
                 <h2 className='fs-1 fw-bolder text-primary'>Our Services</h2>
                 <p className='lead'>Choose the one you like to get started</p>
             </div>
            <div className='row gap-2 justify-content-center'>
              {
                  services.map(service => <Service service={service} />)
              }
            </div>
         </div>
      </div>
   );
};

export default Services;
