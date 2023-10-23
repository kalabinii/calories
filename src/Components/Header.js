import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contacts';

/*const App = () => {
  return (
    <div>
    <a href='/'>Home</a>
    <a href='/about'>About</a>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;*/

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
                    </Routes>
                </Router>
                </div>
        );
    }
}

export default Header;