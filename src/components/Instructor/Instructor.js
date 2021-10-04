
import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';


const Instructor = (props) => {
    const { imageUrl, name, designation } = props.instructor
    const imgStyles = {height: '200px'}
    const shadow = {
        boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
        marginBottom: '1rem'
    }
   return (
      <Col lg={4} md={6}>
         <div className='py-4 px-1' style={shadow}>
            <img src={imageUrl} alt='instructor' className='img-fluid rounded-circle' style={imgStyles} />
            <div className='mt-4'>
                <p className='fw-bold fs-5 m-0'>Name: {name}</p>
                <p className='lead'>Designation {designation}</p>
            </div>
            <Button variant="outline-primary" className='rounded-0 mt-1'>{name.includes('Kanij') ? 'See What She Teaches': 'See What He Teaches'}</Button>
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
         </div>
      </Col>
   );
};

export default Instructor;
