import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Aside from '../pages/Aside';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contacts';
import Baranina from '../pages/Baranina_dich';
import Bobovie from '../pages/Bobovie';
import { Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Water_and_drinks from '../pages/Water_and_drinks';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                
               
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path='/baranina' element={<Baranina />} />
                        <Route path='/bobovie' element={<Bobovie />} />
                        <Route path='/water-and-drinks' element={<Water_and_drinks />} />
                    </Routes>
                </Router>
                </div>
        );
    }
}

export default Header;