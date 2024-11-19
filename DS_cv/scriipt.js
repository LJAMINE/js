let nameIn=document.getElementById("name")
let metier=document.getElementById("metier")
let age=document.getElementById("age")


let nomcv=document.getElementById("nomcv")
let metiercv=document.getElementById("metiercv")
let datecv=document.getElementById("datecv")

nameIn.addEventListener("input",function(){

    nomcv.textContent=nameIn.value||"place"
 

})
metier.addEventListener("input",function(){

    metiercv.textContent=metier.value||"place"
 

})
age.addEventListener("input",function(){

    datecv.textContent=age.value||"place"
 

})