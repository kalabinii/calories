import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Aside from '../pages/Aside';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        <Aside />
                    </Col>
                    <Col sm={8}>
                        <Breadcrumb className='mt-3'>
                            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                            <Breadcrumb.Item active></Breadcrumb.Item>
                        </Breadcrumb>
                        <h2>Таблица калорийности продуктов</h2>
                        <Row>
                            <Col sm={6}><a href='/baranina'>Баранина и дичь</a></Col>
                            <Col sm={6}><a href='/bobovie'>Бобовые</a></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        );
    }
}

export default Home;