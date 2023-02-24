// ID's

let num_input = document.getElementById("num_input")
let email_input = document.getElementById("email_input")
let name_input = document.getElementById("name_input")
let dob_input = document.getElementById("dob_input")
let password_input = document.getElementById("password_input")
let checkbox = document.getElementById("checkbox")



let Continue_btn = document.getElementById("Continue_btn")

let email_alert = document.getElementById("email_alert")
let name_alert = document.getElementById("name_alert")
let dob_alert = document.getElementById("dob_alert")
let password_alert = document.getElementById("password_alert")


let LSdata = JSON.parse(localStorage.getItem("userInformation")) || []






Continue_btn.addEventListener("click" , (e)=> {
    e.preventDefault()

    if(email_input.value == ""){
        email_alert.style.display = "block"
    }
    if(name_input.value == ""){
        name_alert.style.display = "block"
    }
    if(dob_input.value == ""){
        dob_alert.style.display = "block"
    }
    if(password_input.value == "" ||  password_input.value.length < 6){
        password_alert.style.display = "block"
    }else{
        let popup = document.getElementById("popup")
            popup.classList.add("openpopup")

            let otp = document.getElementById("otp")
            let otpNumber = Math.floor(1000 + Math.random() * 9000);
            otp.innerText = otpNumber

            

            let otpButton = document.getElementById("otpButton")
            otpButton.addEventListener("click" , (e)=>{
                let i1 = document.getElementById("otpInput1")
            let i2 = document.getElementById("otpInput2")
            let i3 = document.getElementById("otpInput3")
            let i4 = document.getElementById("otpInput4")

            let otpInput = i1.value + i2.value + i3.value + i4.value
            
                if(otpInput == otpNumber){
                    popup.classList.remove("openpopup")
                    
                    if(num_input.value.length == 10 && email_input.value != "" && name_input.value != "" && dob_input.value != "" && password_input.value.length >= 6){
                                email_alert.style.display = "none"
                                name_alert.style.display = "none"
                                dob_alert.style.display = "none"
                                password_alert.style.display = "none"
                        
                                // AddUserToServer()
                                let obj = {
                                    Number: num_input.value, 
                                    Email: email_input.value,
                                    Name: name_input.vallue,
                                    DOB: dob_input.value,
                                    Password: password_input.value
                                }
                                LSdata.push(obj)
                                localStorage.setItem("userInformation",JSON.stringify(LSdata))
                                console.log(LSdata)
                                if(checkbox.checked){
                                    window.location.href = "./index.html"
                                }else{
                                    window.location.href = "login.html"
                                }
                            } 
                    
                }else{
                    alert("Enter The Correct OTP")
                    
                }
            })

    }            
    
})





