import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAgOqHwTPTx8n3_SEAl_DYwATB5Am3wrHk",
  authDomain: "goal-with-friends.firebaseapp.com",
  databaseURL: "https://goal-with-friends.firebaseio.com",
  projectId: "goal-with-friends",
  storageBucket: "",
  messagingSenderId: "502025570767"
};

export const firebaseApp = firebase.initializeApp(config);
