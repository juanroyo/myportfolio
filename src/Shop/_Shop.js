import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import './Shop.css'

export default class Shop extends Component {
Constructor() {

this.state = {

}
}


render(){
  return(
    <div>
      <div class="container content-section">
          <h2 class="section-header">MUSIC</h2>
          <div class="shop-items">
              <div class="shop-item">
                  <h3 class="shop-item-title">Album 1</h3>
                  <Image class="shop-item-image" src="Images/Album 1.png" />
                  <div class="shop-item-details">
                      <h3 class="shop-item-price">$12</h3>
                      <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                  </div>
              </div>
              <div class="shop-item">
                  <h3 class="shop-item-title">Album 2</h3>
                  <Image class="shop-item-image" src="Images/Album 2.png" />
                  <div class="shop-item-details">
                      <h3 class="shop-item-price">$14</h3>
                      <button class="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
                  </div>
              </div>
              <div class="shop-item">
                  <h3 class="shop-item-title">Album 3</h3>
                  <Image class="shop-item-image" src="Images/Album 3.png" />
                  <div class="shop-item-details">
                      <h3 class="shop-item-price">$9</h3>
                      <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                  </div>
              </div>
              <div class="shop-item">
                  <h3 class="shop-item-title">Album 4</h3>
                  <Image class="shop-item-image" src="Images/Album 4.png" />
                  <div class="shop-item-details">
                      <h3 class="shop-item-price">$19</h3>
                      <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                  </div>
              </div>
            </div>
          </div>
          <div class="container content-section">
              <h2 class="section-header">CART</h2>
              <div class="cart-row">
                  <h3 class="cart-item cart-header cart-column">ITEM</h3>
                  <h3 class="cart-price cart-header cart-column">PRICE</h3>
                  <h3 class="cart-quantity cart-header cart-column">QUANTITY</h3>
              </div>
              <div class="cart-items">
              </div>
              <div class="cart-total">
                  <strong class="cart-total-title">Total</strong>
                  <h3 class="cart-total-price">$0</h3>
              </div>
              <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
          </div>
        </div>

    );
  }
}
