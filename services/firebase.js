import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAr3R7Z1i4h4r8Fc78ET7UrqsyJTKl2JW0",
    authDomain: "awesome-project-7e755.firebaseapp.com",
    projectId: "awesome-project-7e755",
    storageBucket: "awesome-project-7e755.appspot.com",
    messagingSenderId: "854681352041",
    appId: "1:854681352041:web:e9ed16497a44d9552f6ff8",
    measurementId: "G-CXZTH1HYXG"
}

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
    }

    login = (email, pass) => {
        return this.auth.signInWithEmailAndPassword(email, pass)
    }

    createUser = async (name, user, pass) => {
        await this.auth.createUserWithEmailAndPassword(user, pass)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }


    getUser = () => {
        return this.auth.currentUser.displayName
    }

}

const firebaseService = new Firebase();
export default firebaseService;