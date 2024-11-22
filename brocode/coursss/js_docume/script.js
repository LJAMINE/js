// let div=document.createElement("div")
// div.id="myid"
// div.className="myclass"
// div.innerHTML=`
//     <p>amine is here</p>

// `

// document.body.appendChild(div)


// let h2=document.createElement("h2")

// h2.innerHTML=`
//     <h2>my new h2</h2>
// `
// div.appendChild(h2)


// <!-- first -->


// let stock=document.getElementById("stock")

// let li=document.createElement("li")

// li.textContent="about"

// stock.appendChild(li)


//  li=document.createElement("li")


// li.textContent="me"
// stock.appendChild(li)



//seco
// let stcok=document.querySelector("#stock")
// let newValue=stcok.firstElementChild
// console.log(newValue)


// let newOne=document.getElementById("newOne")
// newOne.appendChild(newValue)



// let menu=document.getElementById("menu");

// let newVa=document.createElement("li")
// newVa.textContent="amiaaaaaane";

// menu.replaceChild(newVa,menu.lastElementChild)


let menu=document.getElementById("menu");

let clonedH=menu.cloneNode(true)

clonedH.id="newId"
document.body.appendChild(clonedH)