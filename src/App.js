import React from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './apiKey' ;
import {FirebaseAuthProvider, FirebaseAuthConsumer} from "@react-firebase/auth";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LogInPage from './components/LogInPage';
import HomePage from './components/HomePage';
import FixedFound from './components/FixedFound';

function App() {  
  return (
    <div>
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig} />   
    <div className="App">
    <Router>
      <Switch>
        <Route exact path = "/" component ={FixedFound}/>
        <Route path = "/home" component ={HomePage}/>
        <Route path = "/logIn" component ={LogInPage}/>
    </Switch>
    </Router>
    </div>
    </div>
  );
}
    
export default App;
