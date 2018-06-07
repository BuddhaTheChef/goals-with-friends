import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  changeTheme() {

  }

  render() {
    return (
      <div className="goals-with-friends">
        <div className="top-div">
        <h3 className="main-title">Goals With Friends</h3>
        <button
          className="btn btn-danger btn-changetheme"
          onClick={() => this.changeTheme()}
          >Change Theme
        </button>
        </div>
        <AddGoal />
        <hr />
        <h4 className="subtitle-1">Goals</h4>
        <GoalList />
        <hr />
        <h4 className="subtitle-2">Complete Goals</h4>
        <CompleteGoalList />
        <hr />
        <button
          className="btn btn-danger btn-signout"
          onClick={() => this.signOut()}
          >
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
