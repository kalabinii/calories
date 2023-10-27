import React, { Component } from 'react';
import Data from "../Data/Bobovie.json";
import { Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Aside from '../pages/Aside';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        <Aside />
                    </Col>
                    <Col sm={8}>
                        <h2>Таблица калорийности продуктов</h2>
                        <table>
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
                        </table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;