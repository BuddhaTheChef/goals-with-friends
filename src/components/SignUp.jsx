import React, {Component} from 'react';
import {Link} from 'react-router'
import { firebaseApp } from '../firebase';

class SignUp extends Component {
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

signUp() {
  console.log('this.state', this.state);
  const { email, password } = this.state;
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
  .catch(error => {
    this.setState({error})
  })
}

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2 className="signup-title">Sign Up</h2>
        <div className="main-signup">
          <input
            className="form-control signup-input1"
            type="text"
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
            style={{marginRight: '5px'}}
          />
          <input
            className="form-control signup-input2"
            type="password"
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
            style={{marginRight: '5px'}}
          />
          <button
            className="btn btn-primary btn-signup"
            type="button"
            onClick={() => this.signUp()}
            >
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signin'}>Already a user? Sign In</Link></div>
      </div>
    )
  }
}

export default SignUp;
