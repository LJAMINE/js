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
   

    
    // stock.appendChild(li)
    // stock.appendChild(btndelete)
    // // console.log(inputText)
    // inputText.value=""


    // let deleteB=doc.getElementById("deleteB")
    
    // deleteB.addEventListener("click",function(){
       
    //   let stockRem=document.getElementById("stock")
    
    //   stockRem.removeChild(li)
     
    // })

})



