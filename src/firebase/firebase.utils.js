import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNSKcYFSqBUMI7bfuuSg1a5OMq642OEOE",
    authDomain: "band-calendar-96a89.firebaseapp.com",
    databaseURL: "https://band-calendar-96a89.firebaseio.com",
    projectId: "band-calendar-96a89",
    storageBucket: "band-calendar-96a89.appspot.com",
    messagingSenderId: "148967856500",
    appId: "1:148967856500:web:4c4f6eec7cb08590afb421",
    measurementId: "G-3MZB0L9HJM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;