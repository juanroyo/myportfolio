import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import { logoo } from './Imagenes/logo.jpeg';
import Footer from './Footer.js';
import Home from './Home.js';
import Navigator from './Nav.js';


function App() {
  return (
    <div className="App">
      <Navigator/>

      <Footer/>
  </div>
  );
}

export default App;
