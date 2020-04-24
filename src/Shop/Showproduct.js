//Dependencies
import { connect } from 'react-redux';
import React, { Component } from 'react';
import find from 'lodash/find';
import { addToCart } from '../actions/cartActions'
import { Link } from 'react-router-dom';
import initState from '/Users/juanroyo/Documents/MyPortfolio/my-app/src/Data/Data.js'

const Showproduct = ( props) => {
const product = initState.items.find(({ _id }) => _id === props.match.params.id)
const handleClick = (_id) => {
          props.addToCart(_id);
        }
    return (
      <div className="card" key={product._id}>
              <div className="card-image">
                  <img src={`http://localhost:3000/Images/${product.img}`}/>
                  <span className="card-title">{product.title}</span>
                  <span className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{handleClick(product._id)}}><i className="material-icons">add</i></span>
            </div>
              <div className="card-content">
                          <p>{product.author}</p>
                          <p>{product.genre}</p>
                          <p>{product.desc}</p>
                          <p><b>Price: {product.price}€</b></p>
                              {console.log(props.match.params.id)}
                              {console.log(product.title)}
                          </div>
              </div>



    );
  }


  const mapStateToProps = (state) => {
      return {
        items: state.items
      }
    }
    const mapDispatchToProps= (dispatch)=>{

      return{
          addToCart: (_id)=>{dispatch(addToCart(_id))}
      }
  }


  export default connect(mapStateToProps,mapDispatchToProps)(Showproduct)
