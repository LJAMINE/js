let accordion=document.getElementsByClassName("content-container")
console.log(accordion)

for (let index = 0; index < accordion.length; index++) {

    accordion[index].addEventListener("click",function()   {
        this.classList.toggle('active')
        
        
    })
}