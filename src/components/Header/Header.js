import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsBook } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';

import './header.css';

const Header = () => {
   return (
      <header>
         <Navbar bg='light' expand='lg'>
            <Container>
               <Navbar.Brand
                  as={Link}
                  to='/'
                  className='d-flex align-items-center fw-bold fs-2'
               >
                  {' '}
                  <BsBook className='me-3 fs-1 text-primary logo' /> Ehsan
                  Academy
               </Navbar.Brand>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto fs-5'>
                     <Nav.Link
                        as={NavLink}
                        to='/home'
                        activeStyle={{
                           color: '#0051c9',
                        }}
                     >
                        Home
                     </Nav.Link>
                     <Nav.Link
                        as={NavLink}
                        to='/about'
                        activeStyle={{
                           color: '#0051c9',
                        }}
                     >
                        About
                     </Nav.Link>
                     <Nav.Link
                        as={NavLink}
                        to='/services'
                        activeStyle={{
                           color: '#0051c9',
                        }}
                     >
                        Services
                     </Nav.Link>
                     <Nav.Link
                        as={NavLink}
                        to='/instructors'
                        activeStyle={{
                           color: '#0051c9',
                        }}
                     >
                        Instructors
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;
