// let clickme = document.getElementById("clickme")
// let closeme = document.getElementById("closeme")
// let myhiddenDrawer = document.getElementById("myhiddenDrawer")

// clickme.addEventListener("click", function () {

//     myhiddenDrawer.style.display = "block";
// })
// closeme.addEventListener("click", function () {

//     myhiddenDrawer.style.display = "none";
// })



// let btn1 = document.getElementById("btn1")
// let image1 = document.getElementById("image1")
// let prix1 = document.getElementById("prix1").innerText
// let stock = document.getElementById("stock")

// btn1.addEventListener("click", function () {

//     let li=document.createElement("li")
//     li.innerText=prix1
//     stock.appendChild(li)

//      li=document.createElement("li")


//     let imageClone=image1.cloneNode(true)
//     console.log(imageClone)
//     // li.innerText=imageClone
//     stock.appendChild(imageClone)


// })




// let btn2 = document.getElementById("btn2")
// let image2 = document.getElementById("image2")
// let prix2 = document.getElementById("prix2").innerText
// let stockk = document.getElementById("stockk")

// btn2.addEventListener("click", function () {

//     let li=document.createElement("li")
//     li.innerText=prix2
//     stockk.appendChild(li)

//      li=document.createElement("li")


//     let imageClone=image1.cloneNode(true)
//     console.log(imageClone)
//     // li.innerText=imageClone
//     stockk.appendChild(imageClone)


// })

// let total=document.getElementById("total")
// let btnTotal=document.getElementById("btnTotal")

// btnTotal.addEventListener("click",function(){

// let prix1 = document.getElementById("prix1").innerText
// let prix2 = document.getElementById("prix2").innerText

// let pricePar1=parseInt(prix1)
// let pricePar2=parseInt(prix2)

// console.log(pricePar2)
// console.log(pricePar1)

// let mytotal=document.createElement("p")

// mytotal.innerHTML=`$${pricePar1+pricePar2}`

// total.appendChild(mytotal)




// })




//-----------------------------------------------
//drawer


// let nameinput = document.getElementById("nameinput")
// let descriptioninput = document.getElementById("descriptioninput")
// let add = document.getElementById("add")
// let tabble = document.getElementById("tabble")


// add.addEventListener("click", function (event) {
//     event.preventDefault()

//     let newRow = document.createElement("tr")

//     let nameCell = document.createElement("td")
//     nameCell.innerText = nameinput.value
//     console.log(nameCell)
//     newRow.appendChild(nameCell)


//     let descrCell = document.createElement("td")
//     descrCell.innerText = descriptioninput.value
//     newRow.appendChild(descrCell)
//     console.log(descrCell)


//     let deleteBtn = document.createElement("button")
//     // deleteBtn.classList.add("deleteBtn")
//     deleteBtn.setAttribute("id", "deleteBtn")
//     deleteBtn.textContent = "delete btn"
//     newRow.appendChild(deleteBtn)


//     tabble.appendChild(newRow)

//     descriptioninput.value=""
//     nameinput.value=""


//     deleteBtn.addEventListener("click",function(){
//         tabble.removeChild(newRow)
//         // console.log(tabble)
//     })





// })
//-----------------------------------------------