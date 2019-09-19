import React, { Component } from 'react';
import firebase from 'firebase/app';
import Observer from './Observer';
import {Button} from 'reactstrap';

export default class LogIn extends Component {
    onGoogleSignInClicked = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(() => { console.log("google singin was successful")})
            .catch((error) => { console.log(error) });
    }
    onFacebookSignInClicked = () => {
        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then(() => { console.log("facebook singin was successful"); })
            .catch((error) => { console.log(error) });
    }

    
    
    render() {

        return <center>
            <Observer/>
            <Button onClick ={() => this.onGoogleSignInClicked()}>Sign in with google</Button>
            <Button onClick ={() => this.onFacebookSignInClicked()}>Sign in with facebook</Button>
        </center>
    }
}