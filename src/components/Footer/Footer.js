import React from 'react';
import { Container } from 'react-bootstrap';
import { BsBook } from 'react-icons/bs';
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
   return (
      <footer className='text-center bg-secondary py-4 mt-4'>
         <Container>
            <p>
               <BsBook className='me-3 fs-1 text-light' />{' '}
               <span className='fw-bold fs-4 text-light'>Ehsan Academy</span>
            </p>
            <div className='mx-auto d-flex w-25 my-4 justify-content-around text-light'>
               <button className='border-0 d-flex justify-content-center align-item-center p-3 rounded me-1'>
                  <BsInstagram className='text-primary' />
               </button>
               <button className='border-0 d-flex justify-content-center align-item-center p-3 rounded me-1'>
                  <BsLinkedin className='text-primary' />
               </button>
               <button className='border-0 d-flex justify-content-center align-item-center p-3 rounded me-1'>
                  <BsFacebook className='text-primary' />
               </button>
               <button className='border-0 d-flex justify-content-center align-item-center p-3 rounded me-1'>
                  <BsTwitter className='text-primary' />
               </button>
            </div>
            <p className='lead text-light'>
               &copy; 2021, Ehsan Academy. All right reserved.
            </p>
         </Container>
      </footer>
   );
};

export default Footer;
