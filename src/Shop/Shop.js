import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';

import { addToCart } from '../actions/cartActions'
import {Form} from 'react-bootstrap';
import Tooltip from "@material-ui/core/Tooltip";
import React, { useState, useEffect } from 'react';
import Products from './Products.js'


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
