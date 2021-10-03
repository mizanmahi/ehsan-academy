import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const { id, title, price, description } = props.service;
   return (
      <div className='col-xl-3 col-lg-4 col-md-6'>
         <Card style={{ minWidth: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
               <Card.Title>{title}</Card.Title>
               <Card.Text>{description}</Card.Text>
               <p variant='primary'>${price}</p>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Service;
