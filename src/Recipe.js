import React, { Component } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from "react-stripe-checkout";
import { onClear } from './actions/cartActions'
class Recipe extends Component{
state = {
  message: '',
  status: " "
}


    render(){

      const notLogged = () => {
        if (this.props.user != null) {
        return(<StripeCheckout
            stripeKey= "pk_test_4B9W2axLr9LK45DRsR9W2Fhv00zdGlIUBT"
            token={makePayment}
            name="buy mis cosas"
            amount={this.props.total * 100}
             >
             Compra {this.props.total} €
           </StripeCheckout>)
        } else {
          return(<a href="http://localhost:3000/login">you need to be logged in first</a>)
        }
      }

      const makePayment = (token, props) => {
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
          var {status} = response;
          console.log("STATUS", status)
          if (status = 200){
            console.log("hola")
           {props.onClear()}
          }
        })
        .catch(error => console.log(error))
    }
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">

                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                      <button className="waves-effect waves-light btn">
                      {notLogged()}

                       </button>
                       {console.log(this.props)}
                       <button onClick={onClear}>clear </button>
                    </div>
                    <div>{this.state.message}</div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{

    return {
        addedItems: state.addedItems,
        total: state.total,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        onClear:()=>{dispatch({type: 'DESTROY_SESSION'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
