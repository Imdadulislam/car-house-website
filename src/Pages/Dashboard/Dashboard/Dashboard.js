import React from 'react';
import {
    Switch,
    Route, useRouteMatch
} from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import './Dashboard.css'
import Mypurchase from '../MyPurchase/MyPurchase';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Review from '../Review/Review';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllPurchase from '../ManageAllPurchase/ManageAllPurchase';
import Pay from '../Pay/Pay';
import AddCar from '../AddCar/AddCar';
import ManageCars from '../ManageCars/ManageCars';
import DashboardContent from '../DashboardContent/DashboardContent';
import carpic from '../../../images/banner/banner-03.png';
import tyrepic from '../../../images/banner/carssssssss.png';
import Footer from '../../Footer/Footer';


const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();


    const banner = {
        width: '120px',
    }
    return (
        <div>
            <NavBar></NavBar>

            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Nav className="mx-auto fw-bold">
                        <Navbar.Brand >Dashboard</Navbar.Brand>
                    </Nav>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start" className="dashboard slidebar-nav"
                    >
                        <Offcanvas.Header closeButton className="dashboard-header">
                            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">Dashboard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="gap-5">
                            {!admin &&
                                <li className="lists">
                                    <Link to={`${url}/mypurchase`} className="link"><i className="fas fa-shopping-cart"></i> My Booking</Link>
                                </li>
                            }
                            {!admin &&
                                <li className="lists">
                                    <Link to={`${url}/review`} className="link"><i className="fas fa-star-half-alt"></i> Give Review & Ratting</Link>
                                </li>
                            }
                            {admin && <li className="lists">
                                <Link to={`${url}/makeAdmin`} className="link"><i className="fas fa-users-cog"></i> Make Admin</Link>
                            </li>
                            }
                            {admin && <li className="lists">
                                <Link to={`${url}/manageAllPurchase`} className="link"><i className="fas fa-tasks"></i> Manage All Purchase</Link>
                            </li>
                            }
                            {admin && <li className="lists">
                                <Link to={`${url}/addCar`} className="link"> Add A Car</Link>
                            </li>
                            }
                            {admin && <li className="lists">
                                <Link to={`${url}/manageCars`} className="link">Manage Cars</Link>
                            </li>
                            }
                            {!admin &&
                                <li className="lists">
                                    <Link to={`${url}/pay`} className="link"><i className="fas fa-credit-card"></i> Pay</Link>
                                </li>
                            }
                            <button className="button" onClick={logout} >Logout</button>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div className=" header-content">
                <h1>CAR HOUSE !! YOUR DREAM CAR IS HERE</h1>
                <img className="img-fluid" src={carpic} alt="" />
                <img className="img-fluid" style={banner} src={tyrepic} alt="" />
            </div>

            <div className="conatiner mx-auto">
                <Switch>
                    <Route exact path={path}>
                        <DashboardContent></DashboardContent>
                    </Route>
                    <Route path={`${url}/mypurchase`}>
                        <Mypurchase></Mypurchase>
                    </Route>
                    <AdminRoute path={`${url}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${url}/manageAllPurchase`}>
                        <ManageAllPurchase></ManageAllPurchase>
                    </AdminRoute>
                    <AdminRoute path={`${url}/addCar`}>
                        <AddCar></AddCar>
                    </AdminRoute>
                    <AdminRoute path={`${url}/manageCars`} >
                        <ManageCars></ManageCars>
                    </AdminRoute>
                    <Route path={`${url}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${url}/pay/:perchaseId`}>
                        <Pay></Pay>
                    </Route>
                </Switch>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;