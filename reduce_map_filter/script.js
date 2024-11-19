// function addButton(){
//     event.preventDefault();
//     let  valueInput=document.getElementById("inputText");

// let valueText=valueInput.value;

// console.log(valueText);

// let stock=document.getElementById("stock")

// if(valueText){

//     let myList=document.createElement("li")
//       myList.innerText=valueText;

//       stock.appendChild(myList);
//       valueInput.value = "";

// }else{
//     console.log("entrer something");
// }
// }

// function deletButton(){

//   let stockList=document.getElementById("stock");

//       stockList.removeChild(stockList.lastElementChild);
// }


// function resTe(){
//     document.getElementById("formm").reset();
// }



// function addFunction(){
//     event.preventDefault();
//     let inputText=document.getElementById("textText");
// let inputVDate=document.getElementById("textDate");


// let inputValueT=inputText.value;
// let inputDateT=inputVDate.value;

// let stoc=document.getElementById("stock");


// if (inputValueT && inputDateT){ 
//      let listItem=document.createElement("stock")
//      let listztem=document.createElement("stock")

//        listItem.innerText=inputValueT

//        listztem.innerText=inputDateT

//        stoc.appendChild(listItem)
//        stoc.appendChild(listztem)

// }




// }

// function deleteFunction(){


    
// }




const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}