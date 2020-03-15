import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import { logoo } from './Imagen/logo.jpeg';
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';
import Navigator from './Nav/Nav.js';
import {Itemslist} from './Shop/Itemslist.js';
import {CartProvider} from './Shop/CartContext.js';
import {Cart} from './Shop/Cart.js'



function App() {
  return (
    <div className="App">
      <CartProvider>
      <Navigator/>
        <Cart />
      <Footer/>
      </CartProvider>
  </div>
  );
}

export default App;
