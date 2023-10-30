import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Aside from '../pages/Aside';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Home extends Component {
    render() {
        return (
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Таблица калорийности продуктов</title>
                </Helmet>
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
                            <Col sm={6}><a href='/water-and-drinks'>Вода и напитки</a></Col>
                            <Col sm={6}><a href='/goviadina_and_teliatina'>Говядина и телятина</a></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        );
    }
}

export default Home;