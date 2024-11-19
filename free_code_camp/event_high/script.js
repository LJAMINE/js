//reveall paragraph

// const btnn=document.querySelector('.reveal-btn')
// const hiddenText=document.querySelector('.hidden-content')


// function hideRT(){
//     if(hiddenText.classList.contains('reveal-btn')){

//         hiddenText.classList.remove('reveal-btn')

//     }else{
//         hiddenText.classList.add('reveal-btn')

//     }
// }

// btnn.addEventListener("click",hideRT);

//reveall paragraph




//clickable sports 

 
 document.querySelector('#footbal').addEventListener("click",function(e){

   console.log("footbal is clicked")

   const target=e.target

   if (target.matches('li')){
    target.style.backgroundColor="red"
   }


 })

 document.querySelector('#basketball').addEventListener("click",function(e){

    console.log("basketball is clicked")
 
    const target=e.target
 
    if (target.matches('li')){
     target.style.backgroundColor="red"
    }
 
 
  })

  document.querySelector('#boxing').addEventListener("click",function(e){

    console.log("boxing is clicked")
 
    const target=e.target
 
    if (target.matches('li')){
     target.style.backgroundColor="red"
    }
 
 
  })