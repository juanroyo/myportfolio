import React, { Component } from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
  		super(props)
  		this.state = {
  			email: '',
  			textarea: ''
  		}
  	}
    changeHandler = e => {
    		this.setState({ [e.target.name]: e.target.value })
    	}

    	submitHandler = e => {
    		e.preventDefault()
    		console.log(this.state)
    		axios
    			.post('http://localhost:8080/contact', this.state)
    			.then(response => {
    				console.log(response)
    			})
    			.catch(error => {
    				console.log(error)
    			})
    	}

render(){
  const { email, textarea } = this.state
  return(
    <div class="justifier">
    <div class='stylecontact'>
      <div class="boxstyle">
    <Form onSubmit={this.submitHandler}>
      <h1>Contact</h1>
    <Form.Group controlId="formBasicEmail">
      <Form.Label for="email">Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"
          name="email"
          value={email}
          onChange={this.changeHandler}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label for="textarea">Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" type="text"
    name="textarea"
    value={textarea}
    onChange={this.changeHandler} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
   </div>
  </div>
  </div>
    );
  }
}
