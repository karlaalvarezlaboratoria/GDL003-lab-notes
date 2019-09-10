import React from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './apiKey' ;
import {FirebaseAuthProvider, FirebaseAuthConsumer} from "@react-firebase/auth";
import {Container} from 'reactstrap';
//import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LogInPage from './components/LogInPage';
import HomePage from './components/HomePage';
// import FoundPage from './components/FoundPage';
// import Notes from './components/Notes'

function App() {  
  return (
    <div className='App'>
      <Container>
        <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <FirebaseAuthConsumer>
          {({ isSignedIn,  user}) => {
            console.log(user);
            //localStorage.setItem("name", user.displayName);
            return isSignedIn ? <HomePage /> : <LogInPage />
          }
        }
        </FirebaseAuthConsumer>
        </FirebaseAuthProvider>

      </Container>
         
      {/* <div className="router">
      <Router>
        <Switch>
          <Route exact path = "/" component ={FoundPage}/>
          <Route path = "/home" component ={HomePage}/>
          <Route path = "/logIn" component ={LogInPage}/>
          <Route path = "/notes" component ={Notes}/>
      </Switch>
      </Router>
      </div> */}
    </div>
  );
}
    
export default App;
