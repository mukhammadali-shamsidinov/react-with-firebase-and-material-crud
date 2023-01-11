import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC77cBJPiiK1AH4auLrGv3DbMAz_rFoOZA",
    authDomain: "test-backend-ce43f.firebaseapp.com",
    projectId: "test-backend-ce43f",
    storageBucket: "test-backend-ce43f.appspot.com",
    messagingSenderId: "914845441856",
    appId: "1:914845441856:web:a450df14ed16fa0089e4a5"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export {db}