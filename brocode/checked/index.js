let btn=document.getElementById("btn")

btn.addEventListener("click",() =>
     {
        let name=document.getElementById("name")
        let paypal=document.getElementById("paypal")
        let master=document.getElementById("master")
        let visa=document.getElementById("visa")

        let subscribe=document.getElementById("subscribe")
        let visass=document.getElementById("visass")
        let masterrr=document.getElementById("masterrr")
        let paypall=document.getElementById("paypall")

        if(name.checked){
            
            subscribe.innerText=`you are selected`
            
        }else{
            subscribe.innerText=`you are not selected`  
            
        }

        if(visa.checked){
            
            visass.innerText=`you are with visa`
            
        }else{
            visass.innerText=`you are not visa`  
            
        }

        if(master.checked){
            
            masterrr.innerText=`you are matercar`
            
        }else{
            masterrr.innerText=`you are not matercar`  
            
        }

        if(paypal.checked){
            
            paypall.innerText=`you are matercar`
            
        }else{
            paypall.innerText=`you are not matercar`  
            
        }
})