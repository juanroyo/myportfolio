import React, {useContext} from 'react';
import {CartContext} from './CartContext.js';
import {Image} from 'react-bootstrap';

export const Items = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
      const item = { name: props.name, price: props.price}
      setCart(currentState => [...currentState, item]);
    }
    return(
      <div>
        <div class="container content-section">
            <h2 class="section-header">MUSIC</h2>
            <div class="shop-items">
              <div class="shop-item">
                  <h3 class="shop-item-title">{props.name}</h3>
                  <Image class="shop-item-image" src="Images/Album 3.png" />
                  <div class="shop-item-details">
                      <h3 class="shop-item-price">{props.price} €</h3>
                      <button class="btn btn-primary shop-item-button" type="button" onClick={addToCart}>ADD TO CART</button>
                  </div>
              </div>
      {/*<h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button onClick={addToCart}> add to cart </button>*/}
          </div>
        </div>
      </div>
    );
};
