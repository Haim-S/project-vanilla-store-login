
if (!localStorage.getItem("token")) {
    window.location.href = "/frontend/html/index.html";
} 

// ### not in use ####

// async function papa(){
//     let token = `Bearer ${localStorage.getItem("token")}`
//     const res = await fetch('http://localhost:3100/user/favorite/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             aunthorization: JSON.stringify(token),
//         },
//     })
//     const data = await res.json();
//     console.log(data);
// }

// papa()