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

import { getDatabase, ref, child, get }
    from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

const db = getDatabase();


////references////
const name = document.getElementById('nameInp')
const password = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');

////Authentciation process////

function AuthenticateUser() {
    const dbref = ref(db);
    console.log(dbref)


    get(child(dbref, "UserList/" + name.value)).then((snapshot) => {
        console.log(snapshot, name.value)
        if (snapshot.exists()) {

            let dbpass = decPass(snapshot.val().password);
            console.log(dbpass);
            if (dbpass == password.value) {
                login();
            }
            else {
                alert(`user doesn't exist`);
            }
        }
        else {
            console.log(password.value, name.value)
            alert('username or password is invalid');
        }

    })

}
function decPass(dbpass) {
    var pass12 = CryptoJS.AES.decrypt(dbpass, password.value);
    return pass12.toString(CryptoJS.enc.Utf8);
}
//////login/////
function login(name) {
    let keeplogin = document.getElementById("customSwitch1").checked;
    if (!keeplogin) {
        sessionStorage.setItem('name', JSON.stringify(name));
        window.location = "../html/message.html"
    }

    else {
        localStorage.setItem('keeplogin', 'yes');
        localStorage.setItem('name', JSON.stringify(name));
        window.location('name')
    }
}



///assign the events///
submit.addEventListener('click', AuthenticateUser);