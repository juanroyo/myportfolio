import React, { Component } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from "react-stripe-checkout";
import { onClear } from './actions/cartActions'
import Alert from 'react-bootstrap/Alert'
import setShow from 'react-bootstrap/Alert'

class Recipe extends Component{
  constructor(props) {
    super(props);
this.state = {
  message: '',
  status: " "
  }
  this.handleAlert = this.handleAlert.bind(this);
}

handleAlert=()=>{
  console.log(this.state.status)
switch (this.state.status) {
  case 200:
  return(<div class="alert alert-success" role="alert">
This is a success alert—check it out!
</div>)
break;
  case 500:
    return(<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
  </div>)
    break;
  default:
    return(<p></p>)
}
setTimeout(function(){ this.setState({status: ''}); }, 3000);
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
          this.setState({status: status})

          if (status = 200){
            this.props.onClear();
          } else {
            return(alert("Hello! I am an alert box!!"))
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
                       {this.handleAlert()}

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
        onClear: (id)=>{dispatch(onClear())},
    }
}

export default connect( mapStateToProps,mapDispatchToProps)(Recipe)
