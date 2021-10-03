import React from 'react';
import { Button } from 'react-bootstrap';
import './intro.css';

const Intro = () => {
   return (
      <div className='intro d-flex justify-content-center align-items-center'>
         <div className='intro__content'>
            <h1 className='text-light fw-bolder intro__heading'>
               We Foster Wisdom
            </h1>
            <p className='text-light fw-lighter fs-4 mb-5 mt-4'>
               We strive to convey the eternal message of Islam to the world
               through knowledge, Quranic educations and General studies. To inculcate Islamic spirit, develop and deepen practical religiosity in the life of the individual and society, based on dedication worship to Allah Alone and specifying followership to the Messenger of Allah, peace be upon him.
            </p>
            <div>
               <Button variant='outline-primary rounded-0 border-light text-light fs-5 me-5'>
                  Learn More
               </Button>
               <Button variant='outline-primary rounded-0 border-light text-light fs-5'>
                  See Services
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Intro;
