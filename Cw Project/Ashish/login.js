// ID's
let Continue_btn = document.getElementById("Continue_btn")
let num_input = document.getElementById("num_input")
let alert = document.getElementById("alert")
let LSdata = JSON.parse(localStorage.getItem("MobileNumber")) || []


// Event Listners

Continue_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(num_input.value.length < 10 || num_input.value.length > 10 || num_input.value == ""){
        alert.style.display = "block"   
    }
    console.log(LSdata)
    // LSdata.forEach(element =>{
        // if(element.MobileNumber == num_input.value){
        //     console.log("member")
        // } else {
        //     console.log("not member")
        //     window.location.href = "./SignUp.html"
        // }
    // })
    if(num_input.value.length == 10 && num_input.value != ""){
        alert.style.display = "none"
        // let user_number = {
        //     "number": num_input.value
        // }
        // console.log(user_number)
        localStorage.setItem("MobileNumber", num_input.value)
        window.location.href = "http://127.0.0.1:5500/Cw%20Project/Ashish/SignUp.html?/"
        // console.log(num_input.value)
        // let userFromServer ;
        // console.log(userFromServer)
    }
})




// async function checkUser(){
//     try {
//         let res = await fetch(`http://localhost:3000/users`,{
//             // method: "GET",
//             headers: {
//                 'Content-Type' : 'application/json'
//             },
//             body: JSON.stringify(obj)
//     })
//         let data = await res.json()
//         console.log(data)
//         // userFromServer = data
//         // return data;
//         // data.forEach(element => {
//         //     if(num_input.value == element.Number){
//         //         console.log("already user")
//         //     } else {
//         //         console.log("Not user")
//         //         // window.location.href = "http://127.0.0.1:5500/Cw%20Project/Ashish/SignUp.html?/"
//         //     }
//         // });
//     } catch (error) {
//         console.log('error')
//     }
// }