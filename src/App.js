import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import fire from './config/fire.js';
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';
import Navbar from './Nav/Navbar';
import Shop from './Shop/Shop.js';
import Showproduct from './Shop/Showproduct.js';
import Cart from './Shop/Cart.js';
import Login from './Login/login.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
   this.authListener();

 }

 authListener() {
   fire.auth().onAuthStateChanged((user) => {
     console.log(user);
     if (user) {
       this.setState({ user });
       localStorage.setItem('user', user.uid);
     } else {
       this.setState({ user: null });
       localStorage.removeItem('user');
     }
   });
 }
 render(){

  return (
    <div>
    <BrowserRouter>
    <div className="App">
      <Navbar user={this.state.user} />
        <Switch>
            <Route path="/shop" component= {Shop}></Route>
            <Route path="/Showproduct/:id" render={(props) => <Showproduct {...props} />}/>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login user={this.state.user} />
            </Route>
            <Route path="/cart">
              <Cart user={this.state.user} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
</div>
  );
}
}

export default App;
