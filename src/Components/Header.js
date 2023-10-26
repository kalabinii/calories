import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contacts';
import Baranina from '../pages/Baranina_dich';
import Bobovie from '../pages/Bobovie'

class Header extends Component {
    render() {
        return (
            <div>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path='/baranina' element={<Baranina />} />
                        <Route path='/bobovie' element={<Bobovie />} />
                    </Routes>
                </Router>
                </div>
        );
    }
}

export default Header;