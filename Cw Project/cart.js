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
        id: 1
    },
    {
        img : "https://n2.sdlcdn.com/imgs/k/h/s/130x152/Rangrasiya-Green-Cotton-Women-s-SDL357872626-1-0ec57.jpg",
        title: "Rangrasiya - Green Cotton Women's Flared Kurti (Pack of 1)",
        details: "Size: XXL | Color: Green",
        price: 429,
        delivery: 'Standard Delivery By 28 Feb - 02 Mar',
        id: 2
    }
]
let LSdata=JSON.parse(localStorage.getItem("cart")) || [];

console.log(LSdata)
showitem(LSdata)

function showitem(array){
    let thirddiv = `
        ${array.map((item) => getitem(item.img,
            item.title,item.details,item.price,item.ratings,item.id)).join("")
        }
        `
    third.innerHTML=thirddiv
    // thirddiv;
}




function getitem(img,title,details,price,ratings,id){
    let item = `
    <div id="third_child">
        <div id="details">
            <div>
                <img src="${img}">
            </div>
            <div>
                <p>${title}</p>
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
            <p>${ratings+" "}<span class="free">FREE</span></p>
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
window.addEventListener("load",()=>{
    let p = 0;
    for(let i of LSdata){
        p += +i.price
    }
    console.log(p)
    grandtotal.innerText = p
})


let p = 0; 
for(let i of LSdata){
    p += +i.price
}
console.log(p)
// grandtotal.innerText = +e.target.value*+price.innerText   


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
                    let p = 0; 
            for(let i of LSdata){
                p += +i.price
            }
            console.log(p)
            grandtotal.innerText = p* +e.target.value  
        
    })
}


function removeitem(id){
    // LSdata.forEach((element,i)=>{
    //     if(element.id == id){
    //         let removed = LSdata.splice(i,1)
    //         console.log("remove")
    //         showitem(LSdata)
    let deleted = LSdata.filter((el,i)=>{
        if(el.id == id){
            return false
        } else {
            return true
        }
    })
    localStorage.setItem("cart",JSON.stringify(deleted))
    showitem(deleted)
    window.location.reload();
}

let payment = document.getElementById("payment")
payment.addEventListener("click",()=>{
    alert("Order placed with loved ????????????")
    window.location='index.html'
}) 

    // check.addEventListener("click",()=>{
    //     pincode.style.display = "none"
    //     showpin.style.display = "flex"
    //     showpin.innerText = pincode.value
    // })  