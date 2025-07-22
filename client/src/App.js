import React from 'react';
import './App.css';
import Login from './components/pages/login.js'; // Make sure the file name has correct casing
import Home from './components/pages/Home.js';
function App() {
  return (
    <div className="App">
      <Login />
      <Home></Home>
    </div>
  );
}

export default App;
