const tabFavorite = document.querySelector("[data-table-favorite]");
const papa = document.querySelector("#papa");

// logout

const logoutFormEl = document.querySelector("[data-logout-form]");

// login

const Mark_if_connected_or_disconnected = document.querySelector("#Mark_if_connected_or_disconnected");
const paragraph_ok = document.querySelector("#paragraph_ok");


// // msg
const NotFound = document.querySelector("#NotFound");

// url

const END_PAINT_FAVORITE = "http://localhost:3100/user/favorite";

const END_PAINT_USER = "http://localhost:3100/user/";



function showMsg(token, user) {
    if (token) {
        Mark_if_connected_or_disconnected.style.background = "#218c74";
        paragraph_ok.innerHTML = user.data.name.charAt(0);

    } else {
        Mark_if_connected_or_disconnected.style.background = "#aab7bb";
    }

}




function user() {

    const body = {
        id: localStorage.getItem("id")
    }
    fetch(END_PAINT_FAVORITE, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((oneuser) => renderFavorite(oneuser))
}



function deleteOnefavor(_id) {
    const body = {
        id: _id,
    }

    fetch(END_PAINT_USER + `/delete/${localStorage.getItem("id")}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((shoe) => {
            user(), console.log(shoe)
        });
   
}


logoutFormEl.addEventListener("submit", async (e) => {


    const res = await fetch(END_PAINT_USER + "/logout", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        }
    })
    const data = await res.json();
    localStorage.setItem("id", data.newUser);
    localStorage.setItem("token", data.token);
    localStorage.setItem("name", data.name);
    e.preventDefault();
    window.location.href = "/frontend/html/index.html"
})



function renderFavorite(oneuser) {
    if (!oneuser.data.shoe.length) {
        NotFound.style.display = "flex";
    }
    const ShoeElemnt = oneuser.data.shoe.map(
        (user) => `
        <div class="col">
         <div class="border p-3">
                    <table class="table table-striped table-hover table-borderless" style="width:100%">
                        <thead>
                         <tr>  
                            <tr>
                                <th>name: ${user.name}</th>
                            <tr>
                                <th>price: ${user.price}</th>
                            </tr>
                                    <img style = "width: 80% ;"
                                    src = "${user.img}"
                                    alt = ""
                                    srcset = "">
                            </tr>
                            <td><button class="btn btn-danger" <span onclick="deleteOnefavor('${user._id}')">X</span></button></td>
                            
                </table>
            </div>
        </div>
        
    `
    )
    showMsg(localStorage.getItem("token"), oneuser);
    tabFavorite.innerHTML = ShoeElemnt.join("");

}



window.addEventListener("DOMContentLoaded", user());