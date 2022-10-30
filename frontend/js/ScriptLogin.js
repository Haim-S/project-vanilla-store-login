// container the login and the registration

const container_login = document.querySelector(".container_login");

// everything for login
const loginFormEl = document.querySelector("[data-login-form]");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameInput = document.getElementById("name");
const ImgShowPassWord = document.getElementById("eye");
const BtnLogin = document.querySelector(".BtnLogin");

// everything for Register
const OnRegisterCheckbox = document.querySelector("[data-OnRegister-Checkbox]");
const register = document.querySelector(".register");
const RegisterFormEl = document.querySelector("[data-register-form]");


// logout

const logoutFormEl = document.querySelector("[data-logout-form]");

// messages
const Mark_if_connected_or_disconnected = document.querySelector("#Mark_if_connected_or_disconnected");
// const MsgOk = document.querySelector("#msg_ok");
const MsgAttention = document.querySelector("#msg_attention");
const MsgSomethingWrong = document.querySelector("#msg_SomethingWrong");
const MsgError = document.querySelector("#msg_Error");

// paragraph_messages
const paragraph_attention = document.querySelector("#paragraph_attention");
const paragraph_ok = document.querySelector("#paragraph_ok");
const paragraph_SomethingWrong = document.querySelector("#paragraph_SomethingWrong");
const paragraph_error = document.querySelector("#paragraph_error");


//everything for Adim

let AdminPanel = tabSheos.getElementsByClassName("admin");




const END_PAINT_USER = "http://localhost:3100/user/";


function showRegister() {
    if (OnRegisterCheckbox.checked) {
        register.style.display = "flex";
        BtnLogin.style.display = "none";
    } else {
        register.style.display = "none";
        BtnLogin.style.display = "flex";
    }
};


function showMsg(data) {
    if (data.token) {
        Mark_if_connected_or_disconnected.style.background = "#218c74";
        paragraph_ok.innerHTML = data.name.charAt(0);
        container_login.style.display = "none";
        if (data.msg) {
            MsgAttention.style.display = "flex";
            setTimeout(() => MsgAttention.style.display = "none", 7000);
            paragraph_attention.innerHTML = data.msg;
        }
    }
    if (data.msg) {
        MsgAttention.style.display = "flex";
        setTimeout(() => MsgAttention.style.display = "none", 7000);
        paragraph_attention.innerHTML = data.msg;
    }
    if (data.error) {
        MsgError.style.display = "flex";
        paragraph_error.innerHTML = data.error;
    } else {
        MsgError.style.display = "none";
    }
}


function showPassWord() {
    if (passwordInput.type == "password") {
        passwordInput.type = "text"
        ImgShowPassWord.src = "https://i.stack.imgur.com/waw4z.png";
    } else {
        passwordInput.type = "password";
        ImgShowPassWord.src = "https://i.stack.imgur.com/Oyk1g.png";
    }
}




function AdminControlPanel() {
    if (localStorage.getItem("name") === "Admin") {
        for (let i = 0; i < AdminPanel.length; i++) {
            AdminPanel[i].style.display = "flex";
        }
        btnCreateShoe.style.display = "flex";
    } else {
        for (let i = 0; i < AdminPanel.length; i++) {
            AdminPanel[i].style.display = "none";
        }
        btnCreateShoe.style.display = "none";
    }
}



function LocalStorage(data) {
if(data.token === undefined){
    localStorage.clear()
}else{
 localStorage.setItem("id", data.newUser);
 localStorage.setItem("token", data.token);
 localStorage.setItem("name", data.name);
}
   
}



RegisterFormEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    const body = {
        email: emailInput.value,
        password: passwordInput.value,
        name: nameInput.value,

    }

    const res = await fetch(END_PAINT_USER + `register/`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await res.json();
    showMsg(data);
    LocalStorage(data);
    AdminControlPanel()

});



loginFormEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    const body = {
        email: emailInput.value,
        password: passwordInput.value,
    }

    const res = await fetch(END_PAINT_USER + "/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(body),
    })
    const data = await res.json();
    showMsg(data);
    LocalStorage(data);
    AdminControlPanel()

});


logoutFormEl.addEventListener("submit", async (e) => {


    const res = await fetch(END_PAINT_USER + "/logout", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        }
    })
    const data = await res.json();
    showMsg(data);
    localStorage.clear()
    e.preventDefault();

})

OnRegisterCheckbox.onchange = showRegister;

window.addEventListener("DOMContentLoaded", AdminControlPanel(), showMsg(JSON.parse(JSON.stringify(localStorage))));