// variable
let text = document.querySelector('h2');
let textArea = document.querySelector('textarea');
let btnStart = document.querySelector('button#start');
let btnPause = document.querySelector('button#pause');
let countMs = 0;
let countS = 0;
let countM = 0;

// Start the chronometer
function start(){
    time = setInterval(chronometer, 10);
    btnStart.style.display = 'none';
    btnPause.style.display = 'block'
}

// Pause the chronometer
function pause(){
    clearInterval(time);
    btnStart.style.display = 'block';
    btnPause.style.display = 'none';
}

// Chronometer
function chronometer(){
    if(countMs <= 99){
        countMs++
    }else if (countS < 59){
        countMs = 0;
        countS++
    }else{
        countMs = 0;
        countS = 0;
        countM++
    }
    text.innerHTML = `${countM < 10 ? '0' + countM : countM}:${countS < 10 ? '0' + countS : countS}:${countMs < 10 ? '0' + countMs : countMs}`;
}

// clear the chronometer
function clearCode(){
    textArea.innerHTML = `Finished in ${countM}:${countS}:${countMs}`;
    clearInterval(time);
    countMs = 0;
    countS = 0;
    countM = 0;
    text.innerHTML = `00:00:00`;
}
