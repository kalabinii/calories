import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        <h4>Таблица калорийности</h4>
                        <ListGroup>
                            <ListGroup.Item>dsfdf</ListGroup.Item>
                            <ListGroup.Item>dsfdf</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
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