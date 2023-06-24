import { getDatabase, update, ref } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDYQiCI3ukbELZA6DOHdeLpW9ndcLxNyzQ",
    authDomain: "first-product-9b054.firebaseapp.com",
    projectId: "first-product-9b054",
    storageBucket: "first-product-9b054.appspot.com",
    messagingSenderId: "370706587932",
    appId: "1:370706587932:web:db311e2572a970e7d49ad9",
    measurementId: "G-XW09JXRKZL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const MailBox = document.getElementById("email-text")
const PassBox = document.getElementById("pass-text")
const EyePos = document.getElementById("eyes")
const ButtonLogin = document.getElementById("b_login")

function ShowPass(){
    const InputType = document.querySelector("#pass");
    const Eye = document.querySelector("#eyes");

    const eyeclose = document.createElement("img");
    eyeclose.src = "../../../../assets/icon/Line\ 130.svg";

    if(InputType.getAttribute("type") == "password"){
        InputType.setAttribute("type", "text");
        Eye.appendChild(eyeclose);
    }else{
        InputType.setAttribute("type", "password");
        Eye.innerHTML = ' '
    }
}

function check(){
    let Mail = document.getElementById("email").value;
    let Pass = document.getElementById("pass").value;

    signInWithEmailAndPassword(auth, Mail, Pass)
  .then((userCredential) => {
    const user = userCredential.user;
    
    const dt = new Date()
    update(ref(database, 'users/' + user.uid), {
      last_login : dt,
    })

    alert("User Loged in")

    location.replace('../../Home/index.html')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });

    location.replace("../../Home/index.html")
}

ButtonLogin.addEventListener('click', check)