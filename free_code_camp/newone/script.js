// let btnSubmit=document.querySelector('#btnSubmit')

// btnSubmit.addEventListener("click",function(event){

//     event.preventDefault();

//     let textIn=document.querySelector('#textInput').value
//     let emaulIn=document.querySelector('#emailInput').value
//     let etatInp=document.querySelector('#etat').value
//     let dateIn=document.querySelector('#dateD').value

// if (textIn===""|| emaulIn===""|| etatInp===""|| dateIn===""){

//     alert("entere tout")
// return;
// }

// let tBody=document.getElementById("tbbody")

// let newRow=document.createElement("tr")

// let cell0=document.createElement("td")
// cell0.innerText=textIn
// newRow.appendChild(cell0)

// let cell1=document.createElement("td")
// cell1.innerText=emaulIn
// newRow.appendChild(cell1)

// let cell2=document.createElement("td")
// cell2.innerText=etatInp
// newRow.appendChild(cell2)

// let cell3=document.createElement("td")
// cell3.innerText=dateIn
// newRow.appendChild(cell3)

// tBody.appendChild(newRow)

// })

let btnBut = document.querySelector("#btnSubmit");

btnBut.addEventListener("click", function (event) {
  event.preventDefault();

  let textIn = document.getElementById("textInput").value;
  let emailIn = document.getElementById("emailInput").value;
  let etatIn = document.getElementById("etat").value;
  let dateIn = document.getElementById("dateD").value;

  if (textIn === "" || emailIn === "" || etatIn === "" || dateIn === "") {
    alert("enter all the oinfo");
    return;
  }

  let tTable = document.getElementById("tbboody");

  let newRow = document.createElement("tr");

  let cell0 = document.createElement("td");
  cell0.innerText = textIn;
  newRow.appendChild(cell0);

  let cell1 = document.createElement("td");
  cell1.innerText = emailIn;
  newRow.appendChild(cell1);

  let cell2 = document.createElement("td");
  cell2.innerText = etatIn;
  newRow.appendChild(cell2);

  let cell3 = document.createElement("td");
  cell3.innerText = dateIn;
  newRow.appendChild(cell3);

  tTable.appendChild(newRow);

  document.getElementById("textInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("etat").value = "";
  document.getElementById("dateD").value = "";
});

let btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", function () {
  document.getElementById("formm").reset();
});
let deletB = document.getElementById("deleteB");

deletB.addEventListener("click", function () {
  let newTbale = document.getElementById("tbboody");

  newTbale.removeChild(newTbale.lastElementChild);
  console.log(newTbale);
});

let editBB = document.getElementById("editB");

editBB.addEventListener("click", function () {
  let textIn = document.getElementById("textInput").value;

  console.log("clicked");

  let newval = document.getElementById("tbboody");
  console.log(newval);

  textIn.innerText = newval.value;
});
