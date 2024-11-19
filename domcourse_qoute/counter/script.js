let addbtn=document.getElementById("addbtn")
let deletebtn=document.getElementById("deletebtn")
let result=document.getElementById("result")

let i=0
addbtn.addEventListener("click",() => {
    
    i++;
    result.innerText=i
    

})

deletebtn.addEventListener("click",() => {
    

    if(i>0)
    i--;
    result.innerText=i
    

})


