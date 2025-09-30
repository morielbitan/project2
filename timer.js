const button = document.getElementById('startBtn');
let seconds = 20;
let milliseconds=0;
let timeoutId = null; // to store setTimeout reference
let isRunning = false;

function checktime(i){
    return i<10? "0" + i : i;}

function formatTime(sec, ms) {
  return checktime(sec) + "." + String(ms).padStart(2, "0");
}


function displaytime(){
    document.getElementById('txt').innerHTML= formatTime(seconds,milliseconds);
}
function runtime(){
    if(!isRunning){
        isRunning=true;
        document.getElementById('startBtn').innerHTML="stop"
        startime()
    }else{
        clearTimeout(timeoutId);
        isRunning=false;
        document.getElementById('startBtn').innerHTML="continue"

    }
}

function startime(){
    if (seconds<=0){
            document.getElementById('txt').innerHTML= "GAME OVER";
            document.getElementById('startBtn').innerHTML="start game";
            isRunning=false;
            seconds=20;
            return;
    }
    
    displaytime();

    milliseconds -= 1;
  if (milliseconds < 0) {
    milliseconds = 99;
    seconds -= 1;}

    timeoutId=setTimeout(startime,10);

    
}



button.addEventListener('click', runtime);
