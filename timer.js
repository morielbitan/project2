const button = document.getElementById('startBtn');
let seconds = 20;
let timeoutId = null; // to store setTimeout reference
let isRunning = false;


function displaytime(){
    document.getElementById('txt').innerHTML= seconds;
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
            isRunning=false;
            seconds=20;
            return;
    }
    
    displaytime();
    timeoutId=setTimeout(startime,1000);
    seconds--;
    function checktime(i){
    return i<10? "0" + i : i;
}
}


button.addEventListener('click', runtime);
