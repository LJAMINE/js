let nameInput=document.getElementById("nameInput");
let ageInput=document.getElementById("ageInput");

let submitbtn=document.getElementById("submitbtn");

let tabble=document.getElementById("tabble");


submitbtn.addEventListener("click",(event) => {


    // event.preventDefault()

    // let newInp=nameInput.value
    // let newageInput=ageInput.value

    // if(newInp==="" || newageInput===""){
    //     alert("saisir info");
    // }


    // let newRow=document.createElement("tr")


    // let nomcell1=document.createElement("td")
    // nomcell1.innerText=newInp

    // let agecell2=document.createElement("td")
    // agecell2.innerText=newageInput

    // let deleCell=document.createElement("td")
    // let deletBtn=document.createElement("button")

    // deletBtn.innerText="delete"
    // deletBtn.className="deleteBtn"

    // deleCell.appendChild(deletBtn)



    // newRow.appendChild(nomcell1)
    // newRow.appendChild(agecell2)
    // newRow.appendChild(deletBtn)

    // tabble.appendChild(newRow);

    // nameInput.value=""
    // ageInput.value=""






    event.preventDefault();

    let newageValue=ageInput.value
    let newnameInput=nameInput.value

    if(newageValue===""||newnameInput===""){
        alert("please send info")
    }



    let newRow=document.createElement("tr")

    let celAge=document.createElement("td")
     celAge.innerText=newageValue


    let celName=document.createElement("td")
    celName.innerText=newnameInput


    let deletCell=document.createElement("td")
    let deletbtn=document.createElement("button")

    deletbtn.innerText="delete"
    deletbtn.className="myDelete"

    deletCell.appendChild(deletbtn)



    newRow.appendChild(celName)
    newRow.appendChild(celAge)
    newRow.appendChild(deletCell)

    tabble.appendChild(newRow)

    nameInput.value=""
    ageInput.value=""




    deletbtn.addEventListener("click",() => {
  
       tabble.removeChild(newRow)
    })




})







