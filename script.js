const result=document.getElementById("result");
let isDegree=true;

function initApp(){
const user=localStorage.getItem("calcUser");
document.getElementById("welcome").innerText="Olá, "+user;
loadHistory(user,renderHistory);
}

function appendValue(v){ result.value+=v; }
function clearDisplay(){ result.value=""; }
function deleteLast(){ result.value=result.value.slice(0,-1); }

function toggleTheme(){
document.body.classList.toggle("light");
}

function toggleAngle(){
isDegree=!isDegree;
document.getElementById("angleMode").innerText=isDegree?"DEG":"RAD";
}

function calculate(){
try{
let exp=result.value
.replace(/√\(/g,"Math.sqrt(")
.replace(/sin\((.*?)\)/g,(_,v)=>{
return `Math.sin(${isDegree?`(${v})*Math.PI/180`:v})`;
})
.replace(/cos\((.*?)\)/g,(_,v)=>{
return `Math.cos(${isDegree?`(${v})*Math.PI/180`:v})`;
})
.replace(/tan\((.*?)\)/g,(_,v)=>{
return `Math.tan(${isDegree?`(${v})*Math.PI/180`:v})`;
});

const value=new Function("return "+exp)();
const user=localStorage.getItem("calcUser");

saveHistory(user,result.value,value);
result.value=value;
loadHistory(user,renderHistory);

}catch{
result.value="Erro";
}
}

function renderHistory(data){
const list=document.getElementById("historyList");
list.innerHTML="";
data.reverse().forEach(item=>{
const li=document.createElement("li");
li.innerText=item.expression+" = "+item.result;
list.appendChild(li);
});
}