import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import '../App.css'

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this);
    const { title } = this.state;
    const { email } = this.props.user;
    goalRef.push({email, title});
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a goal"
            className="form-control"
            style={{marginTop: '20px', marginRight: '5px', width: '500px', marginLeft: '20px', marginBottom: '20px'}}
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.addGoal()}
            >
            Submit
          </button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps,null)(AddGoal);
