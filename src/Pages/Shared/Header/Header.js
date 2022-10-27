import React, { useContext } from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';
import Button from 'react-bootstrap/Button';
import { BsGoogle, BsGithub } from "react-icons/bs";
import { GoogleAuthProvider } from 'firebase/auth';
import './Header.css';

const Header = () => {
    const { user, logOut, providerLogin } = useContext(AuthContext);

    //creating googleProvider & handle login with google
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    //Logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
                            <Nav.Link as={Link} to='/courses' >Courses</Nav.Link>
                            <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>


                        </Nav>
                        <Nav className="d-flex align-items-center">
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant="light" className="text-dark" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                            <button onClick={handleGoogleSignIn} type="button" className="rounded-5 border border-0 bg-transparent mx-1"><BsGoogle></BsGoogle></button>
                                            <button type="button" className="rounded-5 border border-0 bg-transparent me-1"><BsGithub></BsGithub></button>
                                        </>
                                }


                            </>
                            <Link to="/profile">
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '40px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser></FaUser>
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