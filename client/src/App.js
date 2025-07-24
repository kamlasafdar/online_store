import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/pages/login.js';
import Home from './components/pages/Home.js';
import Contact from './components/pages/Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* You can add more routes here like login */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
