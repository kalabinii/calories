import React, { Component } from 'react';
import { Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

class Aside extends Component {
    render() {
        return (
            <>
                        <h5 className='mt-3'>Таблица калорийности</h5>
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