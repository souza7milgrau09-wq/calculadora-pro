function login(){
const user=document.getElementById("username").value.trim();
const pass=document.getElementById("password").value.trim();
const error=document.getElementById("error");

if(user.length<3 || pass.length<3){
error.innerText="Usuário e senha precisam ter no mínimo 3 caracteres.";
return;
}

localStorage.setItem("calcUser",user);
localStorage.setItem("theme","dark");
localStorage.setItem("angle","deg");

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
