
import React, { Component } from 'react';
import './register.css'
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
  		super(props)
  		this.state = {
  			email: '',
  			password: ''
  		}
  	}
    changeHandler = e => {
    		this.setState({ [e.target.name]: e.target.value })
    	}

    	submitHandler = e => {
    		e.preventDefault()
    		console.log(this.state)
    		axios
    			.post('http://localhost:8080/register', this.state)
    			.then(response => {
    				console.log(response)
    			})
    			.catch(error => {
    				console.log(error)
    			})
    	}
  render() {
    const { email, password } = this.state
  return(
    <div class="wrapper fadeInDown">

  <div id="formContent">

    <div class="fadeIn first">
    Register with your email
    </div>


    <form method="POST">
      <input type="text" id="login" class="fadeIn second" name="email" placeholder="email"value={email}
      onChange={this.changeHandler}></input>
      <input type="text" id="password" class="fadeIn third" name="password" placeholder="password" value={password}
      onChange={this.changeHandler}></input>
      <input type="submit" class="fadeIn fourth" value="Sign up"></input>
    </form>




  </div>
</div>
  )
}
}
