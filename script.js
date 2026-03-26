function toonTip(){
document.getElementById("tip").innerHTML=
"Blijf laag door je knieën en gebruik het glas slim!";
}
document.addEventListener("DOMContentLoaded",function(){
var btn=document.getElementById("menuToggle");
if(btn){
btn.addEventListener("click",function(){
var menu=document.getElementById("menu");
menu.style.display=(menu.style.display==="block")?"none":"block";
});
}
});