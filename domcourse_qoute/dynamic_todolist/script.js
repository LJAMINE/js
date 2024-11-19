let addBtn = document.getElementById("addBtn")
let inputText = document.getElementById("inputText")
let stock = document.getElementById("stock")


addBtn.addEventListener("click", () => {


    let li = document.createElement("li")
    //    let btnDelete=document.createElement("button")
    //    li.innerText=inputText.value
    li.innerHTML = ` ${inputText.value} <input type="checkbox" class="inputCheck">
   <button class="deletBtn">delete</button>
   
   
   `
    //    li.innerText=btnDelete.value

    stock.appendChild(li)

    inputText.value = ""

    let deletBtn = li.querySelector(".deletBtn")

    deletBtn.addEventListener("click", function () {

        let stckR = document.getElementById("stock")
        stckR.removeChild(li)

    })

    let inputCheck=li.querySelector(".inputCheck")

    inputCheck.addEventListener("change",() => {

        if (inputCheck.checked){
            li.style.textDecoration="line-through"
        }else{
            li.style.textDecoration="none"

        }
        
    })



})
