const clickmeButton = document.getElementById("clickme");
const closemeButton = document.getElementById("closeme");
const drawer = document.querySelector(".drawar");

clickmeButton.addEventListener("click", () => {
    drawer.style.display = "block";
});

closemeButton.addEventListener("click", () => {
    drawer.style.display = "none";
});


 
 let btn1=document.getElementById("btn1")
 let btn2=document.getElementById("btn2")
 let stock=document.getElementById("stock")

 let image1=document.getElementById("image1")
 let image2=document.getElementById("image2")
 console.log(image1)

 let prix1=document.getElementById("prix1").innerText
 let prix2=document.getElementById("prix2").innerText



 btn1.addEventListener("click",function(){

   let price1=parseInt(prix1)

//    console.log(price1)

   let li=document.createElement("li")

   li.innerText=price1


let imageClone=image1.cloneNode()
li.appendChild(imageClone)

   stock.appendChild(li)




 })
 btn2.addEventListener("click",function(){

    let price2=parseInt(prix2)
 
 //    console.log(price1)
 
    let li=document.createElement("li")
 
    li.innerText=price2
 
 
 let imageClone=image2.cloneNode()
 li.appendChild(imageClone)
 
    stock.appendChild(li)
 
 
 
 
  })

 let total=document.getElementById("total")
 let tottal=document.getElementById("tottal")

 total.addEventListener("click",() => {

    let price2=parseInt(prix2)
    let price1=parseInt(prix1)


    tottal.innerText=price1+price2

    tottal.appendChild(tottal)
     

 })