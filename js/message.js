// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyCjRzrZ3klLEhpFcjDqveeLB8_Md1O2TP8",
//     authDomain: "emessage-5616e.firebaseapp.com",
//     databaseURL: "https://emessage-5616e-default-rtdb.firebaseio.com",
//     projectId: "emessage-5616e",
//     storageBucket: "emessage-5616e.appspot.com",
//     messagingSenderId: "1094240238242",
//     appId: "1:1094240238242:web:10394539e6c472637975fb",
//     measurementId: "G-HHHNP78DGX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import { getDatabase, ref, child, get }
//     from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

// const db = getDatabase();



//references///


let userlink = document.getElementById('userlink');
let signout = document.getElementById('signoutlink');
var currentuser = null;

//functions//
function getUsername() {
    let keeplogin = localStorage.getItem("keeplogin");

    if (keeplogin == "yes") {
        currentuser = JSON.parse(localStorage.getItem('name'));
    }
    else {
        currentuser = JSON.parse(sessionStorage.getItem(`name`));
    }
}


function Signout() {
    sessionStorage.removeItem('name');
    localStorage.removeItem('name');
    localStorage.removeItem('keeplogin');
    window.location = "message.html";
}

///window loads///

window.onload = function () {
    getUsername();
    if (currentuser == null) {
        userlink.innerText = "Create New Account";
        userlink.classList.replace("nav-link", "btn");
        userlink.classList.add("btn-primary");
        userlink.href = "register.html";

        signout.innerText = "Login";
        signout.classList.replace("nav-link", "btn");
        signout.classList.add("btn-success");
        signout.href = "login.html";

    }
    else {
        userlink.innerText = currentuser.name;
        userlink.classList.replace("btn", "nav-link");
        userlink.classList.add("btn-primary");
        userlink.href = "#";

        signout.innerText = "Sign Out";
        signout.classList.replace("btn", "nav-link");
        signout.classList.add("btn-success");
        signout.href = "javascript:Signout()";

    }
}