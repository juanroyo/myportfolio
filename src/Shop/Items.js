import React, {useContext} from 'react';
import {CartContext} from './CartContext.js';


export const Items = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
      const item = { name: props.name, price: props.price}
      setCart(currentState => [...currentState, item]);
    }
    return(
      <div>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button onClick={addToCart}> add to cart </button>
      </div>
    );
};
