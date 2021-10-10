import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Service from '../Service/Service';

const InstructorsCourse = () => {
   const { instructorId } = useParams();
   const [services, setServices] = useState([]);
   const [instructor, setInstructor] = useState([]);

   useEffect(() => {
      fetch('/service.json')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setServices(
               data.filter(
                  (data) => data.instructorId === parseInt(instructorId)
               )
            );
         });
   }, [instructorId]);

   useEffect(() => {
      fetch('/instructor.json')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setInstructor(
               data.filter((data) => data.id === parseInt(instructorId))
            );
         });
   }, [instructorId]);

   return (
      <Container>
         <div className='text-center my-5'>
            <h2 className='fs-1 fw-bolder text-primary'>
               All Services By {instructor[0]?.name}
            </h2>
            <p className='lead'>Choose the one you like to get started</p>
         </div>

         <Row className='gap-5 justify-content-center px-2'>
            {services.map((service) => (
               <Service key={service.id} service={service} />
            ))}
         </Row>
      </Container>
   );
};

export default InstructorsCourse;
