import React, {useContext} from 'react';
import {Items} from '../Shop/Items.js';
import {Button} from 'react-bootstrap';
//import {CartContext} from './CartContext.js';
import {CartProvider} from './CartContext.js';
import {Cart} from './Cart.js'

export const Itemslist = () => {
    const database = [
      {name: 'Album 1', price: '10', id:'1'},
      {name: 'Album 2', price: '10', id:'2'},
      {name: 'Album 3', price: '10', id:'3'},
      {name: 'Album 4', price: '10', id:'4'}
    ]

  return (
    <CartProvider>
    <Cart />

{database.map((item) =>(
<Items name={item.name} price={item.price} key={item.id} />
))}
        </CartProvider>
  );
}


/*
{this.state.database.map((item) =>(

  <div key={item.id}>
  <items />
  <h1>{item.name}</h1>
    <h3>{item.price} </h3>
    <Button variant="primary" onClick={this.addToCart.bind(this)}>Add to cart</Button>
    </div>

))}
*/
