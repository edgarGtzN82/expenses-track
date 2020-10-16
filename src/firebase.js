import firebase from 'firebase/app';

import 'firebase/auth';        // for authentication
//import 'firebase/storage';     // for storage
//import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
//import 'firebase/messaging';   // for cloud messaging
//import 'firebase/functions';   // for cloud functions

const config = {
    apiKey: "AIzaSyCtiaFu1vd8xsN51WcellJZlssvTTYHbeY",
    authDomain: "expenses-track-90902.firebaseapp.com",
    databaseURL: "https://expenses-track-90902.firebaseio.com",
    projectId: "expenses-track-90902",
    storageBucket: "expenses-track-90902.appspot.com",
    messagingSenderId: "825989494051",
    appId: "1:825989494051:web:9b68e46f0f800481028896",
    measurementId: "G-4XG9VPFPG9"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
 