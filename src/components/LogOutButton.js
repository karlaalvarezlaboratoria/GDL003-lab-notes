import React, { Component } from 'react';
import firebase from 'firebase/app';

export default class LogOut extends Component {
    onLogoutClicked = () => {
        firebase.auth().signOut()
            .then(() => {
                console.log("log out has been successful")
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {

        return <center>
            <button onClick={() => this.onLogoutClicked()}>Log out</button>
        </center>
    }
}