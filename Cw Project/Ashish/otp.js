let LSdata = localStorage.getItem("MobileNumber")
let num_input_otp = document.getElementById("num_input_otp")
let Continue_btn = document.getElementById("Continue_btn")
let alert = document.getElementById("alert")
let alert2 = document.getElementById("alert2")
let otp_input = document.getElementById("otp_input")
let otpvalue;

window.addEventListener("load",()=>{
    // console.log(LSdata)
    LSdata = snum_input_otp.value
    // otpvalue = 
    console.log(OTP())
    alert('0591')

})

function OTP(){
   return Math.floor(Math.random() * 9999) 
}


Continue_btn.addEventListener("click",(e)=>{
    e.preventDefault() 

    alert.style.display = "none" 
    alert2.style.display = "none"

    if(otp_input.value == ""){
        alert.style.display = "block"  
        console.log("yes")
        alert("hi")
    } 

    if('0591' != otp_input.value){
      alert.style.display = "none"  
      alert2.style.display = "block"
      console.log("redirct to home page")
      // window.location.href = ""
    }

    if('0591' == otp_input.value){
      console.log("redirct to home page")
      alert('done')
      // window.location.href = ""
    }
})
