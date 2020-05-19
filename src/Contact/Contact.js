import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
  		super(props)
  		this.state = {
  			email: '',
  			textarea: '',
        successfullMessage: '',
        errorMessage: ''
  		}
  	}
    changeHandler = e => {
    		this.setState({ [e.target.name]: e.target.value })
    	}

    	submitHandler = e => {
    		e.preventDefault()
    		console.log(this.state)
    		axios
    			.post('https://git.heroku.com/polar-meadow-31783.git/contact', this.state)
    			.then(response => {
    				console.log(response.status)
            if (response.status = 200) {
              this.setState({successfullMessage: "succesfully sent message!", email: '', textarea: '', errorMessage: ''})
            }

    			})
    			.catch(error => {
    				console.log(error)
            this.setState({errorMessage: "sorry, your message could't be sent", successfullMessage:"", email: '', textarea: ''})
    			})
    	}

render(){
  const { email, textarea } = this.state
  return(

              <div class="container">
                  <div class='row'>
                  <div class='col'>
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
                        <div>{this.state.successfullMessage}</div>
                      <div>{this.state.errorMessage}</div>
                   </div>
                </div>
                </div>
            </div>

    );
  }
}
