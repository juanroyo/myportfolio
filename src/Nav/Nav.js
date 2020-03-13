import React, { Component } from 'react';
// import {Nav, Navbar} from 'react-bootstrap/Nav'
import {Button, Form, FormControl, Nav, Navbar, Image} from 'react-bootstrap';
import { Logo } from '../Imagen/logo.jpeg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './Nav.css';
import Shop from '../Shop/Shop.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Home from '../Home/Home.js';
import Portfolio from '../Portfolio/Portfolio.js';
import {Itemslist} from '../Shop/Itemslist.js'

export default class Navigator extends Component {

render() {
  return(
    <Router>
    <div class="navstyle">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
        <Navbar.Brand><Link to="/">Zylen Studio</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/shop">Shop</Link></Nav.Link>
          <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
          <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
        </Nav>
      {/*  <img src={Logo} alt='website logo'/>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>*/}
        <Button variant="primary">Signup</Button>
         <Button variant="link">Login</Button>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
          <Route path="/shop">
            <Itemslist />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  )
}
}
