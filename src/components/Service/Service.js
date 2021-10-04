import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = (props) => {
   const { title, price, description, imageUrl, instructor } = props.service;
   return (
      <Col className='px-0' xl={3} lg={4}>
         <Card style={{ minWidth: '22rem' }}>
            <Card.Img variant='top' src={imageUrl} />
            <Card.Body>
               <Card.Title className='fs-4'>{title}</Card.Title>
               <Card.Text className='lead'>
                  {description.slice(0, 100)}..
               </Card.Text>
               <p>Instructor: {instructor}</p>
               <h1 className='text-primary'>${price}</h1>
            </Card.Body>
            <Button className='rounded-0 py-3'>Enroll</Button>
         </Card>
      </Col>
   );
};

export default Service;
