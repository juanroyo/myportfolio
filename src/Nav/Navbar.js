import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>

                    <ul className="right">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/shop">Shop</Link></li>
                      <li><Link to="/portfolio">Portfolio</Link></li>
                      <li><Link to="/register">Sing up</Link></li>
                      <li><Link to="/login">Log in</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/cart">My cart</Link></li>
                      <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>


    )
}

export default Navbar;
