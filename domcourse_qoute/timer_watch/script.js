let startbtn = document.getElementById("startbtn")
let endbtn = document.getElementById("endbtn")

let seconds = 0;
let minuit = 0;
let heures = 0;

function mytime() {
    seconds++
    if (seconds / 60 === 1) {
        seconds = 0;
        minuit++;

        if (minuit / 60 === 1) {
            minuit = 0;
            heures++;
        }
    }

    let showtemps = document.getElementById("timerInput").innerText = 
    heures + ":" + minuit + ":" + seconds

}

// window.setInterval(mytime,1000)

let timeInterval=null
let timerStatus="stop"

startbtn.addEventListener("click",() => {
    if (!timeInterval) {
        timeInterval = setInterval(mytime, 1000);
    }
    startbtn.disabled = true;
    endbtn.disabled = false;
    resetbtn.disabled = false;
})

endbtn.addEventListener("click", () => {
    clearInterval(timeInterval);
    timeInterval = null;
    startbtn.disabled = false;
    endbtn.disabled = true;
});

resetbtn.addEventListener("click", () => {
    clearInterval(timeInterval);
    timeInterval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerInput.textContent = "00:00:00";
    startbtn.disabled = false;
    endbtn.disabled = true;
    resetbtn.disabled = true;
});