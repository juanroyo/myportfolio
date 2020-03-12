import React, { Component } from 'react';
import {Form, Button, Card} from 'react-bootstrap'
import './Contact.css';

export default class Contact extends Component {

render(){
  return(
    <div class="justifier">
    <div class='stylecontact'>
      <div class="boxstyle">
    <Form>
      <h1>Contact</h1>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
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
