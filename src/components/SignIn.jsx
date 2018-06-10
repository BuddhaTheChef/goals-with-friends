import React, {Component} from 'react';
import {Link} from 'react-router'
import { firebaseApp } from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password: '',
      error: {
        message: ''
      }
    }
  }

signIn() {
  console.log('this.state', this.state);
  const { email, password } = this.state;
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
  .catch(error => {
    this.setState({error})
  })
}

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2 className="signin-title">Sign In to view goals!</h2>
        <div className="main-signin">
          <input
            className="form-control signin-input1"
            type="text"
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
            style={{marginRight: '5px'}}
          />
          <input
            className="form-control signin-input2"
            type="password"
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
            style={{marginRight: '5px'}}
          />
          <button
            className="btn btn-primary btn-signin"
            type="button"
            onClick={() => this.signIn()}
            >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>No account yet? Sign Up</Link></div>
      </div>
    )
  }
}

export default SignIn;
