import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import fire from '../config/fire';
 class Navbar extends Component {
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
            <nav className="nav-wrapper">
                <div className="container">
                    {/*<Link to="/" className="brand-logo">Shopping</Link>*/}
                    <ul className="right">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/shop">Shop</Link></li>
                      <li><Link to="/portfolio">Portfolio</Link></li>
                      <li><Link to="/login">Log in</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      {this.polla()}
                      <li><Link to="/cart">My cart</Link></li>
                      <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>


    )
  }
}

export default Navbar;
