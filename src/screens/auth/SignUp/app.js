import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyDYQiCI3ukbELZA6DOHdeLpW9ndcLxNyzQ",
    authDomain: "first-product-9b054.firebaseapp.com",
    databaseURL: "https://first-product-9b054-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "first-product-9b054",
    storageBucket: "first-product-9b054.appspot.com",
    messagingSenderId: "370706587932",
    appId: "1:370706587932:web:db311e2572a970e7d49ad9",
    measurementId: "G-XW09JXRKZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

const First = document.getElementById("first")
const Last = document.getElementById("last")
const Mail = document.getElementById("mail")
const Pass = document.getElementById("password")
const ConPass = document.getElementById("con-password")
const EyePos = document.getElementById("eyes")
const ConEyePos = document.getElementById("coneyes")
const ButtonLogin = document.getElementById("b_submit")


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

function ShowConPass(){
    const InputType = document.querySelector("#con-pass");
    const Eye = document.querySelector("#coneyes");

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

ConEyePos.addEventListener('click', ShowConPass)
EyePos.addEventListener('click', ShowPass)

function check(){
    let FirstName = document.getElementById("firstname").value;
    let LastName = document.getElementById("lastname").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("pass").value;
    let ConPassword = document.getElementById("con-pass").value;
    let ErrorText = ""

    if(FirstName == ''){
        ErrorText = "Missing Input"
        First.innerHTML = ErrorText
        EyePos.style.top = '59.7%'
        ConEyePos.style.top = '70.3%'
        return
    }else{
        First.innerHTML = ''
        EyePos.style.top = '57%'
        ConEyePos.style.top = '67.5%%'
    }

    if(LastName == ''){
        ErrorText = `Missing Input`
        Last.innerHTML = ErrorText
        EyePos.style.top = '59.7%'
        ConEyePos.style.top = '70.3%'
        return
    }else{
        Last.innerHTML = ''
        EyePos.style.top = '57%'
        ConEyePos.style.top = '67.5%'
    }

    if(Email == ''){
        ErrorText = `Missing Input`
        Mail.innerHTML = ErrorText
        EyePos.style.top = '59.7%'
        ConEyePos.style.top = '70.3%'
        return
    }else{
        Mail.innerHTML = ''
        EyePos.style.top = '57%'
        ConEyePos.style.top = '67.5%'
    }

    if(Password == ''){
        ErrorText = `Missing Input`
        Pass.innerHTML = ErrorText
        ConEyePos.style.top = '70.3%'
        return
    }else{
        Pass.innerHTML = ''
        ConEyePos.style.top = '67.5%'
    }
    
    if(ConPassword == ''){
        ErrorText = 'Missing Input'
        ConPass.innerHTML = ErrorText
        return
    }else{
        ConPass.innerHTML = ''
    }

    if(Password != ConPassword){
        ErrorText = `Password confirmation failed, please type again`
        ConPass.innerHTML = ErrorText
        return
    }else{
        Pass.innerHTML = ''
    }

    createUserWithEmailAndPassword(auth, Email, Password)
    .then((success) => {
        const user = success.user
        console.log(user.uid)
        
        set(ref(database, 'CheckPoint2users/' + user.uid), {
            Firstname: FirstName, 
            Lastname: LastName,
            email: Email
        })

        alert("Register Successful")
    })

    .catch((error) => {
      console.log(error);
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

ButtonLogin.addEventListener('click', check)