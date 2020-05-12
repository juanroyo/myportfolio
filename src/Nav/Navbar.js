import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import fire from '../config/fire';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import $ from 'jquery'
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
    return(<li><button onClick={this.logout}>Logout</button></li>)
  }
}

   render(props){
const user = this.props.user

    return(
      <div>
        {/*<Link to="/" className="brand-logo">Shopping</Link>*/}
            <nav className="nav-wrapper blue-grey lighten-5">
                <div className="container">
                <a href="#" class="brand-logo">Logo</a>

                    <ul className="right black-text text-darken-2" >
                      <li><Link to="/"><span class="black-text text-darken-2">Home</span></Link></li>
                      <li><Link to="/shop"><span class="black-text text-darken-2">Shop</span></Link></li>
                      <li><Link to="/portfolio"><span class="black-text text-darken-2">Portfolio</span></Link></li>
                      <li><Link to="/login"><span class="black-text text-darken-2">Log in</span></Link></li>
                      <li><Link to="/contact"><span class="black-text text-darken-2">Contact</span></Link></li>
                      {this.polla()}
                      <li><Link to="/cart"><span class="black-text text-darken-2">My cart</span></Link></li>
                      <li><Link to="/cart"><i className="material-icons md-dark">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                  <li><Link to="/"><span class="black-text text-darken-2">Home</span></Link></li>
                  <li><Link to="/shop"><span class="black-text text-darken-2">Shop</span></Link></li>
                  <li><Link to="/portfolio"><span class="black-text text-darken-2">Portfolio</span></Link></li>
                  <li><Link to="/login"><span class="black-text text-darken-2">Log in</span></Link></li>
                  <li><Link to="/contact"><span class="black-text text-darken-2">Contact</span></Link></li>
                  {this.polla()}
                  <li><Link to="/cart"><span class="black-text text-darken-2">My cart</span></Link></li>
              </ul>

  </div>

    )
  }
}

export default Navigatorbar;
