
let timouId;

function startTimer(){

    timouId=setTimeout(() => {
    window.alert("helloo")
    console.log("starts")
}, 3000);
}

function clearTimer(){
    clearTimeout(timouId)
    console.log("clear")

}