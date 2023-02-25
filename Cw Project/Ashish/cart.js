let container = document.getElementById("container")
let third = document.getElementById("third")
let check = document.getElementById("check")
let Pincode = document.getElementById("Pincode")

// console.log(filter.value)
let arr = [
    {
        img : "https://n2.sdlcdn.com/imgs/k/h/1/130x152/SIPET-Blue-Rayon-Women-s-SDL126536067-1-845d5.jpeg",
        title: "SIPET - Blue Rayon Women's Flared Kurti (Pack of 1)",
        details: "Size: M | Color: Blue",
        price: 519,
        delivery: 'Standard Delivery By 27 Feb - 01 Mar',
        deliverytype: 'FREE',
    },
    {
        img : "https://n2.sdlcdn.com/imgs/k/h/s/130x152/Rangrasiya-Green-Cotton-Women-s-SDL357872626-1-0ec57.jpg",
        title: "Rangrasiya - Green Cotton Women's Flared Kurti (Pack of 1)",
        details: "Size: XXL | Color: Green",
        price: 429,
        delivery: 'Standard Delivery By 28 Feb - 02 Mar',
        deliverytype: 'FREE',
    },
    {
        img : "https://n3.sdlcdn.com/imgs/k/e/u/130x152/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
        title: "Veirdo - Green Cotton Regular Fit Men's T-Shirt (Pack of 1)",
        details: "Color: Green | Size: S",
        price: 359,
        delivery: 'Standard Delivery By 28 Feb - 02 Mar',
        deliverytype: 'FREE',
    },
    {
        img : "https://n2.sdlcdn.com/imgs/k/h/1/130x152/SIPET-Blue-Rayon-Women-s-SDL126536067-1-845d5.jpeg",
        title: "SIPET - Blue Rayon Women's Flared Kurti (Pack of 1)",
        details: "Size: M | Color: Blue",
        price: 519,
        delivery: 'Standard Delivery By 27 Feb - 01 Mar',
        deliverytype: 'FREE',
    },
    {
        img : "https://n2.sdlcdn.com/imgs/k/h/s/130x152/Rangrasiya-Green-Cotton-Women-s-SDL357872626-1-0ec57.jpg",
        title: "Rangrasiya - Green Cotton Women's Flared Kurti (Pack of 1)",
        details: "Size: XXL | Color: Green",
        price: 429,
        delivery: 'Standard Delivery By 28 Feb - 02 Mar',
        deliverytype: 'FREE',
    },
    {
        img : "https://n3.sdlcdn.com/imgs/k/e/u/130x152/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
        title: "Veirdo - Green Cotton Regular Fit Men's T-Shirt (Pack of 1)",
        details: "Color: Green | Size: S",
        price: 359,
        delivery: 'Standard Delivery By 28 Feb - 02 Mar',
        deliverytype: 'FREE',
    }
]
showitem(arr)
function showitem(array){
    let thirddiv = `
            
        ${array.map((item) => getitem(item.img,
            item.title,item.details,item.price,item.delivery,item.deliverytype)).join("")
        }
    
        `
    third.innerHTML=thirddiv
    // thirddiv;
}




function getitem(img,title,details,price,delivery,deliverytype){
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
            <p>${'Rs. ' +price}</p>
        </div>
        <div>
            <select id="filter">
                <option value=1 class="options">1</option>
                <option value=2 class="options">2</option>
                <option value=3 class="options">3</option>
            </select>
        </div>
        <div>
            <p>${delivery+ " " + deliverytype}</p>
        </div>
        <div>
            <p id="subtotal">${+price}</p>
        </div>
    </div>`
    third.innerHTML = null
    return item;    
}

let filter = document.getElementById("filter")
let subtotal = document.getElementById("subtotal")
let grandtotal = document.getElementsByClassName("grandtotal")[0]

var filtervalue ;
var subtotalvalue ;
var finalamount ;

    filter.addEventListener("change",()=>{
        filtervalue = +filter.value
        subtotalvalue = +subtotal.innerText
        finalamount = filtervalue*subtotalvalue
        console.log(finalamount)
        grandtotal.innerText[0] = "hi"
        subtotal.innerText = `Rs. ${finalamount}`
    })




// let qty = +filter.value
//     console.log(qty)
// check.addEventListener("click",()=>{
//     alert("hu")
//     Pincode.style.none = "none"

// })