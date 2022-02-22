import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjRzrZ3klLEhpFcjDqveeLB8_Md1O2TP8",
    authDomain: "emessage-5616e.firebaseapp.com",
    databaseURL: "https://emessage-5616e-default-rtdb.firebaseio.com",
    projectId: "emessage-5616e",
    storageBucket: "emessage-5616e.appspot.com",
    messagingSenderId: "1094240238242",
    appId: "1:1094240238242:web:10394539e6c472637975fb",
    measurementId: "G-HHHNP78DGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get }
    from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

const db = getDatabase();


////references////
const email = document.getElementById('emailInp');
const password = document.getElementById('passInp');