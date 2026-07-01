function contactForm(){

let name=document.getElementById("cname").value.trim();
let email=document.getElementById("cemail").value.trim();
let phone=document.getElementById("cphone").value.trim();
let message=document.getElementById("message").value.trim();

if(name==""){
alert("Please enter your name.");
return false;
}

if(email==""){
alert("Please enter your email.");
return false;
}

if(!email.includes("@") || !email.includes(".")){
alert("Enter a valid email.");
return false;
}

if(phone==""){
alert("Please enter your phone number.");
return false;
}

if(phone.length!=10 || isNaN(phone)){
alert("Enter a valid 10-digit phone number.");
return false;
}

if(message==""){
alert("Please enter your message.");
return false;
}

alert("Thank you! Your message has been sent successfully.");

return true;

}