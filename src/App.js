import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import fire from './config/fire.js';

import Home from './Home/Home.js';
import Navigatorbar from './Nav/Navbar';
import Shop from './Shop/Shop.js';
import Showproduct from './Showproduct/Showproduct.js';
import Cart from './Shop/Cart.js';
import Login from './Login/login.js';

import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';


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
      <Navigatorbar user={this.state.user} />
        <Switch>
            <Route path="/shop" component= {Shop}></Route>
            <Route path="/Showproduct/:id" render={(props) => <Showproduct {...props} />}/>

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
      <Footer/>
</div>
  );
}
}

export default App;
