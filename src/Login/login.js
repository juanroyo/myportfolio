import React, { Component } from 'react';
import './register.css'
import fire from '../config/fire';

var purchases = []

function initApp() {

  //this.GetMovies();
  GetMoviesFromMongo();
  console.log("hola")
}

initApp()
function GetMoviesFromMongo( ){


  fetch("http://localhost:8080/login", { method: 'GET' })
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
const data = purchases

const results = purchases.filter(item =>
  Object.keys(item).some(key => typeof item[key] === "string" && item[key].toLowerCase().includes(this.props.user.email)))

console.log(this.props.user)
console.log(results)

  return(
    <div className="col-md-6">

        <form>
       <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
        <div class="form-group">
       <label for="exampleInputPassword1">Password</label>
       <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
       </div>
       <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
       <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>

       </form>

        <div>{this.error()}</div>
        <div>{this.state.messagesuccess}</div>
        {results.map(item=>{
            return(
              <div key={item._id}>
         <p>{item.title}</p>
         <p></p>
         <p>{item.total}</p>
         </div>
       )})}
  </div>
  )
}
}
