// Display Name
let name = localStorage.getItem("userName")

if(name){
    let singin = document.querySelector(".singin>h4")
    singin.innerText=name
    let icon = document.querySelector(".singin>ion-icon")
    icon.style.display = "none"
};

let Products=document.getElementById("Products");

let LSdata=JSON.parse(localStorage.getItem("cart")) || [];

let Alldata;

async function fetchProduct(){
    try {
        let res=await fetch(`https://63c7e48ee52516043f46bd7e.mockapi.io/product`);
        let data=await res.json();
        let total=data.length;
        let pages=Math.ceil(total/10);
        console.log(pages);
        Alldata=data;
        PaginationBtns(pages)
        Default(data)
        // display(data)
     
        console.log(data);
      } catch (error) {
        // alert("Failed")
        console.log(error);
      }
};

window.addEventListener("load",()=>{
    fetchProduct();
  })

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
        BuynowBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            window.location.href="./address.html"
        })

        AddtoCartBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            if(CheckCart(el.id)){
                const alertEl = document.createElement("div");
                alertEl.classList.add("alert");
                alertEl.textContent = "Product Already in the cart";
                document.body.appendChild(alertEl);
                setTimeout(function() {
                    alertEl.remove(); 
                }, 1500);
            }else{
                LSdata.push(el);
            localStorage.setItem("cart",JSON.stringify(LSdata));
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

// inputBox Code
let inputbox=document.getElementById("inputbox");
let searchBtn=document.getElementById("search")
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let filteredData=Alldata.filter((el)=>{
        let inputboxValue=inputbox.value
        if(el.title.toUpperCase().includes(inputboxValue.toUpperCase())==true){
            return true;
        }
        return false;
        
    })
    display(filteredData)
})

// All filtering code starts Here

let PricearangeBtn=document.getElementById("PricearangeBtn");

let fromValue=document.getElementById("from");
let ToValue=document.getElementById("To");

PricearangeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let filtered=Alldata.filter((el)=>{
        if(Number(el.price)>=fromValue.value && Number(el.price)<=ToValue.value){
            return true;
        }
        return false;
    });
    display(filtered);
})


let Sort=document.getElementById("Sort");
Sort.addEventListener("change",async()=>{
    if(Sort.value=="PriceLowtoHigh"){
        let sorted=Alldata.sort(function(a,b){
            return a.price-b.price;
        })
        display(sorted)
    }else if(Sort.value=="PriceHightoLow"){
        let sorted=Alldata.sort(function(a,b){
            return b.price-a.price;
        })
        display(sorted)
    }else if(Sort.value=="Relevance"){
        fetchProduct();
    }
})


let men=document.getElementById("men");
men.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="Mens"){
            return true
        }
        return false;
    })
    display(filtered);
})
let women=document.getElementById("women");
women.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="Womenswear"){
            return true
        }
        return false;
    })
    display(filtered);
})
let kids=document.getElementById("kids");
kids.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="Toys"){
            return true
        }
        return false;
    })
    display(filtered);
})
let Electronics=document.getElementById("Electronics");
Electronics.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="Electronics"){
            return true
        }
        return false;
    })
    display(filtered);
})

let Books=document.getElementById("Books");
Books.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="Books"){
            return true
        }
        return false;
    })
    display(filtered);
})

let SportsWear=document.getElementById("SportsWear");
SportsWear.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="SportsWear"){
            return true
        }
        return false;
    })
    display(filtered);
})

let HomeAppliances=document.getElementById("HomeAppliances");
HomeAppliances.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="HomeAppliances"){
            return true
        }
        return false;
    })
    display(filtered);
})

let MobileCases=document.getElementById("MobileCases");
MobileCases.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="MobileCases"){
            return true
        }
        return false;
    })
    display(filtered);
})

let Footwear=document.getElementById("Footwear");
Footwear.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="Footwear"){
            return true
        }
        return false;
    })
    display(filtered);
})

let Bags=document.getElementById("Bags");
Bags.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.category==="Bags"){
            return true
        }
        return false;
    })
    display(filtered);
})

let fifty=document.getElementById("fifty");
fifty.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.offer>=50){
            return true
        }
        return false;
    })
    display(filtered);
})

let fourty=document.getElementById("fourty");
fourty.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.offer>=40){
            return true
        }
        return false;
    })
    display(filtered);
})

let thirty=document.getElementById("thirty");
thirty.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.offer>=30){
            return true
        }
        return false;
    })
    display(filtered);
})

let twenty=document.getElementById("twenty");
twenty.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.offer>=20){
            return true
        }
        return false;
    })
    display(filtered);
})

let ten=document.getElementById("ten");
ten.addEventListener("click",()=>{
    let filtered=Alldata.filter((el)=>{
        if(el.offer>=10){
            return true
        }
        return false;
    })
    display(filtered);
})


// Pagination Buttons
let pageNum;

let PaginationBtnsDiv=document.getElementById("PaginationBtns");

function PaginationBtns(page){
    let Buttons=[];
    for(let i=1;i<=page;i++){
        Buttons.push(`<button class='pagination-button' data-page-number=${i} >${i}</button>`)
       }
       PaginationBtnsDiv.innerHTML=Buttons.join("");

       let AllButtons=document.querySelectorAll("#PaginationBtns button");
       for(let btn of AllButtons){
         btn.addEventListener("click",(e)=>{
           console.log(e.target.dataset.pageNumber);
           pageNum=e.target.dataset.pageNumber;
           if(pageNum==1){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=1 &&el.id<=13){
                    return true
                }
                return false;
            })
            display(filteredData)
           }
           else if(pageNum==2){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=13 &&el.id<=23){
                    return true
                }
                return false;
            })
            display(filteredData)
           }
           else if(pageNum==3){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=23 &&el.id<=33){
                    return true
                }
                return false;
            })
            display(filteredData)
           }
           else if(pageNum==4){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=33 &&el.id<=40){
                    return true
                }
                return false;
            })
            display(filteredData)
           }
           else if(pageNum==5){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=40 &&el.id<=50){
                    return true
                }
                return false;
            })
            display(filteredData)
           }
           else if(pageNum==6){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=50 &&el.id<=60){
                    return true
                }
                return false;
            })
            display(filteredData)
           }
           else if(pageNum==7){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=60 &&el.id<=70){
                    return true
                }
                return false;
            })
            display(filteredData)
           }
           else if(pageNum==8){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=70 &&el.id<=80){
                    return true
                }
                return false;
            })
            display(filteredData)
           }
           else if(pageNum==9){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=80 &&el.id<=90){
                    return true
                }
                return false;
            })
            display(filteredData)
           }
           else if(pageNum==10){
            let filteredData=Alldata.filter((el)=>{
                if(el.id>=90 &&el.id<=100){
                    return true
                }
                return false;
            })
            display(filteredData)
           }

         })
       }
}
function Default(data){
    let filteredData=data.filter((el)=>{
        if(el.id<=13){
            return true
        }
        return false;
    })
    display(filteredData)
}


  