import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <div>

            {/* navbar start */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <div className='d-flex align-items-center'>
                        <FaLaptopCode className='brand-logo me-1'></FaLaptopCode>
                        <Navbar.Brand className='brand-name'>
                            <Link to='/'><span className='span-s'>S</span>killo</Link></Navbar.Brand>
                    </div>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='courses' >Courses</Nav.Link>
                            <Nav.Link as={Link} to='faq'>FAQ</Nav.Link>
                            <Nav.Link as={Link} to='blog'>Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link >Name</Nav.Link>
                            <Nav.Link >
                                profile
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* navbar end */}


        </div>
    );
};

export default Header;