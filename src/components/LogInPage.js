import React, { Component } from 'react';
import {FirebaseAuthConsumer} from "@react-firebase/auth";
import firebase from 'firebase/app';

export default class LoginPage extends Component {
    onGoogleSignInClicked = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(() => { console.log("google singin was successful")})
            .catch((error) => { console.log(error) });
    }
    onFacebookSignInClicked = () => {
        const googleAuthProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(() => { console.log("facebook singin was successful") })
            .catch((error) => { console.log(error) });
    }
    
    render() {

        return <center>
            <button onClick={() => this.onGoogleSignInClicked()}>Sign in with google</button>
            <button onClick={() => this.onFacebookSignInClicked()}>Sign in with facebook</button>
          
            <FirebaseAuthConsumer>
                {({ isSignedIn, user, providerId }) => {
                    console.log("Flag"+isSignedIn)
                    console.log(user)
                    console.log(providerId)
                }}
            </FirebaseAuthConsumer>
        </center>
    }
}