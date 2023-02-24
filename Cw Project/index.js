let trandingProducts = document.getElementById("trandingProducts")

let productsData = [
{img:'https://n1.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL051246309-1-51a91.jpg' , title:"Veirdo - Multicolor Cotton Regular Fit Men's T-Shirt ", price:1199,offerPrice:399 , discount:67},
{img:'https://n2.sdlcdn.com/imgs/h/9/p/large/ASIAN-Brown-Daily-Slippers-SDL287171338-4-f3709.jpg' , title:"ASIAN Brown Flip Flops Regular Fit Men's  ", price:499,offerPrice:469 , discount:6},
{img:'https://n4.sdlcdn.com/imgs/h/j/e/large/Battlestar-Tummy-Trimmer-Double-String-SDL774194847-1-45168.jpeg' , title:"Battlestar Tummy Trimmer Double String Abdominal Exercise- Black", price:1199,offerPrice:379 , discount:68},
{img:'https://n1.sdlcdn.com/imgs/i/3/9/large/DARK-ROMANCE-Faux-Leather-Beige-SDL899800683-1-500e3.jpeg' , title:"DARK ROMANCE - Beige Faux Leather Men's Zip Around Wallet", price:999,offerPrice:259 , discount:74},
{img:'https://n1.sdlcdn.com/imgs/i/z/e/large/Bentag-Vegetable-Fruit-Clever-Cutter-SDL841893040-1-ea5e3.jpg' , title:"Bentag kitchenware Vegetable & Fruit Clever Cutter Stainless Steel Vegetable Scissor", price:410,offerPrice:149 , discount:64},
{img:'https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg' , title:"Veirdo - Green Cotton Regular Fit Men's T-Shirt ( Pack of 1 )", price:1199,offerPrice:359 , discount:70},
{img:'https://n1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg' , title:"Locket With Puchmukhi Rudraksha Mala Gold-plated Brass, Wood For Men & Women", price:699,offerPrice:159 , discount:77},
{img:'https://n3.sdlcdn.com/imgs/i/u/v/large/HeelSocks1-aeb5a.jpg' , title:"Stay Healthy - Foot Protector (Free Size)", price:699,offerPrice:159 , discount:77},
{img:'https://n1.sdlcdn.com/imgs/j/r/5/large/SUNSHOPPING-Multi-PU-Formal-Belt-SDL219669793-1-21ee3.jpeg' , title:"SUNSHOPPING - Multicolor PU Men's Formal Belt ( Pack of 2 )", price:699,offerPrice:259 , discount:63},
{img:'https://n4.sdlcdn.com/imgs/i/z/e/large/Maxbell-USB-Rechargeable-Electronic-Flameless-SDL679184483-1-08e0f.jpg' , title:"Maxbell USB Rechargeable Electronic Flameless Lighter", price:899,offerPrice:179 , discount:80},
{img:'https://n1.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL051246309-1-51a91.jpg' , title:"Veirdo - Multicolor Cotton Regular Fit Men's T-Shirt ", price:1199,offerPrice:399 , discount:67}]

let startData = 0
window.addEventListener("load" , (e)=> {
    takeData(startData)
})
let left = document.querySelector(".tranding>img:nth-child(2)")
left.addEventListener("click" , (e)=> {
    e.preventDefault()
    if(startData>0){
        startData--
        takeData(startData)
    }
})

let right = document.querySelector(".tranding>img:nth-child(4)")
right.addEventListener("click" , (e)=> {
    e.preventDefault()
    if(startData<5){
        startData++
        takeData(startData)
    }
})

function takeData(start){
    let arr =[]
    for(let i=start ; i<start+6 && productsData[i]; i++){
        arr.push(productsData[i])
    }
    displayProducts(arr)
}

function displayProducts(products){
    trandingProducts.innerHTML = ""

    for(let i=0 ; i<products.length ; i++){
        let item = products[i]

        let div = document.createElement("div")

        let img = document.createElement("img")
        let title = document.createElement("h3")
        let retings = document.createElement("div")
        let price = document.createElement("span")
        let offerPrice = document.createElement("span")
        let discount = document.createElement("p")


        img.setAttribute("src" , item.img)
        title.innerText = item.title
        retings.classList.add("retings")
        price.innerText = "RS "+item.price
        price.classList.add("price")
        offerPrice.innerText ="RS "+ item.offerPrice
        offerPrice.classList.add("offerPrice")
        discount.innerText = item.discount +"%OFF"
        discount.classList.add("discount")


        div.append(img , title , retings, price , offerPrice , discount)
        trandingProducts.append(div)

    }
}


let topProducts = document.getElementById("topProducts")
let topProduct = [
    {img:'https://n3.sdlcdn.com/imgs/k/k/1/large/Asian-Shoes-White-Men-s-SDL280193320-1-ca3ad.jpeg' , title:"ASIAN - White Men's Sports Running Shoes", price:699,offerPrice:549 , discount:21},
    {img:'https://n1.sdlcdn.com/imgs/b/w/i/large/Rigo-Navy-Round-T-Shirt-SDL252591801-1-f1560.jpg' , title:"Rigo - Blue Cotton Regular Fit Men's T-Shirt ( Pack of 1 )", price:799,offerPrice:319 , discount:60},
    {img:'https://n4.sdlcdn.com/imgs/h/j/e/large/Battlestar-Tummy-Trimmer-Double-String-SDL774194847-1-45168.jpeg' , title:"Urbano Fashion - Black Cotton Blend Slim Fit Men's Jeans", price:1399,offerPrice:725 , discount:48},
    {img:'https://n2.sdlcdn.com/imgs/i/2/b/large/ASIAN-Gray-Running-Shoes-SDL688623764-1-4f95f.jpeg' , title:"ASIAN Grey Men's Sports Running Shoes", price:699,offerPrice:539 , discount:23},
    {img:'https://n1.sdlcdn.com/imgs/i/3/9/large/DARK-ROMANCE-Faux-Leather-Beige-SDL899800683-1-500e3.jpeg' , title:"Veirdo - Multicolor Cotton Regular Fit Men's T-Shirt ", price:699,offerPrice:159 , discount:77}
    ]

window.addEventListener("load" , (e) => {
    displayTopProducts(topProduct)
})
function displayTopProducts(products){
    topProducts.innerHTML = ""

    for(let i=0 ; i<products.length ; i++){
        let item = products[i]

        let div = document.createElement("div")

        let img = document.createElement("img")
        let title = document.createElement("h3")
        let retings = document.createElement("div")
        let price = document.createElement("span")
        let offerPrice = document.createElement("span")
        let discount = document.createElement("p")


        img.setAttribute("src" , item.img)
        title.innerText = item.title
        retings.classList.add("retings")
        price.innerText = "RS "+item.price
        price.classList.add("price")
        offerPrice.innerText ="RS "+ item.offerPrice
        offerPrice.classList.add("offerPrice")
        discount.innerText = item.discount +"%OFF"
        discount.classList.add("discount")


        div.append(img , title , retings, price , offerPrice , discount)
        topProducts.append(div)
    }
}


let Slideimg=
[
"https://n4.sdlcdn.com/imgs/k/k/z/web_banner_07-092e2.jpg",
"https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg",
"https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg",
"https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpg",
"https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg"
]

SlideShowAds(Slideimg)

function SlideShowAds(Slideimg){
    let c=0;
    let slideShow=document.getElementById("slideShowImage");
    let img=document.createElement("img");

    setInterval(()=>{
        if(c==Slideimg.length){
            c=0;
        }
        img.src=Slideimg[c];
        slideShow.append(img)
        c++;
    },4000)
}

let RecentlyCards=document.getElementById("RecentlyCards")

let RecentProductsArr = [
    {img:'https://n3.sdlcdn.com/imgs/k/k/1/large/Asian-Shoes-White-Men-s-SDL280193320-1-ca3ad.jpeg' , title:"ASIAN - White Men's Sports Running Shoes", price:699,offerPrice:549 , discount:21},
    {img:'https://n1.sdlcdn.com/imgs/b/w/i/large/Rigo-Navy-Round-T-Shirt-SDL252591801-1-f1560.jpg' , title:"Rigo - Blue Cotton Regular Fit Men's T-Shirt ( Pack of 1 )", price:799,offerPrice:319 , discount:60},
    {img:'https://n2.sdlcdn.com/imgs/i/2/b/large/ASIAN-Gray-Running-Shoes-SDL688623764-1-4f95f.jpeg' , title:"ASIAN Grey Men's Sports Running Shoes", price:699,offerPrice:539 , discount:23},
    {img:'https://n1.sdlcdn.com/imgs/i/3/9/large/DARK-ROMANCE-Faux-Leather-Beige-SDL899800683-1-500e3.jpeg' , title:"Veirdo - Multicolor Cotton Regular Fit Men's T-Shirt ", price:699,offerPrice:159 , discount:77}
    ]
    
    RecentProducts(RecentProductsArr)
    function RecentProducts(RecentProductsArr){
        RecentlyCards.innerHTML = ""
    
        for(let i=0 ; i<RecentProductsArr.length ; i++){
            let item = RecentProductsArr[i]
    
            let div = document.createElement("div")
    
            let img = document.createElement("img")
            let title = document.createElement("h3")
            let retings = document.createElement("div")
            let price = document.createElement("span")
            let offerPrice = document.createElement("span")
            let discount = document.createElement("p")
    
    
            img.setAttribute("src" , item.img)
            title.innerText = item.title
            retings.classList.add("retings")
            price.innerText = "RS "+item.price
            price.classList.add("price")
            offerPrice.innerText ="RS "+ item.offerPrice
            offerPrice.classList.add("offerPrice")
            discount.innerText = item.discount +"%OFF"
            discount.classList.add("discount")
    
    
            div.append(img , title , retings, price , offerPrice , discount)
            RecentlyCards.append(div)
        }
    }