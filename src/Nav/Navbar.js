import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import fire from '../config/fire';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import $ from 'jquery'
import './Nav.css'
 class Navigatorbar extends Component {
   constructor(props) {
        super(props);
        this.state = {
          logged: null,
        }
        this.logout = this.logout.bind(this);
        this.polla = this.polla.bind(this);

    }
    logout() {
        fire.auth().signOut();
    }
polla() {
  if (this.props.user != null) {
    return(<a class="nav-link" href="#"><button onClick={this.logout}>Logout</button></a>)
  }
}

   render(props){
const user = this.props.user

    return(
      <div class="shadoww">




              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" class="shadow p-3 mb-5 bg-white rounded">
                  <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link><Link to="/"><span >Home</span></Link></Nav.Link>
                          <Nav.Link><Link to="/shop"><span >Shop</span></Link></Nav.Link>
                      {this.polla()}
                          <Nav.Link> <Link to="/login"><span class="black-text text-darken-2">Log in</span></Link></Nav.Link>
                          <Nav.Link> <Link to="/contact"><span class="black-text text-darken-2">Contact</span></Link></Nav.Link>
                    </Nav>
                    <Nav>
                <Nav.Link>  <a class="nav-link"><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></a></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
  </div>

    )
  }
}

export default Navigatorbar;
