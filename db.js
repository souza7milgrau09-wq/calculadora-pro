let db;

const request=indexedDB.open("CalcProDB",1);

request.onupgradeneeded=function(e){
db=e.target.result;
db.createObjectStore("history",{keyPath:"id",autoIncrement:true});
};

request.onsuccess=function(e){
db=e.target.result;
};

function saveHistory(user,expression,result){
const tx=db.transaction("history","readwrite");
const store=tx.objectStore("history");

store.add({
user:user,
expression:expression,
result:result,
date:new Date()
});
}

function loadHistory(user,callback){
const tx=db.transaction("history","readonly");
const store=tx.objectStore("history");
const request=store.getAll();

request.onsuccess=function(){
const data=request.result.filter(item=>item.user===user);
callback(data);
};
}
