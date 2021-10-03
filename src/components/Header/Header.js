import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsBook } from "react-icons/bs";

const Header = () => {
   return (
      <header>
         <Navbar bg='light' expand='lg'>
            <Container>
               <Navbar.Brand href='#home' className='d-flex align-items-center fw-bold fs-2'> <BsBook className='me-3 fs-1 text-primary'/> Ehsan Academy</Navbar.Brand>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto fs-5'>
                     <Nav.Link href='#'>Home</Nav.Link>
                     <Nav.Link href='#'>About Us</Nav.Link>
                     <Nav.Link href='#'>Services</Nav.Link>
                     <Nav.Link href='#'>Instructors</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;
