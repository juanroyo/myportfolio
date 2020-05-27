import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import fire from '../config/fire';
import {Navbar, Nav} from 'react-bootstrap';

import './Nav.css'
 class Navigatorbar extends Component {
   constructor(props) {
        super(props);
        this.state = {
          logged: null,
        }
        this.logout = this.logout.bind(this);
        this.log = this.log.bind(this);

    }
    logout() {
        fire.auth().signOut();
    }
log() {
  if (this.props.user != null) {
    return(<a class="nav-link"><button onClick={this.logout}>Logout</button></a>)
  }
}

   render(props){


    return(
      <div className="shadoww">




              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="shadow p-3 mb-5 bg-white rounded">
                  <Navbar.Brand href="">Zylen Studio</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Link to="/"><span class="link" >Home</span></Link>
                        <Link to="/shop"><span class="link">Shop</span></Link>
                          <Link to="/login"><span class="link">Log in</span></Link>
                          <Link to="/contact"><span class="link">Contact</span></Link>
                          {this.log()}
                    </Nav>
                    <Nav>
              <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
  </div>

    )
  }
}

export default Navigatorbar;
