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

import { getDatabase, ref, set, child, get, }
    from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

const db = getDatabase();

///---the references
const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const password = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');

///validation///
function isEmptyorSpaces(str) {
    return str == null || str.match(/^ *$/) !== null;
}



function Validation() {
    let nameregex = /^[a-zA-Z\s]+$/;
    let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    if (isEmptyorSpaces(name.value) || isEmptyorSpaces(email.value) || isEmptyorSpaces(password.value)) {
        alert("Don't left any field empty")
        return false;
    }
    if (!nameregex.test(name.value)) {
        alert("Enter a valid name")
        return false;
    }
    if (!emailregex.test(email.value)) {
        alert("Enter a valid email")
        return false;
    }
    if (password.value < 6) {
        alert("pasword should be at least 6 digit")
        return false;
    }
    return true;
}
///register user to firebase///

function RegisterUser() {
    if (!Validation()) {
        return;
    }
    const dbref = ref(db);
    get(child(dbref, "UsersList/" + name.value)).then((snapshot) => {
        if (snapshot.exists()) {
            alert("Account Already Exists!");
        }
        else {
            set(ref(db, "UserList/" + name.value), {
                fullanme: name.value,
                email: email.value,
                password: password.value


            })
                .then(() => {
                    alert("user added successfully")
                    //  console.log(snapshot);
                })
                .catch((error) => {
                    alert("error" + error)
                })
        }
    })

}

// function RegisterUser() {
//     auth.createUserWithEmailAndPassword(email, password)
//         .then(function () {

//             var user = auth.currentUser

//             var database_ref = db.ref()
//             var user_data = {
//                 email: email,
//                 last_login: Date.now()
//             }
//             database_ref.child('users/' + user.uid).set(user_data)

//             alert(`user created`);

//         })
//         .catch(function (error) {
//             var error_code = error.code;
//             var error_message = error.message;
//             alert(error_message)
//         })
// }



////assign the events///
submit.addEventListener('click', RegisterUser);
