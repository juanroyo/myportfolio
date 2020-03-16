import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';
import Navbar from './Nav/Navbar';
import Shop from './Shop/Shop.js'
import Cart from './Shop/Cart.js'
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/*  <CartProvider>*/}
      <Navbar/>
        <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        {/*<Cart />*/}
    {/* <Footer/>*/}
      {/*</CartProvider>*/}
        </div>
      </BrowserRouter>

  );
}

export default App;
