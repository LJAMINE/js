// // let btn=document.getElementById("btn")

// // let formm=document.getElementById("formm")

// // btn.addEventListener("click",() => {

// //   let result=document.createElement("div")

// //   result.innerHTML=`<input type="text" >
// //                     <button type="button" class="btnDele">addForm</button>
// //   `;

// //   formm.appendChild(result)

// //   let btnD=result.querySelector('.btnDele')

// //   btnD.addEventListener("click",() => {

// //     if(formm.lastElementChild){
// //       formm.removeChild(formm.lastElementChild)
// //     }
// // })

// // })

// let btn=document.getElementById("btn")
// let formm=document.getElementById("formm")

// btn.addEventListener("click",() => {

//  lcreateElementet result=document.("div")

//  result.innerHTML=`
//  <input type="text">
// <button class="btndele">delete</button>
//  `;

//  formm.appendChild(result);

// let btndele=result.querySelector(".btndele")

// btndele.addEventListener("click",() => {

//   if (formm.lastElementChild){
//     formm.removeChild(formm.lastElementChild)
//   }
// })

// })

// let btn=document.getElementById("btn")
// let textIn=document.getElementById("textIn")
// let stoc=document.getElementById("stock")

// btn.addEventListener("click",() => {

//   let result=document.createElement("li")

//   result.innerHTML=`${textIn.value}
//     <button class="btndelete">deleete</button>
//   `

//   stoc.appendChild(result);

//   textIn.value=""

//   let btnD=result.querySelector(".btndelete")

//   btnD.addEventListener("click",() => {
//     if(stoc.lastElementChild){

//       stoc.removeChild(stoc.lastElementChild)
//     }

//   })

//   let btnall=document.getElementById("btnall")

//   btnall.addEventListener("click",() => {
//    stoc.innerHTML=""

//   })

// })

// let add=document.getElementById("add")
// let result=document.getElementById("textI")
// let stock=document.getElementById("stock")

// add.addEventListener("click",() => {

//   let listI=document.createElement("li")
//   listI.innerText=result.value
//   stock.appendChild(listI)

//   result.value=""

// })

// let deleteA=document.querySelector("#deleteA")

// deleteA.addEventListener("click",() => {

//   let enG=document.getElementById("stock")
//   // if(enG.lastElementChild){

//     enG.removeChild(enG.lastElementChild)

// })

// let add=document.getElementById("addB")
// let deleteA=document.getElementById("deleteA")
// let emailI=document.getElementById("emailI")
// let numberI=document.getElementById("numberI")
// let textI=document.getElementById("textI")

// let btn = document.getElementById("btn");
// let reset = document.getElementById("reseta");

// btn.addEventListener("click", () => {
//   event.preventDefault();

//   let date = document.getElementById("date").value;
//   let inputText = document.getElementById("inputText").value;
//   let email = document.getElementById("email").value;

//   if (date === "" && inputText === "" && email === "") {
//     alert("enter datae");
//   } else {
//     insertDate(inputText, email, date);
//     // date.value=""
//     // inputText.value=""
//     // email.value=""
//   }
// });

// let TTbopdy = document.getElementById("ttbpdy");

// function insertDate(nameE, email, date) {
//   let row = document.createElement("tr");

//   let namIcell = document.createElement("td");
//   namIcell.textContent = nameE;

//   let emailCel = document.createElement("td");
//   emailCel.textContent = email;
//   let dateCell = document.createElement("td");
//   dateCell.textContent = date;

//   let buttonCel = document.createElement("td");
//   buttonCel.innerHTML =`
//       <button class="deleteA">deleteAA</button> 
//   ` ;

//   row.appendChild(namIcell);
//   row.appendChild(emailCel);
//   row.appendChild(dateCell);
//   row.appendChild(buttonCel);


//   TTbopdy.appendChild(row);
// }

// reset.addEventListener("click", () => {
//   document.getElementById("formm").reset();
// });

// let deleteAA=document.querySelector(".deleteA");

// deleteAA.addEventListener("click",() => {
//     row.remove(); // Remove the row when the delete button is clicked

     

// })






let btnAdd=document.getElementById("btn")
let nameA=document.getElementById("nameA")
let date=document.getElementById("date")
let etat=document.getElementById("etat")


btnAdd.addEventListener("click",() => {

  event.preventDefault()
  
      if(nameA.value!=="" &&date.value!=="" &&etat.value!==""){
        insertFunction(nameA.value,date.value,etat.value)
      }else{
        alert("enter info ")
      }


})


let ttBody=document.getElementById("ttBODY")
let row=document.createElement("tr")
function insertFunction(cell1,cell2,cell3){


    newName=document.createElement("td")
    newName.innerText=cell1;

  newemail=document.createElement("td")
  newemail.innerText=cell2;

    newDate=document.createElement("td")
    newDate.innerText=cell3;

    row.appendChild(newName)
    row.appendChild(newemail)
    row.appendChild(newDate)

    ttBody.appendChild(row)
}


