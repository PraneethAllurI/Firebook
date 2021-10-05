import firebase from 'firebase';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBa4Wf7QAfMBrkD03GBqMP7YpeFRPsNXIY",
    authDomain: "firebook-clone.firebaseapp.com",
    projectId: "firebook-clone",
    storageBucket: "firebook-clone.appspot.com",
    messagingSenderId: "457393926536",
    appId: "1:457393926536:web:a27128ed1e7c4095be0a3d"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };