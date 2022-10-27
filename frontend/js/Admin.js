// everything for create
const ShoeCreateName = document.querySelector(" [data-ShoeCreate-name]");
const ShoeCreatePrice = document.querySelector("[data-ShoeCreate-price]");
const ShoeCreateType = document.querySelector("[data-ShoeCreate-type]");
const ShoeCreateManufacturer = document.querySelector("[data-ShoeCreate-manufacturer]");

const ShoeCreateModal = document.querySelector("[data-create-shoe]");
const ShoeCreateFormEl = document.querySelector("#ShoeCreateFormEl");
const ShoeBtnCancel = document.querySelector("[data-btn-ShoeCancel]");

const btnCreateShoe = document.getElementById("btnCreateShoe");


// everything for Edit
const ShoeInputName = document.querySelector("[data-inputShoe-name]");
const ShoeInputPrice = document.querySelector("[data-inputShoe-price]");
const ShoeInputManufacturer = document.querySelector("[data-inputShoe-manufacturer]");
const ShoeEditFormEl = document.querySelector("#EditFormElShoe");
const ShoeEditModal = document.querySelector("[data-editShoe-modal]")

// let ShoeUpDataId;

function showModalShoeEdit(id, name, price, manufacturer) {
    localStorage.setItem("Edit_id", id);
    ShoeInputName.value = name;
    ShoeInputPrice.value = price;
    ShoeInputManufacturer.value = manufacturer;
    ShoeEditModal.style.display = "flex";

}





function showCreateModal() {
    ShoeCreateModal.style.display = "flex";
}

function deleteOne(id) {
    fetch(END_POINT + `delete/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((shoe) => {
            renderShoes(shoe)
            AdminControlPanel()
        })
}


ShoeEditFormEl.onsubmit =  (e) => {
    e.preventDefault();

    const body = {
        name: ShoeInputName.value,
        price: ShoeInputPrice.value,
        manufacturer: ShoeInputManufacturer.value
    };

    console.log(body);

   fetch(END_POINT + `update/${ localStorage.getItem("Edit_id")}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((Shoes) => {
            renderShoes(Shoes)
            AdminControlPanel()
        });


    ShoeEditModal.style.display = "none";

}


ShoeCreateFormEl.onsubmit = (e) => {
    e.preventDefault();

    const body = {
        name: ShoeCreateName.value,
        price: ShoeCreatePrice.value,
        type: ShoeCreateType.value,
        manufacturer: ShoeCreateManufacturer.value,
    }

    fetch(END_POINT + "create", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        })

        .then((res) => res.json())
        .then((Shoes) => {
            renderShoes(Shoes)
            AdminControlPanel()
        });

    ShoeCreateModal.style.display = "none";

}


window.addEventListener("DOMContentLoaded", getAll(), btnCreateShoe.addEventListener("click", showCreateModal, getAll), ShoeBtnCancel.addEventListener("click", () => {
    ShoeCreateModal.style.display = "none"
}));