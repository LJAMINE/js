function  updateClock() {
    
    const now=new Date;
    const hour=now.getHours();
    const minute=now.getMinutes();
    const second=now.getSeconds();
    const timeStrings=`${hour}:${minute}:${second}`

    let myTime=document.getElementById("clock")
    myTime.innerText=timeStrings
}
updateClock()