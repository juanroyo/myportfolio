import React, { Component } from 'react';
import MyContext from './mycontext';
import fire from '../config/fire';

export default class MyProvider extends Component {
  state = {
    user: null,
  };
authListener = this.authListener.bind(this);

componentDidMount() {
 this.authListener();
}

authListener() {
 fire.auth().onAuthStateChanged((user) => {
   console.log(user);
   if (user) {
     this.setState({ user });
     localStorage.setItem('user', user.uid);
   } else {
     this.setState({ user: null });
     localStorage.removeItem('user');
   }
 });
}
    render() {
        return (
          <div>
            <MyContext.Provider
                value={{user: this.state.user}}>
                {{this.props.children}}
            </MyContext.Provider>
            </div>
        );
    }
}
