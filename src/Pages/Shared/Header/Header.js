import React, { useContext } from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';
import Button from 'react-bootstrap/Button';
import { BsFillSunFill, BsSun } from "react-icons/bs";

import './Header.css';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Header = () => {
    const [day, setDay] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    //Logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>

            {/* navbar start */}
            <Navbar collapseOnSelect expand="lg" className='navbar' variant="light">
                <Container>
                    <div className='d-flex align-items-center'>
                        <FaLaptopCode className='brand-logo me-1'></FaLaptopCode>
                        <Navbar.Brand className='brand-name'>
                            <Link to='/'><span className='span-s'>S</span>killo</Link></Navbar.Brand>
                    </div>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/courses' >Courses</Nav.Link>
                            <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>

                        </Nav>
                        <Nav className="d-flex align-items-center">
                            <div onClick={() => setDay(!day)} className="theme-icon me-2">
                                {
                                    day ? <BsFillSunFill /> : <BsSun />
                                }

                            </div>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span className='mx-1'>{user?.displayName}</span>
                                            <Button variant="light" className="text-dark mx-2" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>

                                        </>
                                }

                            </>
                            <Link to="/profile">
                                {user?.photoURL ?
                                    <Tippy content={user?.displayName}>
                                        <Image
                                            style={{ height: '40px' }}
                                            roundedCircle
                                            src={user?.photoURL}>
                                        </Image>
                                    </Tippy>
                                    : <FaUser className='span-s'></FaUser>

                                }

                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* navbar end */}


        </div>
    );
};

export default Header;