import React, { Component } from 'react';
import Data from "../Data/water_and_drinks.json";
import { Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Aside from '../pages/Aside';
import Pageproducts from '../pages/Pageproducts';
import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Water_and_drinks extends Component {
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
                            <Breadcrumb.Item active>Вода и напитки</Breadcrumb.Item>
                        </Breadcrumb>
                        <h2 className='mt-3'>Таблица калорийности продуктов</h2>
                        <Table striped bordered hover size='sm'>
                                <thead>
                                    <tr>
                                        <th>Продукт</th>
                                        <th>Калории, ккал</th>
                                        <th>Углеводы, г</th>
                                        <th>Жиры, г</th>
                                        <th>Белки, г</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    Data.map (record => {
                                        return(
                                            <tr>
                                                <td width={500}>{record.Title}</td>
                                                <td width={120}>{record.Calories}</td>
                                                <td width={120}>{record.Carbohydrates}</td>
                                                <td width={120}>{record.Fats}</td>
                                                <td width={120}>{record.Proteins}</td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Water_and_drinks;