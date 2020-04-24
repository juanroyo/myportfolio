//Dependencies
import { connect } from 'react-redux';
import React, { Component } from 'react';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import initState from '/Users/juanroyo/Documents/MyPortfolio/my-app/src/Data/Data.js'

function Showproduct( props) {
const product = initState.items.find(({ _id }) => _id === props.match.params.id)
    return (
          <div >
                  <div className="card" k>
                          <div className="card-image">

                              <span className="card-title"></span>
                              <span className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">add</i></span>
                        </div>
                          <div className="card-content">
                          <p>{product.author}</p>
                          <p>{product.genre}</p>
                          <p>{product.desc}</p>
                          <p><b>Price: {product.price}€</b></p>
                              {console.log(props.match.params.id)}
                              {console.log(product.title)}
                          </div>
              </div>  )})}
            </div>
    );
  }


export default Showproduct;
