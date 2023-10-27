import React, { Component } from 'react';
import { Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


class Aside extends Component {
    render() {
        return (
            <>
                        <h4 className='mt-3'>Таблица калорийности</h4>
                        <ListGroup>
                            <ListGroup.Item><a href='/baranina'>Баранина и дичь</a></ListGroup.Item>
                            <ListGroup.Item><a href='/bobovie'>Бобовые</a></ListGroup.Item>
                            <ListGroup.Item><a href='/water-and-drinks'>Вода и напитки</a></ListGroup.Item>
                        </ListGroup>
            </>
        );
    }
}

export default Aside;