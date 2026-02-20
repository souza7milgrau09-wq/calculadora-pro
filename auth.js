function login(){
const user=document.getElementById("username").value.trim();
const pass=document.getElementById("password").value.trim();

if(user.length<3 || pass.length<3){
document.getElementById("error").innerText="Dados inválidos";
return;
}

localStorage.setItem("calcUser",user);
localStorage.setItem("calcPass",pass);
window.location.href="index.html";
}

function checkLogin(){
if(!localStorage.getItem("calcUser")){
window.location.href="login.html";
}
}

function logout(){
localStorage.removeItem("calcUser");
window.location.href="login.html";
}