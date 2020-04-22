import React, { Component } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from "react-stripe-checkout";
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{
state = {
  message: ''
}
    componentWillUnmount() {
            if(this.refs.shipping.checked)
                this.props.substractShipping()
    }
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){

      const makePayment = token => {
        const body = {
          token,
          product: this.props,
        }
        const headers = {
          "Content-Type": "application/json"
        }
        return fetch(`http://localhost:8080/cart`, {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        }).then(response => {
          console.log("RESPONSE", response)
          const {status} = response;
          console.log("STATUS", status)
        })
        .catch(error => console.log(error))
    }

  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                      <button className="waves-effect waves-light btn">
                        <StripeCheckout
                          stripeKey= "pk_test_4B9W2axLr9LK45DRsR9W2Fhv00zdGlIUBT"
                          token={makePayment}
                          name="buy mis cosas"
                          amount={this.props.total * 100}
                           >
                           Compra {this.props.total} €
                         </StripeCheckout>
                       </button>
                    </div>
                    <div>{this.state.message}</div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
