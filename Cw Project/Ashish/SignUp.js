// ID's

let num_input = document.getElementById("num_input")
let email_input = document.getElementById("email_input")
let name_input = document.getElementById("name_input")
let dob_input = document.getElementById("dob_input")
let password_input = document.getElementById("password_input")

let Continue_btn = document.getElementById("Continue_btn")

let email_alert = document.getElementById("email_alert")
let name_alert = document.getElementById("name_alert")
let dob_alert = document.getElementById("dob_alert")
let password_alert = document.getElementById("password_alert")


let LSdata = localStorage.getItem("MobileNumber")




// Event Listner 

window.addEventListener("load",()=>{
    console.log(LSdata)
    num_input.value = LSdata
})


Continue_btn.addEventListener("click",(e)=>{
    e.preventDefault()

    if(email_input.value == ""){
        email_alert.style.display = "block"
        console.log("right")
    }
    if(name_input.value == ""){
        name_alert.style.display = "block"
        console.log("right")
    }
    if(dob_input.value == ""){
        dob_alert.style.display = "block"
        console.log("right")
    }
    if(password_input.value == "" ||  password_input.value.length < 6){
        password_alert.style.display = "block"
        console.log("right")
    }

    // for proceed to final

    if(num_input.value.length == 10 && email_input.value != "" && name_input.value != "" && dob_input.value != "" && password_input.value.length >= 6){
        email_alert.style.display = "none"
        name_alert.style.display = "none"
        dob_alert.style.display = "none"
        password_alert.style.display = "none"

        AddUserToServer()
        alert("done")
    }   
})


// Functions

async function AddUserToServer (){
    try {
        let obj = {
            Number: num_input.value, 
            Email: email_input.value,
            Name: name_input.vallue,
            DOB: dob_input.value,
            Password: password_input.value
        }
        let res = await fetch(`./UserInformation.json`,{
            method: "POST",
             
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(obj)
    })
        let data = await res.json()
        console.log(data) 
        
    } catch (error) {
        console.log(error)
    }
}
