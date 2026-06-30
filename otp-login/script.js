async function sendOTP(){

let email=document.getElementById("email").value;

let res=await fetch("/send",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({email})

});

let text=await res.text();

document.getElementById("msg").innerHTML=text;

}

async function verifyOTP(){

let email=document.getElementById("email").value;

let otp=document.getElementById("otp").value;

let res=await fetch("/verify",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email,

otp

})

});

let text=await res.text();

if(text=="Success"){

window.location="home.html";

}else{

document.getElementById("msg").innerHTML=text;

}

}