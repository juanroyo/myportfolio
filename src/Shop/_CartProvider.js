import React, {Component, useState} from 'react';
import {CartContext} from './CartContext.js';

export default class CartProvider extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render(){
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
    {this.props.children}
    </CartContext.Provider>
  )
}
}
