import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAKGOxgzrRurFyAi4OMFhnhlQYlQOLCUTc",
    authDomain: "labnotes-aeb2e.firebaseapp.com",
    projectId: "labnotes-aeb2e",
})

let db= firebase.firestore();
//db.settings({timestampsInSnapshots:true});

export default db;