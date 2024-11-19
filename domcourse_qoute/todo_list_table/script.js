const btnAdd = document.getElementById("add");
const btnReset = document.getElementById("resett");

    btnAdd.addEventListener("click", addFunct);
    btnReset.addEventListener("click", resetForm);

    function addFunct(event){
    event.preventDefault()

    var formData =getData()

    if (formData) {
        insertData(formData);
        document.getElementById("formm").reset(); 
    } else {
        alert("more info!");
    }
    }
    function getData(){
        
        const textInput=document.getElementById("textInput").value
        const   emailInput=document.getElementById("emailInput").value
        const   dateInput=document.getElementById("dateInput").value
        const  etat=document.getElementById("etat").value

        if (!textInput || !emailInput || !dateInput || !etat) {
            return null;
        }
        return { textInput, emailInput, dateInput, etat };
            
    }






    function insertData (data){


        var table =document.getElementById("stock")

        var newRow=table.insertRow()


        newRow.insertCell(0).innerHTML=data.textInput
        newRow.insertCell(1).innerHTML=data.emailInput
        newRow.insertCell(2).innerHTML=data.dateInput
        newRow.insertCell(3).innerHTML=data.etat

    
    }
    
    function resetForm(event){
        event.preventDefault();
        document.getElementById("formm").reset()
    }
