import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import carpic from '../../../images/banner/banner-03.png';
import carimg from '../../../images/banner/car-0102.png';
import tyrepic from '../../../images/banner/carssssssss.png';
import NavBar from '../../Shared/NavBar/NavBar';
import './Login.css';

const style = {
    boxShadow: '5px 15px 25px 15px #F7F8FA',
    borderTop: '5px solid #F54114',
    padding: '50px',
}

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {isLoading,loginUser,
        signInWithGoogle, } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
    }
    const handleGoogleLogin = () => {
        signInWithGoogle(location, history);
    }

    const banner = {
        width: '120px',
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="login-content" >
                <h1>Please Login To Explore More</h1>
                <img className="img-fluid" src={carpic} alt="" />
                <img style={banner} src={tyrepic} alt="" />
            </div>
            <Container className="py-5">

                <Row lg={2} sm={12} style={style}>

                    <Col className="mx-auto" >

                        {!isLoading &&
                            <Form onSubmit={handleLoginSubmit} className="login-form">
                            <h2>Login</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="w-100" type="email" placeholder="Enter email" name="email" onBlur={handleOnchange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onBlur={handleOnchange} />
                            </Form.Group>

                            <Link to="/register" style={{ textDecoration: 'none' }}> <Form.Text className="text-info">New User? Please Ragister</Form.Text></Link><br />
                            <Button style={{ backgroundColor: '#F54114' }} variant="danger" type="submit">
                                Login
                            </Button>
                            <Button className="ms-5" onClick={handleGoogleLogin}><i className="fab fa-google"></i> Google Signin</Button>
                        </Form>
                        }
                        {isLoading && <Spinner animation="border" variant="danger" />}
                    </Col>
                    <Col>
                        <img className="img-fluid" src={carimg} alt="" />
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default Login;