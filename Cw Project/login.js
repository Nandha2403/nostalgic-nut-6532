// ID's
let Continue_btn = document.getElementById("Continue_btn")
let num_input = document.getElementById("num_input")
let LSdata = JSON.parse(localStorage.getItem("userInformation")) || []
let password = document.getElementById("password")
let admin = document.getElementById("admin")

let userName ;
Continue_btn.addEventListener("click" , (e)=>{
    let done = true
    e.preventDefault()
    for(let i=0 ; i<LSdata.length && done ; i++){
        let item= LSdata[i]

        if((item.Number == num_input.value || item.Email == num_input.value) && item.Password == password.value){
            userName = item.Name
            done=false
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
                console.log(otpInput +"   "+ otpNumber)
                    if(otpInput == otpNumber){
                        popup.classList.remove("openpopup")
                        
                        if(admin.value == 9302){
                            
                            window.localStorage.setItem('userName' , userName)
                            window.location.href = "Admin/dashboard.html"
                            alert("working")
                        }else{
                            
                            window.localStorage.setItem('userName' , userName)
                            window.location.href = "index.html"
                        }
                        
                    }else{
                        alert("Enter The Correct OTP")
                        
                    }
            })
        }
    }
})

let google = document.getElementById("google")
google.addEventListener("click" , (e)=>{
    e.preventDefault()
    window.location.href = "SignUp.html"
    
})