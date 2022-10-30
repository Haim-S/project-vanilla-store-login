const tabSheos = document.querySelector("[data-tata-sheos]");


const END_POINT = "http://localhost:3100/shoe/";
const END_PAINT_b = "http://localhost:3100/user/";




function getAll() {
    fetch(END_POINT)
        .then((res) => res.json())
        .then((Shoes)=> {
            renderShoes(Shoes)
            AdminControlPanel()
        })
}


function SaveShoe(_id) {
    const body = {
        id: _id,
    }
   
    fetch(END_PAINT_b + `/up/${localStorage.getItem("id")}`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((Shoes) => renderShoes(Shoes));

}


 function renderShoes(Shoes) {

    const SuitsElemnt = Shoes.data.map(
        (shoe) => `
        <div class="col">
         <div class="border p-3">
                    <table class="table table-striped table-hover table-borderless" style="width:100%">
                        <thead>
                         <tr>  
                            <tr>
                                <th>name: ${shoe.name}</th>
                            <tr>
                                <th>price: ${shoe.price}</th>
                            </tr>
                                    <img style = "width: 80% ;"
                                    src = "${shoe.img}"
                                    alt = ""
                                    srcset = "">
                            </tr>
                            
                            <tr class="admin">
                    
                            <td><button class="btn btn-danger" <span onclick="deleteOne('${shoe._id}')">X</span></button>
                            
                            <td><button  class="btn btn-secondary" onclick="showModalShoeEdit('${shoe._id}', '${shoe.name}', '${shoe.price}', '${shoe.manufacturer}')">Edit</button></td>
                             </div>
                    </tr>
                      <tr>
                     <th><button type="button" class="btn btn-dark" onclick="SaveShoe('${shoe._id}')">save</button></th>
                      </tr>
                </table>
            </div>
        </div>
       
       
    `
    )

    tabSheos.innerHTML = SuitsElemnt.join("");

}



window.addEventListener("DOMContentLoaded", getAll());