const timer = document.getElementById("timer-starter");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let startTime = 0;
let elapsedTime = 0;
let timeInterval = 0;

function startTimer(){
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval( () => {
        elapsedTime = Date.now() - startTime;
        timer.textContent = formatTime(elapsedTime);
    }, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}


function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000 );
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor ( elapsedTime / (1000 * 60 * 60));

    return(
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +

    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +

    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" +

    (milliseconds > 9 ? milliseconds : "0" + milliseconds)

    );
}

function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
 

}


function resetTimer() {
    clearInterval(timerInterval);

    elapsedTime = 0;
    timer.textContent = "00:00:00:00";

    startBtn.disabled = false;
    
}

startBtn.addEventListener("click",startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);