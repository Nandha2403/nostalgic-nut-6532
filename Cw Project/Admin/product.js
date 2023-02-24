let addBtn = document.getElementById("addBtn");
let addForm = document.getElementById("addForm");

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
                ContentType : "application/json"
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