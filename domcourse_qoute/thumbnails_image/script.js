

let click=document.querySelectorAll(".gallery img")
let fullImage=document.getElementById("fullImageContainer")

click.forEach(click=>{
    click.addEventListener("click",() => {

        let fullImageUrl=click.getAttribute("data-full")

        fullImage.innerHTML=""

        let myImage=document.createElement("img") 
        myImage.src=fullImageUrl;

        fullImage.appendChild(myImage)
        
    })
})