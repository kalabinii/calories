import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Таблица калорийности продуктов</h2>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td><a href='/baranina'>Баранина и дичь</a></td><td><a href='/bobovie'>Бобовые</a></td>
                        </tr>
                    </tbody>
                </Table>
                
            </div>
        );
    }
}

export default Home;