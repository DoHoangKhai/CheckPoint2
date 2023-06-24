
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getDatabase, set, ref, get, child, remove} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
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

const itemsRef = ref(database);

get(child(itemsRef, 'NewAdvisor/' + "Luxa")).then((snapshot) => {
    if(snapshot.exists()){
        let baseRow = ``
        baseRow = `
        <tr class="worker">
            <th><input type="checkbox" name="" id=""></th>
            <th>${snapshot.val().id}</th>
            <th>${snapshot.val().advisor_name}</th>
            <th>${snapshot.val().email}</th>
            <th>${snapshot.val().company}</th>
            <th>${snapshot.val().role}</th>
            <th>${snapshot.val().fluffle}</th>
            <th>${snapshot.val().customer}</th>
            <th>${snapshot.val().wallet} <img src="../../../assets/icon/Carrot.svg" alt=""></th>
            <th>
                <img src="../../../assets/icon/Eye.svg" onclick="detail()" style="cursor: pointer;" alt="">
                <img src="../../../assets/icon/edit.svg" alt="">
                <img src="../../../assets/icon/icontrash.svg" alt="">
            </th>
        </tr>
    `

    AdvisorTable.innerHTML += baseRow
    }
})

const AddButton = document.getElementById("Add_Admin")
const AdvisorTable = document.getElementById("table-advisor")
const CheckBox = document.getElementsByClassName("check-box")
const ButtonDelete = document.getElementById("Delete_Admin")


const Advisor = [
    {
        id: 1,
        name: 'John Smith',
        email: 'john@smith.com',
        company: 'Labbit Pte Ltd',
        role: 'Director',
        fluffle: 'Bishan Fluffle',
        customer: 222,
        wallet: 250
    },
    {
        id: 2,
        name: 'Deal Name',
        email: 'Email',
        company: 'Labbit Inc.',
        role: 'Manager',
        fluffle: 'Bishan Fluffle',
        customer: 312,
        wallet: 250
    },
    {
        id: 3,
        name: 'Quiz Name',
        email: 'Email',
        company: 'Fluffle Inc.',
        role: 'Director',
        fluffle: 'Bishan Fluffle',
        customer: 214,
        wallet: 100
    },
]

Advisor.forEach(item => {
    let Row = ``;
    
    Row = `
        <tr class="worker">
            <th><input type="checkbox" name="" id="${item.id}"></th>
            <th>${item.id}</th>
            <th>${item.name}</th>
            <th>${item.email}</th>
            <th>${item.company}</th>
            <th>${item.role}</th>
            <th>${item.fluffle}</th>
            <th>${item.customer}</th>
            <th>${item.wallet} <img src="../../../assets/icon/Carrot.svg" alt=""></th>
            <th>
                <img src="../../../assets/icon/Eye.svg" onclick="detail()" style="cursor: pointer;" alt="">
                <img src="../../../assets/icon/edit.svg" alt="">
                <img src="../../../assets/icon/icontrash.svg" alt="">
            </th>
        </tr>
    `
    if(item.id % 2 == 0){
        Row = `
        <tr class="worker" style="background: #f1f1f1">
            <th><input type="checkbox"></th>
            <th>${item.id}</th>
            <th>${item.name}</th>
            <th>${item.email}</th>
            <th>${item.company}</th>
            <th>${item.role}</th>
            <th>${item.fluffle}</th>
            <th>${item.customer}</th>
            <th>${item.wallet} <img src="../../../assets/icon/Carrot.svg" alt=""></th>
            <th>
                <img src="../../../assets/icon/Eye.svg" onclick="detail()" style="cursor: pointer;" alt="">
                <img src="../../../assets/icon/edit.svg" alt="">
                <img src="../../../assets/icon/icontrash.svg" alt="">
            </th>
        </tr>
    `
    }

    AdvisorTable.innerHTML += Row
})

function detail(){
    location.replace('../AdvisorDetail/index.html')
}

function AddAdvisor(){
    const N_ID = document.getElementById("NewID").value
    const N_Name = document.getElementById("NewName").value
    const N_Email = document.getElementById("NewEmail").value
    const N_Company = document.getElementById("NewCompany").value
    const N_Role = document.getElementById("NewRole").value
    const N_Fluffle = document.getElementById("NewFluffle").value
    const N_Customer = document.getElementById("NewCustomer").value
    const N_Wallet = document.getElementById("NewWallet").value
    let random_ID = Math.floor(Math.random()*1000000)
    let newRow = ``

    if(N_ID == ''){
        alert("ID must not be left empty")
        return
    }

    if(N_Name == ''){
        alert("Advisor name must not be left empty")
        return
    }

    if(/\s/.test(N_Email) == true || /^.*@gmail.com$/.test(N_Email) == false){
        alert("Email in the wrong format")
        return
    }

    if(N_Company == ''){
        alert("Company name must not be left empty")
        return
    }

    if(N_Fluffle == ''){
        alert("Fluffle name must not be left empty")
        return
    }

    if(N_Customer == ''){
        alert("Customer must not be left empty")
        return
    }

    if(N_Wallet == ''){
        alert("Wallet must not be left empty")
        return
    }

    newRow = `
    <tr class="worker">
        <th><input type="checkbox"></th>
        <th>${N_ID}</th>
        <th>${N_Name}</th>
        <th>${N_Email}</th>
        <th>${N_Company}</th>
        <th>${N_Role}</th>
        <th>${N_Fluffle}</th>
        <th>${N_Customer}</th>
        <th>${N_Wallet} <img src="../../../assets/icon/Carrot.svg" alt=""></th>
        <th>
            <img src="../../../assets/icon/Eye.svg" onclick="detail()" style="cursor: pointer;" alt="">
            <img src="../../../assets/icon/edit.svg" alt="">
            <img src="../../../assets/icon/icontrash.svg" alt="">
        </th>
    </tr>
    `

    AdvisorTable.innerHTML += newRow

    set(ref(database, 'NewAdvisor/' + N_Name), {
        id: N_ID,
        advisor_name: N_Name,
        email: N_Email,
        company: N_Company,
        role: N_Role,
        fluffle: N_Fluffle,
        customer: N_Customer,
        wallet: N_Wallet
    })

    alert("function Works")
}

function removed(){
    var username = document.getElementById("remove_advisor").value

    remove(ref(database, 'NewAdvisor/' + username))
    .then(() => {
        alert("delete successfully")
    })
    .catch((error) => {
        alert("Unsuccessful, error: " + error)
    })

 

}

AddButton.addEventListener('click', AddAdvisor)
ButtonDelete.addEventListener('click', removed)