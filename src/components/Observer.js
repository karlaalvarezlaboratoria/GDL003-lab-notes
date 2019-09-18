import React from 'react';
import {Redirect} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../apiKey' ;
import {FirebaseAuthProvider, FirebaseAuthConsumer} from "@react-firebase/auth";    


const Observer = () => {
    return ( 
        <React.Fragment>
            <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
            <FirebaseAuthConsumer>
            {({ isSignedIn}) => { 
                (firebase.auth().currentUser)? 
                localStorage.setItem('uid', firebase.auth().currentUser.uid) : 
                console.log('Espera para el nombre');
                (firebase.auth().currentUser)?
                localStorage.setItem('name', firebase.auth().currentUser.displayName)  :
                console.log('Espera para el uid');  
                
                return isSignedIn ? <Redirect to ='/home'/> : <Redirect to ='/'/>
            }}
           </FirebaseAuthConsumer>
           </FirebaseAuthProvider>
        </React.Fragment>
    );
};

export default Observer;     
