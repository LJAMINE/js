var selectedRow=null;

function addFunction(){
event.preventDefault();
var formData=getData();

if(selectedRow===null){
   insertData(formData);
}else{
   editUpdate(data)

}


}


function getData(){
    let formData={}

    formData["tache"]=document.getElementById("tache").value
    formData["description"]=document.getElementById("description").value
    formData["date"]=document.getElementById("date").value
    formData["etat"]=document.getElementById("etat").value
 
    return formData;

    }
   

   function insertData(data){

      var table=document.getElementById("stock").getElementsByTagName("tbody")[0];

      var newRow=table.insertRow(table.length)

      var cell1=newRow.insertCell(0)
      cell1.innerHTML = data.tache

      var cell2=newRow.insertCell(1)
      cell2.innerHTML= data.description

      var cell3=newRow.insertCell(2)
      cell3.innerHTML= data.date

      var cell4=newRow.insertCell(3)
      cell4.innerHTML= data.etat

      var cell5=newRow.insertCell(4)
      cell5.innerHTML= `<button onClick='onEdit'>edit</button> <button onClick='onDelete'>delete</button>
      `




   }
//  function editUpdate(){


//  }
