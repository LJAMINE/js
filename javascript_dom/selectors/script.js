//element selectors = ùanipulate html elements they alow you 
 //                 to select one or multiple html element 
 //                 from the dom (document object model)

 //1 document.getElementById()  //element or null
 //2 document.getElementsByClassName()  //html collection 
 //3 document.getElementsByTagName() //html collection 
 //4 document.querySelector()  //first element or null
 //5 document.querySelectorAll() // nodelist

 //1 document.getElementById()  //element or null

//  const myHeading=document.getElementById("my-heading");
//  myHeading.style.backgroundColor="yellow";
//  myHeading.style.textAlign="center";
//  console.log(myHeading);


 //2 document.getElementsByClassName()  //html collection 

// const fruits=document.getElementsByClassName("fruits");

// fruits[2].style.backgroundColor="red";




 //3 document.getElementsByTagName() //html collection 

// const h4Elements=document.getElementsByTagName('h4'); 
// const liElements=document.getElementsByTagName('li'); 


// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor="blue";
// }


// for(let liElement of liElements){
//     liElement.style.backgroundColor="green";
// }


 //4 document.querySelector()  //first element or null

//  const element=document.querySelector("h4");
//  element.style.backgroundColor="aqua"



 //5 document.querySelectorAll() // nodelist

 const foods=document.querySelectorAll("li");
 foods[4].style.backgroundColor="beige"

