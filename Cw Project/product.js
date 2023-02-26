let addBtn = document.getElementById("addBtn");
let addForm = document.getElementById("addForm");
let searchbtn = document.querySelector(".search form");


addBtn.addEventListener("click", function () {
    document.querySelector(".popup").style.display = "block";
})


document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

// for the add product form

let title = document.getElementById("title");
let category = document.getElementById("category");
let image = document.getElementById("image");
let price = document.getElementById("price");

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        title: title.value, category: category.value, image: image.value, price: price.value
    }
    async function fetchData(){
        let response = await fetch("https://63c7e48ee52516043f46bd7e.mockapi.io/product",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        });
        let data = response.json();
        console.log(data);
    }
    fetchData();
});


// menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active')
}

// get request
async function getRequest(){
    let response = await fetch(`https://63c7e48ee52516043f46bd7e.mockapi.io/product`);
    let data = await response.json();
    console.log(data);
    display(data);

    searchbtn.addEventListener("submit",(e)=>{
        e.preventDefault();
        searchData(data)
    })
}

getRequest();

// for appending the elements
async function fetchUrl(id){
    let response = await fetch(`https://63c7e48ee52516043f46bd7e.mockapi.io/product/${id}`,{
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        },
        body : null
    });
    let data = await response.json();
    console.log(data);
    // display(data);
    getRequest();
}

let tbody = document.querySelector("tbody");
function display(data){
    tbody.innerText = "";
    data.forEach((element,index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = element.title;

        let td2 = document.createElement("td");
        td2.innerText = element.price;

        let td3 = document.createElement("td");
        td3.innerText = element.id;

        let td4 = document.createElement("td");
        let del = document.createElement("button");
        del.setAttribute("id","delete")
        del.innerText = "Delete";
        del.addEventListener("click",()=>{
            fetchUrl(element.id)
        })
        td4.append(del);

        tr.append(td1,td2,td3,td4)
        tbody.append(tr);
    });
}

// js for search part
let searchValue = document.getElementById("search");
function searchData(data) {
    let filtred = data.filter((element, index) => {
        if (element.title.toLowerCase().includes(searchValue.value.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    });
    // document.querySelector(".center").style.display = "none";
    display(filtred)
}