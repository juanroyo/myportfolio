import React, {useContext} from 'react';
import {CartContext} from './CartContext.js';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, currentState) => acc + currentState.price, 0);
  return (
    <div>
    <span>items in Cart: {cart.length}</span>
    <br/>
    <span>total price: {totalPrice}</span>
    </div>
  )

}
