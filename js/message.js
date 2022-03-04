//references///
let userlink = document.getElementById('userlink');
let signout = document.getElementById('signoutlink');
var currentuser = null;

//functions//
function getUsernmae() {
    let keeplogin = localStorage.getItem("keeplogin");

    if (keeplogin == "yes") {
        currentuser = JSON.parse(localStorage.getItem('name'));
    }
    else {
        currentuser = JSON.parse(sessionStorage.getItem('name'));
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
    getUsernmae();
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