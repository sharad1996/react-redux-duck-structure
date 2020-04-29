import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCnorr2R87lVROA7K2-aAYkyD2VJE_YfE",
    authDomain: "runmybusinessresourcecenter.firebaseapp.com",
    databaseURL: "https://runmybusinessresourcecenter.firebaseio.com",
    projectId: "runmybusinessresourcecenter",
    storageBucket: "runmybusinessresourcecenter.appspot.com",
    messagingSenderId: "234844618620",
    appId: "1:234844618620:web:33d4d49d5ae2612c46aef9",
    measurementId: "G-5M3TGY5E41"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

