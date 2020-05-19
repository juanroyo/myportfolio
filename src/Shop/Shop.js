import { connect } from 'react-redux';


import { addToCart } from '../actions/cartActions'

import React from 'react';
import Products from './Products.js'


function Shop (  props, {match} )  {

        return(
            <div >
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
