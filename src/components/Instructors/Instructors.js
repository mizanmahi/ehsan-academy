import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
   const [instructors, setInstructors] = useState([]);
   useEffect(() => {
      fetch('./instructor.json')
         .then((res) => res.json())
         .then((data) => setInstructors(data));
   }, []);
   return (
      <section>
         <div className='text-center my-5'>
            <h2 className='fs-1 fw-bolder text-primary'>Our Instructors</h2>
            <p className='lead'>They are the world's best islamic scholars</p>
         </div>
         <Container>
            <Row className='justify-content-center'> 
               {instructors.map((instructor) => (
                  <Instructor key={instructor.id} instructor={instructor} />
               ))}
            </Row>
         </Container>
      </section>
   );
};

export default Instructors;
