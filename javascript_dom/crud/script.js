var selectedRow=null;

function onAdd(e){
  event.preventDefault();
  
  var formData=readData();
  if(selectedRow===null){
    insertData(formData);
  }
  else{
    updateData(formData);

  }
  resetDataForm();
}

//retrieve ola  getti data

function readData (){
    var formData={};

    formData["tache"]=document.getElementById("tache").value;
    formData["description"]=document.getElementById("description").value;
    formData["etat"]=document.getElementById("etat").value;
    formData["date"]=document.getElementById("date").value;

    return formData;   
}

//insert data 
function insertData(data){
var table=document.getElementById("stocklist").getElementsByTagName("tbody")[0];
var newRow=table.insertRow(table.length);

var cell1=newRow.insertCell(0);
    cell1.innerHTML=data.tache;
var cell2=newRow.insertCell(1);
    cell2.innerHTML=data.description;

var cell3=newRow.insertCell(2);
    cell3.innerHTML=data.etat;
var cell4=newRow.insertCell(3);
    cell4.innerHTML=data.date;
 
var cell5=newRow.insertCell(4);
    cell5.innerHTML=`<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}


//edit data 

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("tache").value=selectedRow.cells[0].innerHTML;
    document.getElementById("description").value=selectedRow.cells[1].innerHTML;
    document.getElementById("etat").value=selectedRow.cells[2].innerHTML;
    document.getElementById("date").value=selectedRow.cells[3].innerHTML;


}
function updateData(formData){
    selectedRow.cells[0].innerHTML=formData.tache;
    selectedRow.cells[1].innerHTML=formData.description;
    selectedRow.cells[2].innerHTML=formData.etat;
    selectedRow.cells[3].innerHTML=formData.date;
}

//delete

function onDelete(td){
    if (confirm("do you wantt to delete thiss")){
      row=td.parentElement.parentElement;
      document.getElementById('stocklist').deleteRow(row.rowIndex);   
    }
    resetDataForm();
}

//reset

function resetDataForm(){
    document.getElementById("form").reset();

}