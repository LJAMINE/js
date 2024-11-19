let btn=document.getElementById("clickbtn")
let para=document.getElementById("para")
let closeme=document.getElementById("closeme")


btn.addEventListener("click",() => {
    para.style.display="block"
})

closeme.addEventListener("click",() => {
    para.style.display="none"
})