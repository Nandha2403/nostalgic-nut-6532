// ID's
let Continue_btn = document.getElementById("Continue_btn")
let num_input = document.getElementById("num_input")
let alert = document.getElementById("alert")





// let LSdata = localStorage.getItem("MobileNumber") || []


// Event Listners

Continue_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(num_input.value.length < 10 || num_input.value.length >   10 || num_input.value == ""){
        alert.style.display = "block"
    }
    if(num_input.value.length == 10 && num_input.value != ""){
        alert.style.display = "none"
        // let user_number = {
        //     "number": num_input.value
        // }
        // console.log(user_number)
        localStorage.setItem("MobileNumber", num_input.value)

        window.location.href = "http://127.0.0.1:5500/Cw%20Project/Ashish/SignUp.html?/"
    }

    

})