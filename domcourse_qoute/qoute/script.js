// let listItem=document.getElementsByClassName("lisr-item")
// console.log(listItem)


//query selector =first matching element
// //query selectorall = nodelist of all matching element
 
//innertext=show the contentwithout tags or space 
//text content =space aand content
//innner html=space aand content and tags



// let ul=document.querySelector("ul")

// let li=document.createElement("li")

// li.innerText="amine"


// li.classList.add('lisr-item')

// console.log(li.classList.contains('lisr-item'))


// // ul.appendChild(li)

// // li.setAttribute('id','main-heading');
// // li.removeAttribute('id');

// // let title=document.querySelector('#main-heading')

// // console.log(title.getAttribute('id'))



// //remove element

// li.remove()





// parent and child and siblings


// let btn1=document.getElementById("btn1")

// btn1.addEventListener("click",() => {
    

//    alert("amine is here")

// })

// let btn2=document.querySelector(".btn2")

// btn2.addEventListener("mouseover",() => {
    
//     btn2.style.color="green"

// })

// let revealbtn=document.querySelector(".reveal-btn")
// console.log(revealbtn)
// let hiddencontent=document.querySelector(".hidden-content")
// console.log(hiddencontent)



// revealbtn.addEventListener("click",() => {
    
//     hiddencontent.classList.toggle("visible");

     
     

// })
// let sport=document.getElementById("sport")

// sport.addEventListener("click",(e) => {
//     let target=e.target
//     console.log(target)

//     if(target.matches("li")){

//         target.style.color="red"
//     }

// })

let btn=document.getElementById("newOne")
let quote=document.getElementById("para")
console.log(quote)
let person=document.getElementById("person")

const quotes=[{
    quote:"mmaaaaaa laaaaaaa kkkkkkkkkk kkkkkkk",
    person:"ronaldo"
},{
    quote:"mmaaaaaa laaaaaaa kkkkkkkkkk kkkkkkk",
    person:"kristina"
},{
    quote:"mmaaaaaa laaaaaaa kkkkkkkkkk kkkkkkk",
    person:"bravo"
},
]
btn.addEventListener("click",() => {
    

     let random=Math.floor(Math.random() * quotes.length)
     quote.innerText=quotes[random].quote;
     person.innerText=quotes[random].person;


})


