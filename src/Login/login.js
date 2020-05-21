import React, { Component } from 'react';
import './register.css'
import fire from '../config/fire';
import {Form, Button} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';
import Showproduct from '../Showproduct/Showproduct.js'
var purchases = []

function initApp() {

  //this.GetMovies();
  GetMoviesFromMongo();

}

initApp()
function GetMoviesFromMongo( ){


  fetch("https://myportfolionode.herokuapp.com/login", { method: 'GET' })
  .then(res => res.json())
      .then(res => {
        purchases = res;

      });
}


export default class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    messageerror: '',
    messagesuccess: "",
  };
  this.login = this.login.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.signup = this.signup.bind(this);
  this.error = this.error.bind(this);
}


handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{


    }).then(
      this.setState({email: "", password: "", messagesuccess: "logged in"})

    )
    .catch((error) => {

        this.setState({messageerror: error, messagesuccess: ""})
        console.log(error);
      });

  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
          console.log(error);
      })
  }
error(){

  if (this.state.messageerror !== "") {

    return <p>{this.state.messageerror.message}</p>
  }
  }

  render() {



  return(



        <div class="container">
        <div class="row">
            <div class='col'>
                <div class="boxstylelogin">
                          <Form>
                          <h1 class="titlebox">Login/Register</h1>
                         <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                       </Form.Text>
                         </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                          <Form.Label>Password</Form.Label>
                          <Form.Control value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                         </Form.Group>
                          <Button variant="primary" type="submit" onClick={this.login} >Login</Button>
                         <Button variant="primary" type="submit" onClick={this.signup} style={{marginLeft: '25px'}} >Signup</Button>
                         </Form>
                      <div>{this.error()}</div>
                  <div>{this.state.messagesuccess}</div>
              </div>
         </div>
         </div>
         <div class="margin">
          <div class="row">
          <div class="col">
                         {purchases.filter((item)=>{

                             if(this.props.user == null ) {
                                 return (null)
                             } else if (Object.keys(item).some(key => typeof item[key] === "string" && item[key].toLowerCase().includes(this.props.user.email))){
                                  return item
                             }
                           })
                         .map(item=>{return(<div class="cardmarginlogin" id={item._id}>
                         <br/>
                           {item.products.map(item=>{return(

                             <div class="container-fluid" >

                               <div class="row">
                                 <div class="col">
                                 <div class="col-sm-2">

                                  </div>
                                  <Link to={`/Showproduct/${item._id}`}>  <h1 class="titleproduct">{item.title}</h1></Link>
                                    <hr/>

                                 </div>

                               </div>
                               <div class="row">
                                 <div class="col-xs-6">

                                 <img  class="img-fluid" class="shadow" alt="Responsive image" src={`http://localhost:3000/Images/${item.img}`} />
                                 </div>
                                 <div class="col-xs-6">
                                 <div class="padding">
                                 <h2 class='cardtitle'>{item.price}€</h2>
                                 <p>{item.desc}</p><br/><p>{item.author}</p>
                                 <br/>

                                 </div>
                                 </div>
                               </div>
                             </div>

                         )})}


                             <p class="goodwidth">Total: {item.total}</p>

                           </div>
                         )})}
                         </div>
                         </div>
                     </div>
                     <Route
                      path="/Showproduct/:id"
                      render={(props) => <Showproduct {...props} />}
                    />
                     </div>



)
}
}
