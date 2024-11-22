let btn=document.getElementById("btn")
let inputText=document.getElementById("inputText")
let stock=document.getElementById("stock")


btn.addEventListener("click",() => {
    
    let li=document.createElement("li")
    let btndelete=document.createElement("button")
    li.innerText=inputText.value
    btndelete.innerText="delete"

    btndelete.classList.add("deleteBtn")

    li.appendChild(btndelete)
    stock.appendChild(li)

    inputText.value=""

    btndelete.addEventListener("click",() => {
         
         stock.removeChild(li)
    })
   

    
  
})



