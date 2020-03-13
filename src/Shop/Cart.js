import React, {useContext} from 'react';
import {CartContext} from './CartContext.js';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);
  const totalPrice = cart.reduce((acc, currentState) => acc + currentState.price, 0);
  var Names = cart.map(item => (<h3>{item.name}</h3>));
  console.log(Names);
  return (
    <div>
      <div class="container content-section">
          <h2 class="section-header">CART</h2>
          <div class="cart-row">

              <h3 class="cart-item cart-header cart-column">ITEM {Names}</h3>
              <h3 class="cart-price cart-header cart-column">PRICE</h3>
              <h3 class="cart-quantity cart-header cart-column">QUANTITY {cart.length}</h3>
          </div>
          <div class="cart-items">
          </div>
          <div class="cart-total">
              <strong class="cart-total-title">Total</strong>
              <h3 class="cart-total-price">{totalPrice}€</h3>
          </div>
          <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
      </div>
    <span>items in Cart: {cart.length}</span>
    <br/>
    <span>total price: {totalPrice}</span>
    </div>
  )

}
