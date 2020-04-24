import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';

import { addToCart } from '../actions/cartActions'
import {Form} from 'react-bootstrap';
import cartReducer from '/Users/juanroyo/Documents/MyPortfolio/my-app/src/reducers/cartReducer.js'
import Tooltip from "@material-ui/core/Tooltip";
import React, { useState, useEffect } from 'react';
import Products from './Products.js'

const Topico  = ( {props, match} ) => {
  //const topic = props.items.find(( _id ) => _id === props.match.params._id)
  console.log(match)
  console.log(props);
  return (
    <div><h1></h1></div>
  )
}

function Shop (  props, {match} )  {

        return(
            <div className="container">
              <Products/>
            </div>
        )

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


export default connect(mapStateToProps,mapDispatchToProps)(Shop)
