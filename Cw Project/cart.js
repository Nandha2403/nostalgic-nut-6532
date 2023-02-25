let container = document.getElementById("container")
let third = document.getElementById("third")
// let check = document.getElementById("check")
// let pincode = document.getElementById("pincode")
// let showpin = document.getElementById("showpin")

let arr = [
    {
        img : "https://n2.sdlcdn.com/imgs/k/h/1/130x152/SIPET-Blue-Rayon-Women-s-SDL126536067-1-845d5.jpeg",
        title: "SIPET - Blue Rayon Women's Flared Kurti (Pack of 1)",
        details: "Size: M | Color: Blue",
        price: 519,
        delivery: 'Standard Delivery By 27 Feb - 01 Mar',
        deliverytype: 'FREE',
        id: 1
    },
    {
        img : "https://n2.sdlcdn.com/imgs/k/h/s/130x152/Rangrasiya-Green-Cotton-Women-s-SDL357872626-1-0ec57.jpg",
        title: "Rangrasiya - Green Cotton Women's Flared Kurti (Pack of 1)",
        details: "Size: XXL | Color: Green",
        price: 429,
        delivery: 'Standard Delivery By 28 Feb - 02 Mar',
        deliverytype: 'FREE',
        id: 2
    }
]
showitem(arr)

function showitem(array){
    let thirddiv = `
        ${array.map((item) => getitem(item.img,
            item.title,item.details,item.price,item.delivery,item.deliverytype,item.id)).join("")
        }
        `
    third.innerHTML=thirddiv
    // thirddiv;
}




function getitem(img,title,details,price,delivery,deliverytype,id){
    let item = `
    <div id="third_child">
        <div id="details">
            <div>
                <img src="${img}">
            </div>
            <div>
                <p>${title}</p>
                <p>${details}</p>
            </div>
        </div>
        <div>
        <p>Rs. </p><p id="price">${+price}</p>
        </div>
        <div>
            <select class="filter">
                <option value=1 class="options">1</option>
                <option value=2 class="options">2</option>
                <option value=3 class="options">3</option>
            </select>
        </div>
        <div>
            <p>${delivery}<span class="free">FREE</span></p>
        </div>
        <div>
        <p>Rs. </p><p id="totalpriceofproduct">${+price}</p>
        </div>
        <div>
        <button id="remove" onclick="removeitem(${id})">Remove</button></div>
    </div>
    </div>
    
    `

    third.innerHTML = null
    return item;    
}
let remove = document.getElementById("remove")
let grandtotal = document.getElementById("grandtotal")
// grandtotal.innerText = price.value   
let p ; 
// for(let i of arr){
//     p += i.
// }

var finalamount ;
var overall ; 

let filter = document.getElementsByClassName("filter")
let price = document.getElementById("price")
let totalpriceofproduct = document.getElementById("totalpriceofproduct")


for(let i=0; i<filter.length; i++){
    let itemvalue = filter[i]
        itemvalue.addEventListener("change",(e)=>{
        console.log(+e.target.value)

        // for(let j=0; j<price.length; j++){
        //     let product = price[j]
        //     console.log(+price[j].innerText)
        //     product.addEventListener("click",(p)=>{
        //     })

        totalpriceofproduct.innerText = +e.target.value*+price.innerText
        grandtotal.innerText = +e.target.value*+price.innerText   

    })
}


function removeitem(id){
    arr.forEach((element,i)=>{
        if(element.id == id){
            let removed = arr.splice(i,1)
            console.log("remove")

            showitem(arr)
            // delete arr.element

        //     return true
        //     console.log("rem")
        // } else {
        //     return false
        }
    })
}

let payment = document.getElementById("payment")
payment.addEventListener("click",()=>{
    alert("Order placed with loved 🤎🤍💚")
    window.location='index.html'
}) 

    // check.addEventListener("click",()=>{
    //     pincode.style.display = "none"
    //     showpin.style.display = "flex"
    //     showpin.innerText = pincode.value
    // })  