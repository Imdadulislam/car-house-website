import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo/logo.png';
import './media.css';


const NavBar = () => {
    const { user, logout } = useAuth();
    return (
        <>

            <Navbar className=" shadow  bg-body" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className="text text-dark fw-bold" as={HashLink} to="/"><img className="image-logo" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className="bg-danger" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="text text-dark fw-bold" as={HashLink} to="/home#services">Buy Car</Nav.Link>
                            <Nav.Link className="text text-dark fw-bold" as={HashLink} to="/home#features">Features</Nav.Link>
                            <Nav.Link className="text text-dark fw-bold" as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                            {
                                user?.email && <Nav.Link className="text text-dark fw-bold bg-light" as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                            }
                        </Nav>
                        <Nav>
                            {user?.email && <Nav.Link className="text-dark fw-bold" as={HashLink} to="#deets">Login By: {user?.displayName}</Nav.Link>}

                            {user?.email ?
                                <Button onClick={logout} className="text-dark fw-bold px-3" style={{ border: '1px solid #F54114', borderRadius: '5px' }} eventKey={2}>
                                    Logout
                                </Button> :
                                <Nav.Link className="text-dark fw-bold " eventKey={2} style={{ border: '1px solid #F54114', borderRadius: '5px' }} as={HashLink} to="/login">
                                    Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default NavBar;