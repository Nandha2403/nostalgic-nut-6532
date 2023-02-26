let Products=document.getElementById("Products");

let LSdata=JSON.parse(localStorage.getItem("cart")) || [];

async function fetchProduct(){
    try {
        let res=await fetch("https://63c7e48ee52516043f46bd7e.mockapi.io/product");
        let data=await res.json();
        Alldata=data;
        console.log(data)
        display(data)
    } catch (error) {
        console.log(error);
    }
}
fetchProduct();

let cart_count=document.getElementById("cart_count")

function display(data){
    Products.innerHTML=null;
    data.forEach((el) => {
        let div=document.createElement("div");
        let img=document.createElement("img");
        let title = document.createElement("h3")
        let ratings = document.createElement("div")
        let price = document.createElement("span")
        let offerPrice = document.createElement("span")
        let discount = document.createElement("p");

        let Btndiv=document.createElement("div")
        let AddtoCartBtn=document.createElement("button")
        let BuynowBtn=document.createElement("button")

        img.src=el.img;
        title.innerText = el.title
        ratings.classList.add("retings")
        price.innerText = "RS "+el.OriginalPrice
        price.classList.add("price")
        offerPrice.innerText ="RS "+ el.price
        offerPrice.classList.add("offerPrice")
        discount.innerText = el.offer +"%OFF"
        discount.classList.add("discount")
        AddtoCartBtn.classList.add("AddtoCart")
        BuynowBtn.classList.add("Buynow");
        AddtoCartBtn.innerText="ADD TO CART";
        BuynowBtn.innerText="BUY NOW"
        Btndiv.classList.add("Btns")
        Btndiv.append(AddtoCartBtn,BuynowBtn)

        AddtoCartBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            if(CheckCart(el.id)){
                // create and append the alert element
                const alertEl = document.createElement("div");
                alertEl.classList.add("alert");
                alertEl.textContent = "Product Already in the cart";
                document.body.appendChild(alertEl);

                // remove the alert after 1 second
                setTimeout(function() {
                alertEl.remove();
                }, 1500);

            }else{
                LSdata.push(el);
            localStorage.setItem("cart",JSON.stringify(LSdata));
            // create and append the alert element
            const alertEl = document.createElement("div");
            alertEl.classList.add("alert");
            alertEl.textContent = "Product Added to Cart";
            document.body.appendChild(alertEl);

            // remove the alert after 1 second
            setTimeout(function() {
            alertEl.remove();
            }, 2000);
            display(data)
            }
            
        })

        div.append(img , title , ratings, price , offerPrice , discount,Btndiv);
        Products.append(div)

        cart_count.innerText=LSdata.length;
    });
}

function CheckCart(id){
    for(let i=0;i<LSdata.length;i++){
        if(LSdata[i].id===id){
            return true;
        }
    }
    return false;
}

let logo=document.getElementById("logo");
logo.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./index.html"
})


let name = localStorage.getItem("userName")

if(name){
    let singin = document.querySelector(".singin>h4")
    singin.innerText=name
    let icon = document.querySelector(".singin>ion-icon")
    icon.style.display = "none"
    let div = document.querySelector(".singin")
    div.addEventListener("click" , (e)=>{
        window.location.href = "index.html"
    })
}

let cartSpan = document.querySelector(".cart span")
window.addEventListener("load" , (e)=>{
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cartSpan.innerText = cart.length
})