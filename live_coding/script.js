let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let stock=document.getElementById("stock")

let plus=document.getElementById("plus")
let moins=document.getElementById("moins")
let divis=document.getElementById("divis")
let multp=document.getElementById("multp")

plus.addEventListener("click",() => {


      let num1e=parseInt(num1.value)
      let num2e=parseInt(num2.value)


    let li=document.createElement("li")

    li.innerText=(num1e+num2e)

    stock.appendChild(li)

})

moins.addEventListener("click",() => {


    let num1e=parseInt(num1.value)
    let num2e=parseInt(num2.value)


  let li=document.createElement("li")

  li.innerText=(num1e-num2e)

  stock.appendChild(li)

})

divis.addEventListener("click",() => {


    let num1e=parseInt(num1.value)
    let num2e=parseInt(num2.value)


  let li=document.createElement("li")

  li.innerText=(num1e/num2e)

  stock.appendChild(li)

})
multp.addEventListener("click",() => {


    let num1e=parseInt(num1.value)
    let num2e=parseInt(num2.value)


  let li=document.createElement("li")

  li.innerText=(num1e*num2e)

  stock.appendChild(li)
  
})


