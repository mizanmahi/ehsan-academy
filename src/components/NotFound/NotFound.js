import React from 'react';
import { Button } from 'react-bootstrap';
import './notfound.css';
import notFoundLogo from '../../media/404.svg';
import { Link, useHistory } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const NotFound = () => {

   //@ handle title change
   useDocumentTitle('Page Not Found')

   const history = useHistory();
   const handleClick = () => {
      history.goBack();
   };
   return (
      <div className='d-flex justify-content-center align-items-center not-found'>
         <div>
            <img src={notFoundLogo} alt='notfound logo' className='w-50 mb-5' />
            <p className='text-danger fw-bold fs-3'>404 | Page not found</p>
            <Link to='/'>
               <Button className='me-3'>Back To Home</Button>
            </Link>
            <Button onClick={handleClick}>Go Back</Button>
         </div>
      </div>
   );
};

export default NotFound;
